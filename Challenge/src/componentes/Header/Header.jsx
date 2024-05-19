import { Link } from "react-router-dom";
import React from 'react'

export default function Header() {
  return (
    <header>
        <nav>
            <Link to='/'><p>Sissi</p></Link>
            <div>
              <Link to='/'>Login</Link>
              <Link to='Home'>Home</Link>
              <Link to='Exames'>Exames</Link>
              <Link to='Historico'>Historico de Exames</Link>
              <Link to='Perfil'>Perfil</Link>
              <Link to='Notificacao'>Notificações</Link>
              <Link to='Configuracao'>Configurações</Link>
              <Link to='Triagem'>Triagem</Link>
              <Link to='Medico'>Medico</Link>
            </div>
        </nav>
    </header>
  )
}
