import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
// import './index.css'
// import './App.scss' -> style vem do App.jsx
// import paginas
import Home from './componentes/Home/Home.jsx'
import Exames from './componentes/Exames/Exames.jsx'
import Historico from './componentes/Historico/Historico.jsx'
import Perfil from './componentes/Perfil/Perfil.jsx'
import Notificacao from './componentes/Notificacao/Notificacao.jsx'
import Configuracao from './componentes/Configuracao/Configuracao.jsx'
import Login from './componentes/Login/Login.jsx'
import Adicionar from './componentes/Adicionar/Adicionar.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,

    children: [
      // mudar '' e </>
      {path: '/', element: <Home/>},
      {path: '/exames', element: <Exames/>},
      {path: '/historico', element: <Historico/>},
      {path: '/perfil', element: <Perfil/>},
      {path: '/notificacao', element: <Notificacao/>},
      {path: '/configuracao', element: <Configuracao/>},
      {path: '/login', element: <Login/>},
      {path: '/adicionar', element: <Adicionar/>}
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
