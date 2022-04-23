import React from 'react';
import sleeping from '../.././images/sleeping.jpg'
import PageTitle from '../Shared/PageTitle/PageTitle';

const NotFound = () => {
    return (
        <div className='container'>
            <PageTitle title='Not Found'></PageTitle>
            <div className='row my-5 py-5'>
                <div className='col-sm-6 d-flex justify-content-center align-items-center fw-bold'>
                    <h2 className='text-danger'>404!!!!! Page not Found <br /><span className='text-dark'>Machine is Sleeping</span></h2>
                </div>
                <div className='col-sm-6'>
                    <img className='w-100' src={sleeping} alt="" />
                </div>
            </div>
        </div>

    );
};

export default NotFound;