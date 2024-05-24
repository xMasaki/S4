import React, { useState, useEffect } from 'react';
import dados from '../json/dados.json';

import '../../Style/componentes/Perfil.scss';

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioLocalStorage = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioLocalStorage) {
      const usuarioEncontrado = dados.find((item) => item.registro === usuarioLocalStorage.registro);
      if (usuarioEncontrado) {
        setUsuario(usuarioEncontrado);
      }
    }
  }, []);

  return (
    <div id='bdPerfil'>
        <h2>Perfil</h2>
      {usuario && (
        <div id='itemsPerfil'>
          <p>Número de Registro: {usuario.registro}</p>
          <p>Nome: {usuario.nome} {usuario.sobrenome}</p>
          <p>Celular: {usuario.celular}</p>
          <p>Sexo: {usuario.sexo}</p>
          <p>E-mail: {usuario.email}</p>
          <p>Endereço: {usuario.endereco}</p>
          <p>Número: {usuario.numero}</p>
        </div>
      )}
    </div>
  );
}
