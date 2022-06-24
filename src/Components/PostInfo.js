import './PostInfo.css';
import { Link, useParams } from "react-router-dom";
import { getPost } from "../datos";
import Separador from '../Components/Separador';
import {BiCommentDetail} from 'react-icons/bi'
import Comentario from './Comentario';
import Votos from './Votos';
import ImgPerfil from './ImgPerfil';

import axios from "axios";
import React from "react";

export default function PostInfo(){
    let params=useParams();
    const [post, setPost] = React.useState(null);
    const url = "http://10.152.2.17:3000/TraerPostsMasRecientes";

    React.useEffect(() => {
      axios.get(url).then(res=>{
        console.log(res.data)
        setPost(res.data);
      });
    }, []);
    
    if(!post){return null;}

    return(
      <div className='lista'>
        <div className='contenedor'>
          <div className='flex flex-row mb-2'>
            <Votos data={data}></Votos>
            <div className='basis-5/6 pl-2'>
              <ul>
                <Link to='/'>
                  <li>
                    <div className='text-left flex flex-row'>
                      <Link to='/Usuario'>
                        <ImgPerfil></ImgPerfil>
                      </Link>
                      <Link to='/Usuario'>
                        <p className='mt-3 ml-2'>{data.usuario}</p>
                      </Link>
                    </div>
                  </li>
                </Link>
                <li className='flex font-normal text-white space-x-1 text-sm mt-4'>
                  <div className='bg-red-500 rounded-lg px-1'>
                    {data.materia}
                  </div>
                  {data.etiquetas.map(e=>{return(<div className='bg-violet-600 rounded-lg px-1'>{e}</div>);})}
                    
                </li>
              </ul>
            </div>
          </div>
          <Separador></Separador>
          <div className='flex flex-row'>
            <ul>
              <li>
                <h1 className='font-bold text-2xl my-2'>{data.titulo}</h1>
              </li>
              <li>
                <p>{data.descripcion}</p>
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
          {data.comentarios.map(e=>{return(<Comentario data={e}></Comentario>);})}
        </div>
      </div>
    );
}