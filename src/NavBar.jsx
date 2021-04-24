import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className='row'>
                <div className=' mx-auto'>

         <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Aamdani</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link active new" aria-current="page" to="/" exact>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link new" aria-current="page" to="/Service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link new" aria-current="page" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link new" aria-current="page" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link new" aria-current="page" to="/Login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link new" aria-current="page" to="/Signup">Signup</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
          </div>
            </div>
        </div>
        </>
    );
};

export default NavBar;