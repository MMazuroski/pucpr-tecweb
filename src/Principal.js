import React from "react";
import { Link, useLocation } from "react-router-dom";

const Principal = (props) => {

    const location = useLocation();
    
    console.log('location',  location);
    return (
        <div>
          <h2>Página Principal</h2>
          {props && (
            <div>
              <p>Nome: {location.state.data.nome}</p>
              <p>Sobrenome: {location.state.data.sobrenome}</p>
              <p>E-mail: {location.state.data.email}</p>
              <p>Data de Nascimento: {location.state.data.dataNascimento}</p>
            </div>
          )}
            
         <p><Link to="/">Voltar</Link></p>

        </div>
      );
}

export default Principal; 