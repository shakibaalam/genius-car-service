import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    //for update profile
    const [updateProfile, updating, udateError] = useUpdateProfile(auth);

    const handleRegiter = async (e) => {
        e.preventDefault();
        //rule 3
        const name = e.target.formBasicName.value;
        const email = e.target.formBasicEmail.value;
        const pass = e.target.formBasicPassword.value;

        await createUserWithEmailAndPassword(email, pass)
        await updateProfile({ name });
        alert('Updated profile');

        //jdi user login hoye jai
        navigate('/');
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <PageTitle title='Register'></PageTitle>
            <h2 className='text-center text-primary my-4'>Register</h2>
            <Form onSubmit={handleRegiter}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className={`mb-3 ${agree ? '' : 'text-danger'}`} onClick={() => setAgree(!agree)} controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accepts terms & conditions" />
                </Form.Group>

                <Button disabled={!agree} variant="primary mb-3 btn btn-primary d-block w-50 mx-auto" type="submit">
                    Register
                </Button>

                <p>Already registered ? <Link className='text-danger' to='/login'>Continue to Login</Link> </p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;