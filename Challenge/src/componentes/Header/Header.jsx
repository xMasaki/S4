import { Link } from "react-router-dom";
import React, { useState} from 'react'
import logoNome from '../../img/logo-SISSI.png'
import { FaBars, FaCog, FaBell, FaUserAlt } from "react-icons/fa";


import "../../Style/componentes/Header.scss"

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <header>
      <div className={sidebarOpen ? 'overlay open' : 'overlay'} onClick={closeSidebar}></div>
        <nav>
            <img id="logoHeader" src={logoNome} alt="Logo" />
            <button id="menuBar" onClick={toggleSidebar}><FaBars /></button>
            <div className={sidebarOpen ? 'sidebar open' : 'sidebar'}>
              <Link to='/' id='navLogin'>Login</Link>
              <Link to='Home' id='navHome'>Home</Link>
              <Link to='Exames' id='navExames'>Exames</Link>
              <Link to='Historico' id='navHistorico'>Historico de Exames</Link>
              <Link to='Perfil' id='navPerfil'><FaUserAlt />Perfil</Link>
              <Link to='Notificacao' id='navNotificacoes'><FaBell />Notificações</Link>
              <Link to='Configuracao' id='navConfiguracoes'><FaCog />Configurações</Link>
              <Link to='Triagem' id='navTriagem'>Triagem</Link>
              <Link to='Medico' id='navMedico'>Médico</Link>
              <Link to='Pacientes' id='navPacientes'>Lista de Pacientes</Link>
              <Link to='adicionarExame' id='navAdicionarExame'>Adicionar Exame</Link>
            </div>
        </nav>
    </header>
  )
}
