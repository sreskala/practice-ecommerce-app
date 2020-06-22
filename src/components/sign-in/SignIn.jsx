import React, {Component} from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

//firebase
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

//styles
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password: ""});
        } catch (err) {
            console.log(err.message);
        }
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                        label="Email"
                        handleChange={this.handleChange}/>

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                        label="Password"
                        handleChange={this.handleChange}/>
                    <div className="buttons">
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;