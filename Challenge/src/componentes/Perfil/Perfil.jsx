import React, { useState } from 'react';
import fs from "fs";
import dados from '../json/dados.json';

export default function Perfil() {
    const [email, setEmail] = useState('');
    const [confirmarEmail, setConfirmarEmail] = useState('');
    const [contato, setContato] = useState('');
    const [confirmarContato, setConfirmarContato] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const registro = JSON.parse(localStorage.getItem('usuario')).registro;

        const registroExistente = dados.find(item => item.registro === registro);

        if (registroExistente) {
            if (email === confirmarEmail && contato === confirmarContato) {

                registroExistente.email = email;
                registroExistente.celular = contato;
                fs.writeFileSync('../json/dados.json', JSON.stringify(dados));

                valEmail('');
                valConfirmarEmail('');
                valContato('');
                valConfirmarContato('');

                alert('Dados atualizados com sucesso!');
            } else {
                alert('Os emails ou contatos não coincidem. Por favor, verifique.');
            }
        } else {
            alert('Usuário não encontrado.');
        }
    };

    return (
        <div>
            <div>
                <h4>Nome</h4>
                <div>
                    <h5>nome</h5>
                </div>
                <h4>Nascimento</h4>
                <div>
                    <h5>data</h5>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h4>Digite seu e-mail</h4>
                    <div>
                        <input type="email" value={email} onChange={(e) => valEmail(e.target.value)} />
                    </div>            
                    <h4>Confirme seu e-mail</h4>
                    <div>
                        <input type="email" value={confirmarEmail} onChange={(e) => valConfirmarEmail(e.target.value)} />
                    </div>            
                    <h4>Digite seu contato</h4>
                    <div>
                        <input type="number" value={contato} onChange={(e) => valContato(e.target.value)} />
                    </div>            
                    <h4>Confirme seu contato</h4>
                    <div>
                        <input type="number" value={confirmarContato} onChange={(e) => valConfirmarContato(e.target.value)} />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}
