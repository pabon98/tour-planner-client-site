import React from "react";
import img1 from '../../images/planners1.jpg'
import img2 from '../../images/planners2.jpg'
import img3 from '../../images/planners3.jpg'
import img4 from '../../images/planners4.jpg'
import img5 from '../../images/planners5.jpg'
import img6 from '../../images/planners6.jpg'
import img7 from '../../images/planners7.jpg'
import img8 from '../../images/planners8.jpg'

const About = () => {
   
    return (
        <div className="my-3">
           <h1>About Us</h1>
           <div className="row d-flex justify-content-center align-items-center">
               <div className="col-md-3 shadow ">
               <i class="fas fa-bus fa-2x"></i>
               <h2>Private Transport</h2>
               <p>Our transport is full of premium class.You can safely travel by our transports</p>
               </div>
               <div className="col-md-3 shadow ms-4">
               <i class="fas fa-globe-asia fa-2x"></i>
               <h2>Diverse Destination</h2>
               <p>We will go various countries so you can enjoy the beauty of the universe.</p>
               </div>
               <div className="col-md-3 shadow ms-4">
               <i class="fas fa-hotel fa-2x"></i>
               <h2>Great Hotels</h2>
               <p>We are offering you premium hotel facilities at minimum cost. you will be pleased staying in our hotels</p>
               </div>

            </div> 
            <div className="my-5">
                <h2>Our Holiday Plans</h2>
                <div className="row mt-5">
                    <div className="col-md-3">
                     <img width="250px" height="250px" src={img1} alt="" />
                    </div>
                    <div className="col-md-3">
                     <img width="250px"  height="250px" src={img2} alt="" />
                    </div>
                    <div className="col-md-3">
                     <img  width="250px"  height="250px" src={img3} alt="" />
                    </div>
                    <div className="col-md-3">
                     <img  width="250px"  height="250px" src={img4} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                     <img  width="250px"  height="250px" src={img5} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                     <img  width="250px"  height="250px" src={img6} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                     <img  width="250px"  height="250px" src={img7} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                     <img  width="250px"  height="250px" src={img8} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;