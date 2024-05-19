import React from 'react';
import dados from '../json/dados.json';

export default function Notificacao() {

    const registroUsuario = JSON.parse(localStorage.getItem('usuario')).registro;

    const usuarioAtual = dados.find(usuario => usuario.registro === registroUsuario);

    if (usuarioAtual) {

        const proximosExames = usuarioAtual.exame.map((exame, index) => ({
            exame,
            dataExame: usuarioAtual.dataExame[index]
        }));

        return (
            <div>
                <h3>Notificações</h3>
                <div>
                    {proximosExames.map((item, index) => (
                        <div key={index}>
                            <h1>{item.exame}</h1>
                            <p>Data: {item.dataExame}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return <div>Usuário não encontrado.</div>;
    }
}
