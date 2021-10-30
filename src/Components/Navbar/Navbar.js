import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import './Navbar.css'

const Navbar = () => {
  const { user, logOut } = useAuth();
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top collapseOnSelect expand='lg' ">
    <div className="container-fluid hd">
      <a className="navbar-brand mx-5 " href="/">
     Holiday Planner
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent Nav_menu"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink
         
            className="Nav_link"
            to="/home"
            activeClassName="selected"
          >
            
            Home
          </NavLink>
        
          </li>
          <li className="nav-item">
          <NavLink
            className="Nav_link"
            to="/tour"
            activeClassName="selected"
          >
            Tour
          </NavLink>
          </li>
          <li className="nav-item">
          <NavLink
            className="Nav_link"
            to="/destination"
            activeClassName="selected"
          >
            Destination
          </NavLink>
          </li>
          <li className="nav-item">
          <NavLink
          
            className="Nav_link"
            to="/about"
            activeClassName="selected"
          >
            About
          </NavLink>
          </li>
          <li className="nav-item">
          <NavLink
         
            className="Nav_link"
            to="/contact"
            activeClassName="selected"
          >
            Contact
          </NavLink>
          </li>
          
          <li className="nav-item mx-3 text-white">
          
          Signin as :{user?.displayName}
          
          </li>
          
        </ul>
      
        <form className="d-flex flex-fill mx-2">
          {
            user.email&&
            <Link to="/myorders">
              <button className="btn btn btn-outline-warning me-3">My Orders</button>
            </Link>
          }
          {
            user.email&&
            <Link to="/manageorders">
              <button className="btn btn btn-outline-warning me-3">Manage All Orders</button>
            </Link>
          }
          {
            user.email&&
            <Link to="/newservice">
              <button className="btn btn btn-outline-warning">Add a new service</button>
            </Link>
          }

          {
            user.email?
            <button
            onClick={logOut}
            className="btn btn btn-outline-danger position-absolute top-50 end-0 translate-middle-y mx-5"
            type=""
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
          
          >
           Logout
          </button>
          :
         <NavLink to='/login'>
            <button
            className="btn btn btn-outline-light position-absolute top-50 end-0 translate-middle-y mx-5"
            type=""
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
          
          >
           Login
          </button>
           </NavLink>}
        </form>
      
      </div>
    </div>
 </nav>
 
 
    </div>
    );
};

export default Navbar;