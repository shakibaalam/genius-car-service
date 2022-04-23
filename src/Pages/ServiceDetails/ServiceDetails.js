import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div className='text-center'>
            <PageTitle title='Service Details'></PageTitle>

            <h2 className=' my-4 fw-bold'>You are about to book {serviceId}</h2>

            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;