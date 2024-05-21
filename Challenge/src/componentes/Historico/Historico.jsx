import React, { useState } from 'react';
import dados from "../json/dados.json";

import '../../Style/componentes/Historico.scss';

export default function Historico() {
  const [examesEmBreve, sevalExamesEmBreve] = useState([]);
  const [examesConcluidos, sevalExamesConcluidos] = useState([]);

  const handleEmBreve = () => {
    const localStorageData = JSON.parse(localStorage.getItem('usuario'));
    if (localStorageData) {
      const emBreve = dados.filter(item => localStorageData.registro === item.registro && item.numExame);
      sevalExamesEmBreve(emBreve);
      sevalExamesConcluidos([]);
    }
  };

  const handleConcluido = () => {
    const localStorageData = JSON.parse(localStorage.getItem('usuario'));
    if (localStorageData) {
      const concluidos = dados.filter(item => localStorageData.registro === item.registro && item.numHistorico);
      sevalExamesConcluidos(concluidos);
      sevalExamesEmBreve([]);
    }
  };

  return (
    <div id='itemsHistorico'>
      <h3 id='tituloHistorico'>Exames</h3>
      <div id='btnsHistorico'>
        <button id='btnHistorico' onClick={handleEmBreve}>Agendados</button>
        <button id='btnHistorico' onClick={handleConcluido}>Realizados</button>
      </div>

      {examesEmBreve.length > 0 && (
        <div>
          {examesEmBreve.map(item => (
            Array.from({ length: item.numExame }, (_, index) => (
              <div id='boxHistorico' key={index}>
                <h2 id='tituloBoxHistorico'>{item.exame[index]}</h2>
                <p id='textoBoxHistorico'>Data: {item.dataExame[index]}</p>
                <p id='textoBoxHistorico'>Local: {item.localExame[index]}</p>
              </div>
            ))
          ))}
        </div>
      )}

      {examesConcluidos.length > 0 && (
        <div>
          {examesConcluidos.map(item => (
            Array.from({ length: item.numHistorico }, (_, index) => (
              <div id='boxHistorico' key={index}>
                <h2 id='tituloBoxHistorico'>{item.historico[index]}</h2>
                <p id='textoBoxHistorico'>Data: {item.dataHistorico[index]}</p>
                <p id='textoBoxHistorico'>Local: {item.localHistorico[index]}</p>
              </div>
            ))
          ))}
        </div>
      )}
    </div>
  );
}

