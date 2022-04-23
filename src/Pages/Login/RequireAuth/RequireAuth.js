import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    let location = useLocation();
    if (loading) {
        return <div class="d-flex justify-content-center">
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
        return (
            <div className="text-center">
                <button
                    onClick={async () => {
                        await sendEmailVerification();
                        alert('Sent email');
                    }}
                >
                    Verify email
                </button>
            </div>
        );
    }
    return children;
};

export default RequireAuth;