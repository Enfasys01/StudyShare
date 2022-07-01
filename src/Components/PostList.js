
import Post from './Post.js';
import './PostList.css'
import axios from "axios";
import React,{useEffect,useState} from "react";
import getUrl from './Url.js';
//10.152.5.17:3000/


export default function PostList(){
    const [posts, setPost] = useState(null);
    const url = `http://${getUrl()}/TraerPostsMasRecientes`;
    useEffect(() => {
      axios.get(url).then(res=>{
        console.log(res.data)
        setPost(res.data);
      });
      // eslint-disable-next-line
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