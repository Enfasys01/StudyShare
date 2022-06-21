import { Link } from 'react-router-dom';
import ImgPerfil from './ImgPerfil';
import Votos from './Votos';

export default function Post(props){
  return(
    <div className='flex flex-row'>
        <Votos data={props.data} cont={true}></Votos>
        <div className='contenedor basis-5/6'>
          <ul>
            <li>
              <div className='text-left flex flex-row'>
                <ImgPerfil></ImgPerfil>
                <p className='mt-3 ml-2'>{props.data.usuario}</p>
              </div>
            </li>
            <li>
              <div className='font-bold py-1 text-lg text-left'>
                <Link to={`/DetallePost/${props.data.id}`}>{props.data.titulo}</Link>
              </div>
            </li>
            <li className='flex font-normal text-white space-x-1 text-sm'>
              <div className='bg-red-500 rounded-lg px-1'>
                {props.data.materia}
              </div>
              {props.data.etiquetas.map(e=>{return(<div className='bg-violet-600 rounded-lg px-1'>{e}</div>);})}
                
            </li>
          </ul>
        </div>
      </div>
  );
}