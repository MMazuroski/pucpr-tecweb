import React, { useState } from "react";
import firebase from "./firebase";
import { Link, useNavigate, useHistory } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User logged in!');
            }).catch((error) => {
                console.log('Failed to login: ', error.message);

                setErrorMessage('Usuário não cadastrado e/ou senha incorreta!');
            });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                console.log('User: ', user);

                firebase.firestore().collection('users').doc(user.uid).get().then((doc) => {
                    if (doc.exists) {
                        const data = doc.data();
                        navigate('/principal', { replace: true, state: { data } });
                    }
                });
            } else {
                setUser(null);
                navigate('/login');
            }
        });
    }


    return (
        <div className="login-container">
            <form onSubmit={login}>
                <h1>Fazer Login</h1>
                <p><input type="email" placeholder="Digite seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                ></input></p>
                <p><input type="password" placeholder="Digite sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                ></input></p>

                <button type="submit">Entrar</button>
            </form>

            {errorMessage && <p>{errorMessage}</p>}
            <p><Link to="/">Voltar</Link></p>
        </div>
    );
}

export default Login;

