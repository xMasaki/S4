import { Outlet } from 'react-router-dom'
import './Style/App.scss'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'

export default function App() {
  return (
    <>
      <div className='App'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

