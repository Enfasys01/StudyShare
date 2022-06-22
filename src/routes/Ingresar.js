import '../Components/Ingresar.css'
import { Outlet } from 'react-router-dom'

export default function Ingresar(){
  return(
    <>
      <div className="fondo"></div>
      <div className="lista">
        <div className="contenedor flex card-ingresar">
          <div className='flex flex-row'>
            <div className='basis-1/2 py-2 pr-2'>
              <img className='logo' src='../StudyShare.png' alt='StudyShare-logo'></img>
              <h1 className='text-center text-2xl text-zinc-600 font-bold'>Te damos la bienvenida a StudyShare</h1>
            </div>
            <div className='basis-1/2'>
              <Outlet></Outlet>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
}