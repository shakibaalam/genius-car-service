import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are You sure you want to delete');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
            const remaining = services.filter(service => service._id !== id)
            setServices(remaining);

        }
    }

    return (
        <div className='w-50 mx-auto text-center'>
            <h2>Manage service page</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5 className="card-title my-3 fw-bold">{service.name}
                        <button onClick={() => handleDelete(service._id)} className='text-danger btn'>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageService;