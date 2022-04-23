import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`
        fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };

    return (
        <div className='text-center w-50 mx-auto'>
            <h2>Add a new service</h2>
            <form className='d-flex flex-column pb-3' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3' placeholder='description' {...register("description")} />
                <input className='mb-3' placeholder='price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='PhotoUrl' type="text" {...register("img")} />

                <input className='btn btn-primary' type="submit" value='Add service' />
            </form>
        </div>

    );
};

export default AddService;