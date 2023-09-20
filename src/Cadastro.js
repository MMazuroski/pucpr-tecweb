import React, { useState } from "react";
import firebase from "./firebase";
import { Link, useNavigate } from "react-router-dom";

const Cadastro = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const cadastro = (e) => {
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log('User created!');

                firebase.firestore().collection('users').doc(userCredential.user.uid).set({
                    nome: nome,
                    sobrenome: sobrenome,
                    dataNascimento: dataNascimento,
                    email: email,
                }).then(() => {
                    console.log('User saved!');

                    navigate('/login');
                });
            }).catch((error) => {
                console.log('Failed to create user: ', error.message);

                setErrorMessage('Erro no cadastro!');
            });
    }

    return (
        <div className="login-container">
            <form onSubmit={cadastro}>
                <h1>Cadastrar</h1>
                <p><input type="email" placeholder="Digite seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                ></input></p>
                <p><input type="password" placeholder="Digite sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                ></input></p>
                <p><input type="text" placeholder="Digite seu nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                ></input></p>
                <p><input type="text" placeholder="Digite seu sobrenome"
                    value={sobrenome}
                    onChange={e => setSobrenome(e.target.value)}
                ></input></p>
                <p><input type="date" placeholder="Digite sua data de nascimento"
                    value={dataNascimento}
                    onChange={e => setDataNascimento(e.target.value)}
                ></input></p >

                <button type="submit">Cadastrar</button>
            </form >
            {errorMessage && <p>{errorMessage}</p>}
            <p><Link to="/">Voltar</Link></p>
        </div >
    );
}

export default Cadastro;

