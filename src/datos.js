let post = [
    {
      id:1,
      titulo:'titulo1',
      usuario:'usuario1',
      votos:'576',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      materia:'materia1',
      etiquetas:['tag1.1','tag1.2'],
      comentarios:[
        {
          usuario:'user_a1',
          votos:'32',
          descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          usuario:'user_a2',
          votos:'86',
          descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
      ]
    },
    {
      id:2,
      titulo:'titulo2',
      usuario:'usuario2',
      votos:'111',
      descripcion:'desc2',
      materia:'materia2',
      etiquetas:['tag2.1','tag2.2'],
      comentarios:[
        {
          usuario:'user_a1',
          votos:'32',
          descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          usuario:'user_a2',
          votos:'86',
          descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
      ]
    },
  ];



export function getPosts(){
    return post;
}

export function getPost(id){
  // eslint-disable-next-line
    return post.find(e=>e.id==id);
}