import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <p><Link to="/login">Login</Link></p>
        <p><Link to="/cadastro">Cadastro</Link></p>
      </nav>
    </div>
  );
}

export default Home;