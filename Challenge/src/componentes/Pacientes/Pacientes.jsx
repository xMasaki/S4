import React from 'react';
import dados from '../json/dados.json';

import '../../Style/componentes/Pacientes.scss';

export default function Exames() {
  return (
    <div id='registroLista'>
      {dados.map((paciente, index) => (
        <button id='itemLista' key={index}>
          <div id='pacienteLista'>
            <h2>{`Paciente ${index + 1}`}</h2>
            <div id='pacienteListaRow'>
              <p>Registro: {paciente.registro}</p>
              <p>Tipo: {paciente.tipo}</p>
            </div>
            <div id='pacienteListaRow'>
              <p>Nome: {paciente.nome} {paciente.sobrenome}</p>
            </div>
            <div id='pacienteListaRow'>
              <p>Sexo: {paciente.sexo}</p>
              <p>Telefone: {paciente.celular}</p>
            </div>
            <div id='pacienteListaRow'>
              <p>Email: {paciente.email}</p>
            </div>
            <div id='pacienteListaRow'>
              <p>Endereço: {paciente.endereco}, {paciente.numero}</p>
            </div>
            
          </div>
        </button>
      ))}
    </div>
  );
}

