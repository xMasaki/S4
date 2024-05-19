import React from 'react';
import dados from '../json/dados.json';

export default function Exames() {
  return (
    <div>
      {dados.map((paciente, index) => (
        <button key={index}>
          <div>
            <h2>{`Paciente ${index + 1}`}</h2>
            <p>Registro: {paciente.registro}</p>
            <p>Tipo: {paciente.tipo}</p>
            <p>Nome: {paciente.nome} {paciente.sobrenome}</p>
            <p>Sexo: {paciente.sexo}</p>
            <p>Email: {paciente.email}</p>
            <p>Telefone: {paciente.celular}</p>
            <p>Endereço: {paciente.endereco}, {paciente.numero}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

