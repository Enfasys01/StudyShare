let datos = [
    {
      id:1,
      titulo:'titulo1',
      usuario:'usuario1'
    },
    {
      titulo:'titulo2',
      usuario:'usuario2',
      id:2,
    },
  ];

export function getPosts(){
    return datos;
}

export function getPost(id){
    return datos.find(e=>e.id==id);
}