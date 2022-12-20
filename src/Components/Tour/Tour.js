import React, { useEffect, useState } from "react";
import './Tour.css'

const Tour = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("https://tourplanner-server.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
  return (
    <div className="container my-5 tour">
      <h1>Our More Tour Packages</h1>
      <div className="row">
        {tours.map((tour) => (
          <div className="col-md-4 my-3">
            <div class="card" style={{ width: "18rem" }}>
              <img height="200px" src={tour.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{tour.name}</h5>
                <p class="card-text">{tour.description.slice(0,180)}</p>
                <div className="btn btn-primary">Visit</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tour;
