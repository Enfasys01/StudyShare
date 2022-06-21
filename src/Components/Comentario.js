import ImgPerfil from "./ImgPerfil";
import Separador from "./Separador";
import Votos from './Votos'

export default function Comentario(props){
  return(
    <>
    <Separador></Separador>
    <div className="flex flex-row">
      <Votos data={props.data}></Votos>
      <div className='basis-5/6 pl-2'>
        <ul className="py-2">
          <li className="flex flex-row">
            <ImgPerfil></ImgPerfil>
            <h2 className='mt-3 ml-2'>{props.data.usuario}</h2>
          </li>
          <li>
            <h1>{props.data.descripcion}</h1>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}