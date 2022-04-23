import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top w-50 m-auto" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title my-3 fw-bold">{name}</h5>
                    <button className='btn btn-primary'>See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Expert;