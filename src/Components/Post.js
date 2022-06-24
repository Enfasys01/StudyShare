import { Link } from 'react-router-dom';
import ImgPerfil from './ImgPerfil';
import Votos from './Votos';

export default function Post(props){
  
  const style={
    backgroundColor:'red'//props.data.Color
  }
  return(
    <div className='flex flex-row'>
        <Votos data={props.data} cont={true}></Votos>
        <div className='contenedor ml-2'>
          <ul>
            <li>
              <div className='text-left flex flex-row'>
                <Link to='/Usuario'>
                <ImgPerfil></ImgPerfil>
                </Link>
                <Link to='/Usuario'>
                <p className='mt-3 ml-2'>{props.data.nombre}</p>
                </Link>
              </div>
            </li>
            <li>
              <div className='font-bold py-1 text-lg text-left'>
                <Link to={`/DetallePost/${props.data.ID}`}>{props.data.titulo}</Link>
              </div>
            </li>
            <li className='flex font-normal text-white space-x-1 text-sm'>
              <div className='bg-red-500 rounded-lg px-1' style={style}>
                {props.data.Materia}
              </div>
              {/*props.data.etiquetas.map(e=>{return(<div className='bg-violet-600 rounded-lg px-1'>{e}</div>);*})*/}
            </li>
          </ul>
        </div>
      </div>
  );
}