import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import{sidebardata} from './sidebardata';
import './Navbar.css';

function Navbar() {
    const [sidebar,setSidebar]=useState(false)
    const showsidebar=()=>setSidebar(!sidebar)
    
  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menu-bar">
          <FaIcons.FaBars onClick={showsidebar}/>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showsidebar}>
          <li className="navbar-toggle">
            <Link to='#' className="menu-bar">
            <AiIcons.AiOutlineClose/>
            </Link>
          </li>
          {sidebardata.map((item,index)=>{
              return(
                  <li key={index} className={item.cname}>
                      <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                      </Link>
                  </li>
              )
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
