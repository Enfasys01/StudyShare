import {HiOutlineBookmark} from 'react-icons/hi';
import {BiUser} from 'react-icons/bi';
import {BiBell} from 'react-icons/bi';
import {BiCog} from 'react-icons/bi';
import {BiHomeAlt} from 'react-icons/bi'

export const SidebarData = [
  {
    title:'Home',
    path:'/',
    icon:<BiHomeAlt/>,
    class:'nav-text',
  },
  {
    title:'Mi perfil',
    path:'/',
    icon: <BiUser/>,
    class:'nav-text',
  },
  {
    title:'Notificaciones',
    path:'/',
    icon: <HiOutlineBookmark/>,
    class:'nav-text',
  },
  {
    title:'Elementos guardados',
    path:'/',
    icon: <BiBell/>,
    class:'nav-text',
  },
  {
    title:'Configuración',
    path:'/',
    icon: <BiCog/>,
    class:'nav-text',
  },
]