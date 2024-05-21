import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dados from '../json/dados.json';

import '../../Style/componentes/Medico.scss';

export default function Home() {
    const navigate = useNavigate();
    const [registroInput, valRegistroInput] = useState('');
    const [dadosDoRegistro, valDadosDoRegistro] = useState(null);

    const handlePacientes = () => navigate("/pacientes");
    const handleAdicionarExame = () => navigate("/adicionarExame");

    const handleBuscar = () => {
        const registro = registroInput.trim();
        if (registro !== '') {
            const registroEncontrado = dados.find(item => item.registro === registro);
            valDadosDoRegistro(registroEncontrado);
        }
    };

    return (
        <div id='homeMedico'>
            <div id='buscaMedico'>
                <input id='inputBuscar'
                    placeholder='Buscar pacientes'
                    type="text"
                    value={registroInput}
                    onChange={e => valRegistroInput(e.target.value)}
                />
                <button id='btnBuscar' onClick={handleBuscar}>Buscar</button>
            </div>
            {dadosDoRegistro && (
                <div>
                    <div id='buscaDados'>
                        <h4>Dados do Registro {dadosDoRegistro.registro}</h4>
                        <p>Nome: {dadosDoRegistro.nome}</p>
                        <p>Sobrenome: {dadosDoRegistro.sobrenome}</p>
                        <p>Sexo: {dadosDoRegistro.sexo}</p>
                        <p>Endereço: {dadosDoRegistro.endereco}, {dadosDoRegistro.numero}</p>
                        <p>Email: {dadosDoRegistro.email}</p>
                        <p>Celular: {dadosDoRegistro.celular}</p>
                    </div>
                    <div id='buscaExame'>
                        <h4>Histórico de Exames</h4>
                        {dadosDoRegistro.dataHistorico.map((data, index) => (
                            <div key={index}>
                                <p className='pExameMedico'>{dadosDoRegistro.historico[index]}</p>
                                <p>Data: {data}</p>
                            </div>
                        ))}
                    </div>

                    <div id='buscaExame'>
                        <h4>Exames Futuros</h4>
                        {dadosDoRegistro.dataExame.map((data, index) => (
                            <div key={index}>
                                <p className='pExameMedico'>{dadosDoRegistro.exame[index]}</p>
                                <p>Data: {data}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <button id='listaMedico' onClick={handlePacientes}>Lista de Pacientes</button>
            <button id='listaMedico' onClick={handleAdicionarExame}>Adicionar Exames</button>
        </div>
    );
}

