import React, { useState } from 'react';
import fs from "fs";
import registros from '../1Dados/Dados';
import dados from '../json/dados.json';

import '../../Style/componentes/Triagem.scss';

export default function Formulario() {
    const [tipo, setTipo] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [sexo, setSexo] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco ] = useState('');
    const [numero, setNumero] = useState('');
    const [senha, setSenha] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const novoRegistro = { tipo, nome, sobrenome, sexo, celular, email, endereco, numero, senha };
        registros.push(novoRegistro);
        dados.push(novoRegistro);
        //num de registro
        setTipo('');
        setNome('');
        setSobrenome('');
        setSexo('');
        setCelular('');
        setEmail('');
        setEndereco('');
        setNumero('');
        setSenha('');
        fs.writeFileSync({registros}, 'export default ' + JSON.stringify(registros));
        fs.writeFileSync({dados}, 'export default ' + JSON.stringify(dados));
    };

    return (
        <div id='itemsTriagem'>
            <h2>Formulário</h2>
            <form id='formTriagem' onSubmit={handleSubmit}>
                {/* num de registro */}
                <div id='divTriagem'>
                    <label htmlFor="tipo">Tipo:</label>
                    <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="paciente">Paciente</option>
                        <option value="medico">Médico</option>
                    </select>
                </div>
                <div id='divTriagem'>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div id='divTriagem'>
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input type="text" id="sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                </div>
                <div id='divTriagem'>
                    <label htmlFor="sexo">Sexo:</label>
                    <select id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div>
                <div id='divTriagem'>
                    <label htmlFor="celular">Número de Celular:</label>
                    <input type="tel" id="celular" value={celular} onChange={(e) => setCelular(e.target.value)} />
                </div>
                <div id='divTriagem'>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div id='divTriagem'>
                    <label htmlFor="endereco">Endereço:</label>
                    <input type="text" id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                </div>
                <div id='divTriagem'>
                    <label htmlFor="numero">Número:</label>
                    <input type="number" id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
                </div>
                <div id='divTriagem'>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>

                <button type="submit">Adicionar Registro</button>
            </form>
        </div>
    );
}
