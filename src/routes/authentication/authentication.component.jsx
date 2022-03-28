import React from 'react';

import SignInForm from '../../components/SignIn/sign-in.component';
import SignUpForm from '../../components/Signup/sign-up.component'; 

import './authentication.styles.scss';

const Authentication = () =>{

    return(
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
            
        </div>
    );
};

export default Authentication;