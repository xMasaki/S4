import React, { useState } from 'react'
import dados from "../json/dados.json"
import logo from "../../img/logo.png"
import txtLogo from "../../img/S.png"

import "../../Style/componentes/Login.scss"

function verificarCredenciais(registro, senha) {
    const usuarios = dados

    return usuarios.find(usuario => usuario.registro === registro && usuario.senha === senha);
}  

export default function Login() {
    const [registro, valRegistro] = useState('');
    const [senha, valSenha] = useState('');
    const [erro, valErro] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const usuario = verificarCredenciais(registro, senha);
        console.log(usuario)

        if (usuario) {
            localStorage.setItem('usuario', JSON.stringify(usuario));
            if (usuario.tipo === "paciente") {
                window.location.href = "Home";
            } else if (usuario.tipo === "medico") {
                window.location.href = "Medico";
            }
        } else {
            valErro('Login inválido!');
        }
    }

    return (
        <div id='allLogin'>
            <div id='Login'>
                <div id='Logos'>
                    <img id='imgLogo' src={logo} alt="logo" />
                    <img id='txtLogo' src={txtLogo} alt="SISSI" />
                </div>

                {erro && <p style={{ color: 'red' }}>{erro}</p>}
                <form id='formLogin' onSubmit={handleSubmit}>
                        <input id='registroLogin' type="number" placeholder='Digite seu registro' value={registro} onChange={(e) => valRegistro(e.target.value)} />
                        <input id='senhaLogin' type="password" placeholder='Digite sua senha' value={senha} onChange={(e) => valSenha(e.target.value)} />
                    <button id='btnLogin' type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}
