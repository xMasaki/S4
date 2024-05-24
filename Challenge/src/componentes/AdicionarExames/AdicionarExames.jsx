import React, { useState } from 'react';
import fs from "fs";
import dados from '../json/dados.json';

import "../../Style/componentes/AdicionarExame.scss"

export default function AdicionarExame() {
    const [registro, setRegistro] = useState('');
    const [exame, setExame] = useState('');
    const [data, setData] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const registroExistente = dados.find(item => item.registro === registro);

        if (registroExistente) {
            registroExistente.exame.push(exame);
            registroExistente.dataExame.push(data);
            registroExistente.numExame = (registroExistente.exame.length).toString();
            fs.writeFileSync('../json/dados.json', JSON.stringify(dados));

            setRegistro('');
            setExame('');
            setData('');
        } else {
            console.log('Registro não encontrado.');
        }
    };

    return (
        <div id='itensAdicionar'>
            <h2>Formulário</h2>
            <form id='formAdicionar' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="registro">Registro: </label>
                    <input type="text" id="registro" value={registro} onChange={(e) => setRegistro(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="exame">Exame: </label>
                    <select id="exame" value={exame} onChange={(e) => setExame(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="tomografia">Tomografia</option>
                        <option value="hemograma">Hemograma</option>
                        <option value="ressonancia">Ressonancia Magnética</option>
                        <option value="eletrocardiograma">Eletrocardiograma</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="data">Data: </label>
                    <input type="date" id="data" value={data} onChange={(e) => setData(e.target.value)} />
                </div>

                <button type="submit">Adicionar Exame</button>
            </form>
        </div>
    );
}
