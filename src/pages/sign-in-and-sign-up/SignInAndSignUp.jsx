import React from 'react';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

//styles
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp;