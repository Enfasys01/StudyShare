import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import './Navbar.css'
import { GrFormClose } from 'react-icons/gr'
import { BiMenu } from 'react-icons/bi'
export default function Navbar(){
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return(
    <>
      <div className="navbar border-b-2 border-b-zinc-500">
        <Link to='#' className="menu-bars navbar-open">
          <div className="menu-btn">
            <BiMenu onClick={showSidebar} />
          </div>
        </Link>
      </div>
      <nav className={sidebar? 'nav-menu active':'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to='#' className="menu-bars">
              <GrFormClose />
            </Link>
          </li>
          {SidebarData.map((e, index)=>{
            return (
            <li key={index} className={e.class}>
              <Link to={e.path}>
                <div className="flex flex-row">{e.icon}<span className="ml-2">{e.title}</span></div>
                
              </Link>
            </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}