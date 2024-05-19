import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();

    const handleExame = () => navigate("/exames");
    const handleHistorico = () => navigate("/historico");

  return (
    <div>
        <button onClick={handleExame}>Exames</button>
        <button onClick={handleHistorico}>Historico de Exames</button> 
    </div>
        
  )
}
