import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    const navigate = useNavigate();
    const navigateService = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top w-50 m-auto" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title my-3 fw-bold">{name}</h5>
                    <h4>Price : ${price}</h4>
                    <p className="card-text my-4">{description}</p>
                    <button onClick={() => navigateService(_id)} className='btn btn-primary'>Book Now</button>
                </div>
            </div>
        </div>

    );
};

export default Service;