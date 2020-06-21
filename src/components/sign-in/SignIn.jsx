import React, {Component} from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

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

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email: "", password: ""})
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({
            [name]: value
        }, () => console.log(this.state));
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

                    <CustomButton type="submit">SIGN IN</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;