import Select from 'react-select';
import '../Components/CrearPost.css'
export default function CrearPost(){
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
    return(
        <>
            <div className="lista">
                <div className="contenedor">
                    <ul>
                        <li className='mb-2'>
                            <input type='text' className='bg-slate-200 px-4 py-2 rounded-3xl sombrita'></input>
                        </li>
                        <li >
                            <textarea className='bg-slate-200 px-4 py-2 rounded-3xl scroll sombrita' placeholder='Descripción'/>
                        </li>
                        <li className='mb-2'>
                            <div className='bg-slate-200 rounded-3xl sombrita'>
                                <div className='flex flex-row'>
                                    <div className='input-text basis-1/2 px-4 py-2 rounded-3xl text-center font-semibold text-white'>Adjuntar Archivo</div>
                                    <div className='basis-1/2 px-4 py-2 rounded-3xl'>...</div>
                                </div>
                            </div>
                        </li>
                        <li className='mb-2'>
                            <div className='bg-slate-200 rounded-3xl sombrita'>
                                <div className='flex flex-row'>
                                    <div className='input-text basis-1/2 px-4 py-2 rounded-3xl text-center font-semibold text-white'>Materia</div>
                                    <div className='basis-1/2 px-4 py-2 rounded-3xl select'>
                                        <Select options={options}></Select>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}