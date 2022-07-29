import React from 'react';
import "./PaymentForm.styles.scss"
import FormInput from '../forminput/FormInput.component';
import { useState } from 'react';
import { useEffect } from 'react';
const PaymentForm = () => {
    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const Year = new Date().getFullYear();
    const [years, setYears] = useState([]);
    const maxYear = Year + 10;
    const range = (start, end) => {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    const yearArr = range(Year, maxYear);


    return (

        <div className='form'>
            <FormInput
                label={"Name on Card"}
                value={"Hello"}
                type="email"
                name="email"
                required={true}
                // onChange={handleChange}
                // onBlur={validateEmail}
                placeholder={"eg. john@gmail.com"}
            />
            <FormInput
                label={"Card Number"}
                value={"Hello"}
                type="email"
                name="email"
                required={true}
                // onChange={handleChange}
                // onBlur={validateEmail}
                placeholder={"eg. john@gmail.com"}
            />
            <div className='exp-date-container'>
                <p className='exp'>Exp date</p>
                <select className='select'>
                    {
                        mL.map(month => (
                            <option>{month}</option>
                        ))
                    }
                </select>

                <select className='select'>
                    {
                        yearArr.map(year => (
                            <option>{year}</option>
                        ))
                    }
                </select>
            </div>
            <div className='cvv'>
                <FormInput
                    label={"CVV"}
                    value={"Hello"}
                    type="email"
                    name="email"
                    required={true}
                    // onChange={handleChange}
                    // onBlur={validateEmail}
                    placeholder={"eg. john@gmail.com"}
                />
            </div>
        </div>
    );
};

export default PaymentForm;