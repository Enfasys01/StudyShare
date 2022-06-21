import './ImgPerfil.css'
export default function ImgPerfil(props){
  return(
    <img src={props.src? props.src:'https://agatatour.com/wp-content/uploads/2021/07/user.jpg'} alt='FotoPerfil'></img>
  );
}