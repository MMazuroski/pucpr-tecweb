import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cadastro from "./Cadastro";
import Login from "./Login";
import Principal from "./Principal";

const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes >
                <Route exact={true} path="/" element={<Home />} />
                <Route exact={true} path="/login" element={<Login />} />
                <Route exact={true} path="/cadastro" element={<Cadastro />} />
                <Route exact={true} path="/principal" element={<Principal />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;