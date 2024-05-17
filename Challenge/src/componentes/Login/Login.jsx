import React, { useState } from 'react'

export default function Login() {

    const usuarios = [
        {usuario: 'Jeferson', senha: 'Jeferson123'},
        {usuario: 'Joseh', senha: 'Joseh456'},
        {usuario: 'Larissa', senha: 'Larissa789'},
        {usuario: 'Lucas', senha: 'Lucas010'},
        {usuario: 'Vitor', senha: 'Vitor011'}
    ]

    const [usuario, valUsuario] = useState('');
    const [senha, valSenha] = useState('');
    const [erro, valErro] = useState('');

    const validacao = () => {
        for (let teste of usuarios) {
            if (teste.usuario === usuario && teste.senha === senha){
                return true;
            }
        }
        return false;
    }

    const resposta = (event) => {
        event.preventDefault();
        if (validacao()) {
            console.log('Login bem sucedido!');
        } else {
            valErro('Login inválido!');
        }
    }

  return (
    <div>
        <h2>Login</h2>
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        <form onSubmit={resposta}>
            <div>
                <label htmlFor="username">Usuário:</label>
                <input type="text" id="usuario" value={usuario} onChange={(e) => valUsuario(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="password" id="senha" value={senha} onChange={(e) => valSenha(e.target.value)} />
            </div>
            <button type="submit">Entrar</button>
        </form>
    </div>
  )
}
