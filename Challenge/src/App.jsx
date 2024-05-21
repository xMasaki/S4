import { Outlet, useLocation } from 'react-router-dom';
import './Style/App.scss';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';

export default function App() {
  const location = useLocation();
  
  // Adiciona a classe route-login se a rota atual for '/'
  const routeClass = location.pathname === '/' ? 'route-login' : '';

  return (
    <>
      <div className={`App ${routeClass}`}>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  );
}