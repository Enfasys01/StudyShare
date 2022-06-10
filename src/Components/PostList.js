import Post from './Post.js';
import './PostList.css'

let datos='h'

export default function PostList(props){
    return(
      <div class='lista-posts'>
        {props.data.map(e=>{
          return(<Post data={e}/>);
        })}
      </div>
    )
}