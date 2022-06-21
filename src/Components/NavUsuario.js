import { Link } from "react-router-dom";
import ImgPerfil from "./ImgPerfil";
import './NavUsuario.css'
export default function NavUsuario(){
  let inicioSesion= false;
  return(
    <div className="ml-3 mt-1">
      <div className="nav-usuario mb-2">
      <ImgPerfil></ImgPerfil>
      </div>
      <ul>
        <li className="text-lg font-bold my-4 flex">
          <Link to='/Ingresar'>
            <h1 className="bg-violet-600 rounded-lg px-2 py-1 text-white">Ingresar</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}