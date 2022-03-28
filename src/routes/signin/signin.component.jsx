import React from 'react';

import { signInWithGooglePopup, createUserDocumentFromAuth,} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/Signup/sign-up.component';

const Signin =() =>{

    const logGoogleUser = async() =>{
        const {user} = await signInWithGooglePopup();
       const userDocRef= await createUserDocumentFromAuth(user);
       console.log(userDocRef);
    }

    return(
        <div>
            <h1>Sign in Here</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <SignUpForm />
        </div>
    );
};

export default Signin;