import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DetallePost from './routes/DetallePost';
import Navbar from './Components/Navbar';
import PostInfo from './Components/PostInfo';
import Ingresar from './routes/Ingresar';
import IniciarSesion from './Components/IniciarSesion';
import CrearCuenta from './Components/CrearCuenta';
import Usuario from './routes/Usuario';
import UsuarioInfo from './Components/UsuarioInfo';
import CrearPost from './routes/CrearPost';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Navbar></Navbar>
    <div className='sol'></div>
    <Routes>
      <Route path='/' element={<App></App>}></Route>
      <Route path='DetallePost' element={<DetallePost/>}>
        <Route path=':postId' element={<PostInfo/>}></Route>
      </Route>
      <Route path='Ingresar' element={<Ingresar/>}>
        <Route path='IniciarSesion' element={<IniciarSesion/>}></Route>
        <Route path='CrearCuenta' element={<CrearCuenta/>}></Route>
      </Route>
      <Route path='Usuario' element={<Usuario/>}>
        <Route path=':usuarioId' element={<UsuarioInfo/>}></Route>
      </Route>
      <Route path='CrearPost' element={<CrearPost/>}></Route>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
