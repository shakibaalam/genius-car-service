import React from 'react';
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";
import { GoMarkGithub } from "@react-icons/all-files/go/GoMarkGithub";
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    //for Google 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    //for github
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    if (user || user1) {
        navigate('/');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>

            <p className='text-danger'>{error ? error.message : '' || error1 ? error1.message : ''}</p>

            {
                loading && <div class="d-flex justify-content-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                ||
                loading1 && <div class="d-flex justify-content-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

            }

            <div >
                <button onClick={() => signInWithGoogle()} className='mb-3 btn btn-primary d-block w-50 mx-auto'><FcGoogle style={{ width: '40px' }}></FcGoogle> Google SignIn</button>

                <button onClick={() => signInWithGithub()} className='mb-3 btn btn-primary d-block w-50 mx-auto'><GoMarkGithub style={{ width: '40px' }}></GoMarkGithub> Github SignIn</button>

                <button className='btn btn-primary d-block w-50 mx-auto'><SiFacebook style={{ width: '40px' }}></SiFacebook> Facebook SignIn</button>
            </div>
        </div>
    );
};

export default SocialLogin;