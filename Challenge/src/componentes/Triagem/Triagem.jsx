import React, { useState } from 'react';
import fs from "fs";
import registros from '../1Dados/Dados';
import dados from '../json/dados.json';

function Formulario() {
    const [tipo, valTipo] = useState('');
    const [nome, valNome] = useState('');
    const [sobrenome, valSobrenome] = useState('');
    const [sexo, valSexo] = useState('');
    const [celular, valCelular] = useState('');
    const [email, valEmail] = useState('');
    const [endereco, valEndereco ] = useState('');
    const [numero, valNumero] = useState('');
    const [senha, valSenha] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const novoRegistro = { tipo, nome, sobrenome, sexo, celular, email, endereco, numero, senha };
        registros.push(novoRegistro);
        dados.push(novoRegistro);
        //num de registro
        valTipo('');
        valNome('');
        valSobrenome('');
        valSexo('');
        valCelular('');
        valEmail('');
        valEndereco('');
        valNumero('');
        valSenha('');
        fs.writeFileSync({registros}, 'export default ' + JSON.stringify(registros));
        fs.writeFileSync({dados}, 'export default ' + JSON.stringify(dados));
    };

    return (
        <div>
            <h2>Formulário</h2>
            <form onSubmit={handleSubmit}>
                {/* num de registro */}
                <div>
                    <label htmlFor="tipo">Tipo:</label>
                    <select id="tipo" value={tipo} onChange={(e) => valTipo(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="paciente">Paciente</option>
                        <option value="medico">Médico</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" value={nome} onChange={(e) => valNome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input type="text" id="sobrenome" value={sobrenome} onChange={(e) => valSobrenome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="sexo">Sexo:</label>
                    <select id="sexo" value={sexo} onChange={(e) => valSexo(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="celular">Número de Celular:</label>
                    <input type="tel" id="celular" value={celular} onChange={(e) => valCelular(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" value={email} onChange={(e) => valEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="endereco">Endeeço:</label>
                    <input type="text" id="endereco" value={endereco} onChange={(e) => valEndereco(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="numero">Número:</label>
                    <input type="number" id="numero" value={numero} onChange={(e) => valNumero(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" value={senha} onChange={(e) => valSenha(e.target.value)} />
                </div>

                <button type="submit">Adicionar Registro</button>
            </form>
        </div>
    );
}

// localStorage.setItem("seção", JSON.stringify(seção));
// var seçãoRestaurada = JSON.parse(localStorage.getItem("seção"));

export default Formulario;
