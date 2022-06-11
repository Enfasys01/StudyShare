let datos = [
    {
      id:1,
      titulo:'titulo1',
      usuario:'usuario1',
      votos:'576',
      materia:'materia1',
      etiquetas:['tag1.1','tag1.2']
    },
    {
      id:2,
      titulo:'titulo2',
      usuario:'usuario2',
      votos:'111',
      materia:'materia2',
      etiquetas:['tag2.1','tag2.2']
    },
  ];

export function getPosts(){
    return datos;
}

export function getPost(id){
    return datos.find(e=>e.id==id);
}