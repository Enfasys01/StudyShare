
import Post from './Post.js';
import './PostList.css'
import { getPosts } from '../datos.js';
export default function PostList(){
  let data= getPosts();
    return(
      <div class='lista-posts'>
        {data.map(e=>{
          return(<Post data={e}/>);
        })}
      </div>
    )
}