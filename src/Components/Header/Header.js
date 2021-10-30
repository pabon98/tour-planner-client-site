import React from 'react';
import './Header.css'

const Header = () => {
    return (
            <div className="header ">
           <div className="  py-5">
              <br /><br /><br /><br /><br /> <br /> <br /> 
          <div className="header-content">
          <h1 className='text-white'>Enjoy the travel with Holiday Planners</h1>
          </div>
           <div>
           <p className="text-white header-content">A journey of thousands of mile start with a single step. <br /> You can travel in less cost using our Travel agency</p>
           <button className="btn btn-info p-2">Booking Now</button>
           </div>
            
           </div>
        </div>
    );
};

export default Header;