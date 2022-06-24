//import { useParams } from "react-router-dom";
import ImgPerfil from './ImgPerfil';
import './UsuarioInfo.css'
import Separador from './Separador';
import PostList from './PostList';

export default function UsuarioInfo(){
  //let params=useParams();
  return(
    <>
      <div className="lista">
        <div className="contenedor">
          <div className="flex flex-row foto">
            <ImgPerfil></ImgPerfil>
            <h1 className='mt-6 font-bold pl-3 text-2xl'>(usuario)</h1>
          </div>
          <h2 className='flex flex-row my-2'><p className='mr-1 font-semibold'>(num)</p>Puntos de reputacion</h2>
          <Separador/>
          <div className='flex flex-row mt-2 text-lg font-medium'>
            <h2 className='flex flex-row mr-4'><p className='mr-1'>(num)</p> Resúmenes</h2>
            <h2 className='flex flex-row'><p className='mr-1'>(num)</p> Preguntas</h2>
          </div>
        </div>
      </div>
      <div className='px-2'>
      <PostList></PostList>
      </div>
    </>
  );
}