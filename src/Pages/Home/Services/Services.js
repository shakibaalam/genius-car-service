import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Home/Service/Service';

const Services = () => {
    const [services, setServices] = useServices();

    return (
        <div id='services' className='container'>
            <h2 className='text-center mt-5'> Our Services:{services.length}</h2>
            <div class="row row-cols-1 row-cols-md-3 g-5 my-4">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;