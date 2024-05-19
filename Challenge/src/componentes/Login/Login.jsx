import React, { useState } from 'react'
import dados from "../json/dados.json"

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
        <div>
            <h2>Login</h2>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Registro:
                    <input type="number" value={registro} onChange={(e) => valRegistro(e.target.value)} />
                </label>
                <label>
                    Senha:
                    <input type="password" value={senha} onChange={(e) => valSenha(e.target.value)} />
                </label>
                <button type="submit">Entrar</button>
            </form>
        </div>  
    );
}
