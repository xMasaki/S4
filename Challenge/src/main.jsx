import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

import Erro from './componentes/Erro/Erro.jsx'
import Home from './componentes/Home/Home.jsx'
import Exames from './componentes/Exames/Exames.jsx'
import Historico from './componentes/Historico/Historico.jsx'
import Perfil from './componentes/Perfil/Perfil.jsx'
import Notificacao from './componentes/Notificacao/Notificacao.jsx'
import Configuracao from './componentes/Configuracao/Configuracao.jsx'
import Login from './componentes/Login/Login.jsx'
import Triagem from './componentes/Triagem/Triagem.jsx'
import Medico from './componentes/Medico/Medico.jsx'
import Paciente from './componentes/Pacientes/Pacientes.jsx'
import Addexames from './componentes/AdicionarExames/AdicionarExames.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Erro/>,

    children: [
      // mudar '' e </>
      {path: '/', element: <Login/>},
      {path: '/home', element: <Home/>},
      {path: '/exames', element: <Exames/>},
      {path: '/historico', element: <Historico/>},
      {path: '/perfil', element: <Perfil/>},
      {path: '/notificacao', element: <Notificacao/>},
      {path: '/configuracao', element: <Configuracao/>},
      {path: '/triagem', element: <Triagem/>},
      {path: '/medico', element: <Medico/>},
      {path: '/pacientes', element: <Paciente/>},
      {path: '/adicionarExame', element: <Addexames/>},
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="744062802750-320u3mho1ujdkfjtcajqc9ukb3slp69d.apps.googleusercontent.com">
      <RouterProvider router={router}/>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
