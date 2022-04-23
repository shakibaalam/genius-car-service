import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    //jdi user login hoye jai
    const navigate = useNavigate();
    if (user) {
        navigate('/')
    }

    //reuirepath e login sese same page e jete

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    //2nd rule
    const emailRef = useRef('');
    const passRef = useRef('');

    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        signInWithEmailAndPassword(email, pass)
        console.log(email, pass);
    }
    //for reset pass
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(auth);
    const handleReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Enter your email first');
        }

    }

    return (
        <div className='container w-50 mx-auto mt-5'>
            <PageTitle title='Login'></PageTitle>
            <h2 className='text-center text-primary my-4'>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary mb-3 btn btn-primary d-block w-50 mx-auto" type="submit">
                    Login
                </Button>

                <p>New to Genius Car? <Link className='text-danger' to='/register'>Complete your Registration</Link> </p>

            </Form>

            <p>Forget Password?<button onClick={handleReset} className='text-primary btn btn-link'>Reset Password</button> </p>

            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;