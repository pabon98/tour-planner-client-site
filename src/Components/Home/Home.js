import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'
import slider1 from "../../images/slider1.jpg";
import slider3 from "../../images/slider3.jpg";
import slider4 from "../../images/slider4.jpg";

const Home = () => {
  const [services, setServices] = useState([])
  useEffect(()=>{
    fetch("https://fast-brushlands-79885.herokuapp.com/services")
    .then(res=>res.json())
    .then(data=> setServices(data))
  },[])
  return (
    <div className="mt-3 container home">
      {/* Slider */}
      <div className="my-5">
        <h1>Some Attractive Places</h1>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={slider1}
                class="d-block ms-auto me-auto  w-50 img-fluid"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={slider4}
                class="d-block ms-auto me-auto  w-50 img-fluid"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={slider3}
                class="d-block ms-auto me-auto  w-50 img-fluid"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
      <div className="row">
        {/* Service Section */}
        <h1>Our Services</h1>
        {
          services.map(service=>(
            <div className="col-md-4 my-2">
              <div class="card" style={{ width: "18rem" }}>
            <img height="200px" src={service.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{service.name}</h5>
              <p class="card-text">
               {service.description.slice(0,100)}
              </p>
              <p>Price:{service.price}</p>
            <Link to={`/placeOrder/${service._id}`}>
            <button className="btn btn-warning">Book Now</button>
            </Link>
            </div>
          </div>
            </div>

          ))
        }
       
      </div>
      </div>
      <div className="container journey p-5 my-5">
        <h1>Our Journey</h1>
      <div className="row">
         <div className="col-md-3">
         <i class="fas fa-users fa-2x"></i>
         <p className="fs-4">3586</p>
         <hr />
         <p className="fs-4">Satisfied Users</p>
         </div>
         <div className="col-md-3">
         <i class="fas fa-plane-departure fa-2x"></i>
         <p className="fs-4">206</p>
         <hr />
         <p className="fs-4">Total Flights</p>
         </div>
         <div className="col-md-3">
         <i class="fas fa-thumbs-up fa-2x"></i>
         <p className="fs-4">206</p>
         <hr />
         <p className="fs-4">Successfull Trips</p>
         </div>
         <div className="col-md-3">
         <i class="fas fa-calendar-alt fa-2x"></i>
         <p className="fs-4">70</p>
         <hr />
         <p className="fs-4">Scheduled Trips</p>
         </div>
       </div>

      </div>
    </div>
  );
};

export default Home;


  /* <div className="row d-flex justify-content-center align-items-center">
               <div className="col-md-6">
                 <img className="w-100" src={img} alt="" />
               </div>
               <div className="col-md-6">
                <h1>Plan your Trip With Us</h1>
                <p className="fs-4">We are the most reliable travel agency. Here You can <br /> travel worldwide in a minimum cost with higher facility. <br /> So why thinking? Booking now hurry</p>
               </div>
            </div> */
