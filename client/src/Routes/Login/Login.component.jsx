import React, {useEffect} from 'react';
import "./login.styles.scss";
import FormInput from "../../Components/forminput/FormInput.component"
import { useState } from 'react';
import Button from '../../Components/Button/Button.component';
import { Link } from 'react-router-dom';

const defaultFormVals = {
    email: '',
    password: ''
}

const Login = () => {

    const [formValues, setFormValues] = useState(defaultFormVals)
    const { email, password } = formValues;
    const [emailError, setEmailError] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const validateEmail = (e) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const { name, value } = e.target;
        const checker = emailRegex.test(value);
        console.log(checker)
        if (checker === false) {
            setEmailError(true);
        } else {
            setEmailError(false)
        }
    }

    useEffect(() =>{
        document.title = "Sign In"
     }, [])


    return (
        <div className='background-image'>
            <div className='blur'>
                <div className='login-container'>
                    <h2 className='login-heading'>SIGN IN</h2>
                    <FormInput
                        label={!emailError ? "email" : <span className='error' style={{ display: 'flex', marginLeft: '60%' }}>Invalid email try again</span>}
                        value={email}
                        type="email"
                        name="email"
                        required={true}
                        onChange={handleChange}
                        onBlur={validateEmail}
                        placeholder = {"eg. john@gmail.com"}
                    />

                    <FormInput
                        label={"password"}
                        value={password}
                        type="password"
                        name="password"
                        required={true}
                        onChange={handleChange}
                    />

                    <div className='buttonContainer'>
                        <Button
                            buttonType={"primary"}
                            type={'submit'}
                            children={"Sign in"}
                        />
                    </div>

                    <div className='buttonContainerTwo'>
                        <Button
                            buttonType={"google"}
                            type={'submit'}
                            children={"Google login"}
                        />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br/>
                    <h5 className='acc'>Already have an account?</h5>
                    <div className='reg-btn-container'>
                        <Link to="/Register">
                            <Button
                                buttonType={'secondary'}
                                type="submit"
                                children={'Sign up'}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;