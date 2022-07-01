import './CrearPostBtn.css'
import {MdOutlineAdd} from 'react-icons/md'
import { Link } from 'react-router-dom';

export default function CrearPostBtn(){
    return(
        <Link to='/CrearPost'>
            <div className="crear-post-btn text-5xl">
                <MdOutlineAdd/>
            </div>
        </Link>
    );
}