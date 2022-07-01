import './PostInfo.css';
import { Link, useParams } from "react-router-dom";
import Separador from '../Components/Separador';
import {BiCommentDetail} from 'react-icons/bi'
//import Comentario from './Comentario';
import Votos from './Votos';
import ImgPerfil from './ImgPerfil';

import axios from "axios";
import React from "react";
import getUrl from './Url';

export default function PostInfo(){
    let params=useParams();
    const [post, setPost] = React.useState(null);
    const url = `http://${getUrl()}/AgarrarPostPorId/${params.postId}`;
    React.useEffect(() => {
      axios.get(url).then(res=>{
        console.log(res.data)
        setPost(res.data);
      });
      // eslint-disable-next-line
    }, []);
    
    if(!post){return null;}

    return(
      <div className='lista'>
        <div className='contenedor'>
          <div className='flex flex-row mb-2'>
            <Votos data={post}></Votos>
            <div className='basis-5/6 pl-2'>
              <ul>
                <Link to='/'>
                  <li>
                    <div className='text-left flex flex-row'>
                      <Link to='/Usuario'>
                        <ImgPerfil></ImgPerfil>
                      </Link>
                      <Link to='/Usuario'>
                        <p className='mt-3 ml-2'>{post.nombre}</p>
                      </Link>
                    </div>
                  </li>
                </Link>
                <li className='flex font-normal text-white space-x-1 text-sm mt-4'>
                  <div className='bg-red-500 rounded-lg px-1'>
                    {/*post.data.Materia*/}
                  </div>
                  {/*post.data.etiquetas.map(e=>{return(<div className='bg-violet-600 rounded-lg px-1'>{e}</div>);})*/}
                    
                </li>
              </ul>
            </div>
          </div>
          <Separador></Separador>
          <div className='flex flex-row'>
            <ul>
              <li>
                <h1 className='font-bold text-2xl my-2'>{post.titulo}</h1>
              </li>
              <li>
                <p>{post.descripcion}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='contenedor'>
          <div className='flex flex-row'>
            <textarea className='bg-slate-200 px-4 py-2 rounded-3xl basis-5/6 scroll' placeholder='Escribe tu opinión'></textarea>
            <div className='basis-1/6 rounded-3xl bg-violet-600 ml-3 text-white text-3xl flex hover:bg-violet-800 duration-200 h-26 comment-btn'><BiCommentDetail/></div>
          </div>
          <h1 className='my-1 text-lg'>Comentarios</h1>
          {/*post.data.comentarios.map(e=>{return(<Comentario data={e}></Comentario>);})*/}
        </div>
      </div>
    );
}