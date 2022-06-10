import './PostInfo.css'
import { useParams } from "react-router-dom";
import { getPost } from "../datos";
export default function PostInfo(){
    let params=useParams();
    let data = getPost(params.postId);
    return(
        <div className="contenedor post-info">
            <h1>{data.titulo}</h1>
            <h1>{data.usuario}</h1>
        </div>
    );
}