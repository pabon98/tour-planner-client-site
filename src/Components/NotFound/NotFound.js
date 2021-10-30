import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/404page.jpg'

const NotFound = () => {
    return (
        <div className="my-5">
            <img src={error} alt="" />
            <br />
            <Link to='/home'>
            <div className="btn btn-info my-2">Go Back Home</div>
            </Link>
        </div>
    );
};

export default NotFound;