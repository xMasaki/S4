import React, { useState } from 'react';
import dados from "../json/dados.json";

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
    <div>
      <h3>Histórico de Exames</h3>
      <div>
        <button onClick={handleEmBreve}>Em Breve</button>
        <button onClick={handleConcluido}>Concluído</button>
      </div>
      
      {examesEmBreve.length > 0 && (
        <div>
          <h4>Exames em Breve</h4>
          {examesEmBreve.map(item => (
            <div key={item.numExame}>
              <h2>{item.exame}</h2>
              <p>Data: {item.dataExame}</p>
            </div>
          ))}
        </div>
      )}

      {examesConcluidos.length > 0 && (
        <div>
          <h4>Exames Concluídos</h4>
          {examesConcluidos.map(item => (
            <div key={item.numHistorico}>
              <h2>{item.historico}</h2>
              <p>Data: {item.dataHistorico}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}