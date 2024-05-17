// import React from 'react'

// export default function Footer() {
//   return (
//     <footer>
//         <p>COPYRIGHT © 2024 MASAKI - TODOS OS DIREITOS RESERVADOS.</p>
//     </footer>
//   )
// }


import React from 'react';
import registros from '../1Dados/Dados';

function Footer() {
    const handlePrint = () => {
        console.log(registros); // ou faça algo para exibir os registros na interface
    };

    return (
        <div>
            <h2>Imprimir</h2>
            <button onClick={handlePrint}>Imprimir Registros</button>
        </div>
    );
}

export default Footer;
