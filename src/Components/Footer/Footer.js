import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/white-logo.png'
import './Footer.css'

const Footer = () => {
    return (
      <div className="my-5">
          <div className="footer-container">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="left-container text-start">
                    <img className="w-75" src={icon} alt="" />
                    <p className="mt-4 text-white">
                      <small>
                        Holiday Planners is a travel agent site. 
                        <br />
                        You can travel best attractive <br /> places in releavent cost 
                      </small>
                      <p className="mt-4 ">
                        <i className="fab fa-facebook-square fa-2x"></i>
                        <i className="fab fa-instagram-square fa-2x ms-3"></i>
                        <i className="fab fa-twitter-square fa-2x ms-3"></i>
                      </p>
                    </p>
  
                    <p className="mt-5 text-white">
                      <small>Holiday Planner Agency © . All rights reserved.</small>
                    </p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="footer-menu-container">
                    <ul>
                      <Link to="/home" className="footer-menu">
                        <li>Home</li>
                      </Link>
                      <Link to="/tour" className="footer-menu">
                        <li>Tour</li>
                      </Link>
                      <Link to="/destination" className="footer-menu">
                        <li>Destination</li>
                      </Link>
                      <Link to="/about" className="footer-menu">
                        <li>About</li>
                      </Link>
                      <Link to="/contact" className="footer-menu">
                        <li>Contact</li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="right-footer-container">
                    <h3>Sign up for the registration</h3>
                    <input
                      className="footer-input"
                      type="text"
                      placeholder="Enter Email"
                    />
                    <button className="p-2 my-2">Registration</button>
                    <div className="phone d-flex align-items-center justify-content-center mt-4">
                      <div className="foter-phone-icon"></div>
                      <div>
                        <h5>
                          <i className="fas fa-phone-square-alt"></i> +882812535452
                        </h5>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="foter-phone-icon"></div>
                      <div>
                        <p>
                          160 Elephant Road, Gulshan
                          <br /> 110 3rd Avenue, Dhaka, Ny 200
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reserved">
              <hr />
              <p>© 2021 Holiday Planner Agency, All Rights Reserved. Design By Hasin Anjum Pabon</p>
            </div>
          </div>
        </div>
    );
};

export default Footer;