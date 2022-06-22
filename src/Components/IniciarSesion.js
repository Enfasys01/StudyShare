import {Link} from 'react-router-dom'

export default function IniciarSesion(){
  return(
    <ul>
      <li>
        <h1 className='text-center font-bold text-xl mt-5 mb-3'>Iniciar sesión</h1>
      </li>
      <li>
        <input type='text' className='input px-2 my-2' placeholder='Nombre de usuario o mail'></input>
      </li>
      <li>
        <input type='text' className='input px-2 my-2' placeholder='Contraseña'></input>
      </li>
      <li>
        <button className='ingresar bg-violet-600 text-white font-bold'>Ingresar</button>
      </li>
      <li className='mt-2 link'>
        ¿No tienes cuenta? <Link to='/Ingresar/CrearCuenta'>Crea una</Link>
      </li>
    </ul>
  );
}