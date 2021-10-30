import React from 'react';
import greece from '../../images/Santorini-Greece.webp'
import thailand from '../../images/Thialand.jpg'
import switzerland from '../../images/Alps-Switzerland.jpg'
import canada from '../../images/Canada.jpg'
import japan from '../../images/Japan.jpg'
import mexico from '../../images/Mexico.jpg'

const Destination = () => {
    return (
        <div className="container">
            <h2>Some Popular Destination</h2>
            <div className="row">
                <div className="col-md-4">
                <img className="w-100" height="280vh" src={greece} alt="" />
                <h4>Greece</h4>
                </div>
                <div className="col-md-4">
                <img className="w-100" src={thailand} alt="" />
                <h4>Thailand</h4>
                </div>
                <div className="col-md-4">
                <img className="w-100" src={switzerland} alt="" />
                <h4>Switzerland</h4>
                </div>
                <div className="col-md-4">
                <img className="w-100" src={canada} alt="" />
                <h4>Canada</h4>
                </div>
                <div className="col-md-4">
                <img className="w-100" src={japan} alt="" />
                <h4>Japan</h4>
                </div>
                <div className="col-md-4">
                <img className="w-100" src={mexico} alt="" />
                <h4>Mexico</h4>
                </div>

                
            </div>
        </div>
    );
};

export default Destination;