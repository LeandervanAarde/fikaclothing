import React, { useEffect, useState } from 'react';
import "./Register.styles.scss";
import FormInput from '../../Components/forminput/FormInput.component';
import Button from '../../Components/Button/Button.component';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const defaultFormVals = {
    fullName: '',
    displayName: '',
    email: '',
    cellphone: '',
    password: '',
    confirm: '',
    birthday: '',
    displayName: '',
    house: '',
    road: '',
    complex: null,
    city: '',
    province: '',
    postalCode: '',
}

const Register = () => {
    const [formValues, setFormValues] = useState(defaultFormVals);
    const { fullName, email, cellphone, password, confirm, birthday, displayName, house, road, complex, city, province, postalCode } = formValues;
    const [emailError, setEmailError] = useState();
    const navigate = useNavigate()

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

    useEffect(() => {
        document.title = "Sign up"
    }, [])

    const handleClick = (e) =>{
        if(formValues.password !== formValues.confirm){
            alert("Passwords do not match")
        } else{
            let payload = { 
                name: formValues['fullName'].trim(), 
                password: formValues['password'].trim(),
                birthday: formValues['birthday'],
                displayName: formValues['displayName'].trim(),
                contact:{
                    email: formValues['email'].trim(),
                    cellphone: formValues['cellphone'].trim()
                },
                shippingAd:{
                    house: + formValues['house'],
                    road: formValues['road'],
                    complex: formValues['complex'],
                    city: formValues['city'],
                    province: formValues['province'],
                    postalCode: formValues['postalCode'],
                }
            }
            axios.post('http://localhost:5001/api/adduser', payload)
            .then(res =>{
                console.log(payload)
                navigate("/signIn")
            })
            .catch(err =>{
                console.log(err)
            })

        }
    }

    return (
        <div className='register-image'>
            <div className='blur'>
                <div className='register-container left'>
                    <h2 className='register-heading'>SIGN UP</h2>
                    <FormInput
                        label={"Full name"}
                        value={fullName}
                        type="text"
                        name="fullName"
                        onChange={handleChange}
                        required={true}
                        placeholder={"eg. John Doe"}
                    />
                    <FormInput
                        label={"User name"}
                        value={displayName}
                        type="text"
                        name="displayName"
                        onChange={handleChange}
                        required={true}
                        placeholder={"eg. John Doe"}
                    />
                    <FormInput
                        label={"Birthday"}
                        value={birthday}
                        type="text"
                        name="birthday"
                        onChange={handleChange}
                        required={true}
                        placeholder={"eg. 21 January 1916"}
                    />
                    <FormInput
                        label={!emailError ? "email" : <span className='error' style={{ color: "red" }}>Invalid email try again</span>}
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
                </div>

                <div className='register-container right'>
                    <h2 className='register-heading'>Shipping information</h2>
                    <FormInput
                        label={"House number"}
                        value={house}
                        type="Number"
                        name="house"
                        onChange={handleChange}
                        required={true}
                        placeholder={"eg. John Doe"}
                    />
                    <FormInput
                        label={"Road"}
                        value={road}
                        type="text"
                        name="road"
                        required={true}
                        onChange={handleChange}
                        placeholder={"Street road"}
                    />
                    <FormInput
                        label={"Complex"}
                        value={complex}
                        type="text"
                        name="complex"
                        required={false}
                        onChange={handleChange}
                        placeholder={"eg. Mike complex"}
                    />
                    <FormInput
                        label={"City"}
                        value={city}
                        type="text"
                        name="city"
                        required={true}
                        onChange={handleChange}
                        placeholder={"eg. Johannesburg"}
                    />
                    <FormInput
                        label={"Province"}
                        value={province}
                        type="text"
                        name="province"
                        required={true}
                        onChange={handleChange}
                        placeholder={"eg. Gauteng"}
                    />
                    <FormInput
                        label={"Postal code"}
                        value={postalCode}
                        type="text"
                        name="postalCode"
                        required={true}
                        onChange={handleChange}
                        placeholder={"eg. Gauteng"}
                    />
                    <div className='buttonContainer'>
                        <Button
                            buttonType={"primary"}
                            type={'submit'}
                            children={"Sign up"}
                            onClick={handleClick}
                        />
                    </div>
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