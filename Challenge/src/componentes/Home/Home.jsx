import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../../Style/componentes/Home.scss'

export default function Home() {

    const navigate = useNavigate();

    const handleExame = () => navigate("/exames");
    const handleHistorico = () => navigate("/historico");

  return (
    <body id='bdHome'>
        <button id='btnHome' onClick={handleExame}>Exames</button>
        <button id='btnHome' onClick={handleHistorico}>Historico de Exames</button> 
    </body>
        
  )
}
