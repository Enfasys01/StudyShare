import axios from "axios";
import React from "react";
//10.152.5.17:3000/
export default function LoadBackground() {
    const [post, setPost] = React.useState(null);
    const url = "http://10.152.2.17:3000/TraerPostsMasRecientes";

    React.useEffect(() => {
      axios.get(url).then(res=>{
        console.log(res.data)
        setPost(res.data);
      });
    }, []);
    
    if(!post){return null;}

    return ;
  }
