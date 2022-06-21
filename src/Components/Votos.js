import './Votos.css'

export default function Votos(props){
  return(
    <div className={props.cont? 'contenedor grid grid-cols-1 votos text-violet-400 pt-2 basis-1/6':'grid grid-cols-1 votos text-violet-400 pt-2 basis-1/6'}>
      <div className='flex justify-center my-1 '>
        <svg width="20" height="18" viewBox="0 0 20 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.40192 1.5C8.55662 -0.5 11.4434 -0.5 12.5981 1.5L19.5263 13.5C20.681 15.5 19.2376 18 16.9282 18H3.07179C0.762393 18 -0.68098 15.5 0.473721 13.5L7.40192 1.5Z"/>  
        </svg>
      </div>
      <div className='text-center -my-1 text-black'>{props.data.votos}</div>
        <div className='flex justify-center'>
          <svg width="20" height="18" viewBox="0 0 20 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5981 16.5C11.4434 18.5 8.55662 18.5 7.40192 16.5L0.47372 4.5C-0.680979 2.5 0.762398 -2.0315e-06 3.0718 -1.8296e-06L16.9282 -6.18236e-07C19.2376 -4.16342e-07 20.681 2.5 19.5263 4.5L12.5981 16.5Z"/>
          </svg>    
        </div>
    </div>
  );
}