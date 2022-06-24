
import Post from './Post.js';
import './PostList.css'
import { getPosts } from '../datos.js';
import axios from "axios";
import React from "react";
//10.152.5.17:3000/


export default function PostList(){
    const [posts, setPost] = React.useState(null);
    const url = "http://10.152.2.17:3000/TraerPostsMasRecientes";

    React.useEffect(() => {
      axios.get(url).then(res=>{
        console.log(res.data)
        setPost(res.data);
      });
    }, []);
    
    if(!posts){return null;}

    return(
      <div class='lista'>
        {posts.map(e=>{
          return(<Post data={e}/>);
        })}
      </div>
    )
}