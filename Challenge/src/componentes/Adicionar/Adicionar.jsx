// import React, { useState } from 'react'

// export default function Adicionar() {

//     const [tipo, valTipo] = useState('');
//     const [nome, valNome] = useState('');
//     const [sobrenome, valSobrenome] = useState('');
//     const [sexo, valSexo] = useState('');
//     const [celular, valCelular] = useState('');

//     const [usuario, valUsuario] = useState('');
//     const [senha, valSenha] = useState('');


//   return (
//     <div>
//         <h2>Formulário</h2>
//             <form>
//                 <div>
//                     <label htmlFor="tipo">Tipo:</label>
//                     <select id="tipo" value={tipo} onChange={(e) => valTipo(e.target.value)}>
//                         <option value="">Selecione</option>
//                         <option value="medico">Médico</option>
//                         <option value="paciente">Paciente</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor="nome">Nome:</label>
//                     <input type="text" id="nome" value={nome} onChange={(e) => valNome(e.target.value)} />
//                 </div>
//                 <div>
//                     <label htmlFor="sobrenome">Sobrenome:</label>
//                     <input type="text" id="sobrenome" value={sobrenome} onChange={(e) => valSobrenome(e.target.value)} />
//                 </div>
//                 <div>
//                     <label htmlFor="sexo">Sexo:</label>
//                     <select id="sexo" value={sexo} onChange={(e) => valSexo(e.target.value)}>
//                         <option value="">Selecione</option>
//                         <option value="masculino">Masculino</option>
//                         <option value="feminino">Feminino</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor="celular">Celular:</label>
//                     <input type="tel" id="celular" value={celular} onChange={(e) => valCelular(e.target.value)} />
//                 </div>

//                 <div>
//                     <label htmlFor="usuario">Usuário:</label>
//                     <input type="text" id="usuario" value={usuario} onChange={(e) => valUsuario(e.target.value)} />
//                 </div>
//                 <div>
//                     <label htmlFor="senha">Senha:</label>
//                     <input type="password" id="senha" value={senha} onChange={(e) => valSenha(e.target.value)} />
//                 </div>

//                 <button type="submit">Entrar</button>
//             </form>
//     </div>
//   )
// }

import React, { useState } from 'react';
import fs from "fs";
import registros from '../1Dados/Dados';

function Formulario() {
    const [tipo, setTipo] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [celular, setCelular] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const novoRegistro = { tipo, usuario, senha, celular };
        registros.push(novoRegistro);
        setTipo('');
        setUsuario('');
        setSenha('');
        setCelular('');
        fs.writeFileSync('./dados.jsx', 'export default ' + JSON.stringify(registros));
    };

    return (
        <div>
            <h2>Formulário</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="tipo">Tipo:</label>
                    <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="cliente">Cliente</option>
                        <option value="administrador">Administrador</option>
                        <option value="funcionário">Funcionário</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="usuario">Usuário:</label>
                    <input type="text" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="celular">Número de Celular:</label>
                    <input type="tel" id="celular" value={celular} onChange={(e) => setCelular(e.target.value)} />
                </div>
                <button type="submit">Adicionar Registro</button>
            </form>
        </div>
    );
}

export default Formulario;

// import React, { useState } from 'react'

// Precisa instalar react hook

// export default function Adicionar() {

//     const {register, handleSubmit} = useForm();

//     const onSubmit = (e) => {
//         console.log(e);
//     }


//   return (
//     <div>
//         <h2>Formulário</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <label>
//                     Nome:
//                     <input type="text" {...register("firstName")} />
//                 </label>
//                 <label>
//                     Sobrenome:
//                     <input type="text" {...register("lastName")} />
//                 </label>
//                 <button type="submit">Entrar</button>
//             </form>
//     </div>
//   )
// }
