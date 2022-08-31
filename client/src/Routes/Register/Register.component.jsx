import React, {useEffect, useState} from 'react';
import "./Register.styles.scss";
import FormInput from '../../Components/forminput/FormInput.component';
import Button from '../../Components/Button/Button.component';
import { Link } from 'react-router-dom';
const defaultFormVals = {
    fullName: '',
    email: '',
    cellphone: '',
    password: '',
    confirm: '',
    images: []
}

const Register = () => {
    const [formValues, setFormValues] = useState(defaultFormVals);
    const { fullName, email, cellphone, password, confirm } = formValues;
    const [emailError, setEmailError] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const validateEmail = (e) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const { name, value } = e.target;
        const checker = emailRegex.test(value);
        if (checker === false) {
            setEmailError(true);
        } else {
            setEmailError(false)
        }
    }

    useEffect(() =>{
        document.title = "Sign up"
     }, [])

    return (
        <div className='register-image'>
            <div className='blur'>
                <div className='register-container'>
                    <h2 className='register-heading'>SIGN UP</h2>
                    <FormInput
                        label={"Name"}
                        value={fullName}
                        type="text"
                        name="fullName"
                        onChange={handleChange}
                        required={true}
                        placeholder={"eg. John Doe"}
                    />
                    <FormInput
                        label={!emailError ? "email" : <span className='error' style={{color: "red"}}>Invalid email try again</span>}
                        value={email}
                        type="email"
                        name="email"
                        required={true}
                        onChange={handleChange}
                        onBlur={validateEmail}
                        placeholder={"eg. john@gmail.com"}
                    />
                    <FormInput
                        label={"cellphone"}
                        value={cellphone}
                        type="tel"
                        name="cellphone"
                        required={true}
                        onChange={handleChange}
                        placeholder={"eg.076 890 0876"}
                    />
                    <FormInput
                        label={"password"}
                        value={password}
                        type="password"
                        name="password"
                        required={true}
                        onChange={handleChange}
                    />
                    <FormInput
                        label={"confirm"}
                        value={confirm}
                        type="password"
                        name="confirm"
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
                    <h5 className='acc'>Already have an account?</h5>
                    <div className='reg-btn-container'>
                        <Link to="/signIn">
                            <Button
                                buttonType={'secondary'}
                                type="submit"
                                children={'Sign in'}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;