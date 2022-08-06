import React from 'react';
import "./PaymentForm.styles.scss"
import FormInput from '../forminput/FormInput.component';
import { useState } from 'react';
import { useEffect } from 'react';

const defaultFormFields = {
    cardName: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: '',
    paymentType: ''
}

const PaymentForm = () => {
    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const paymentOptions = ["straight", "budget"]
    const Year = new Date().getFullYear();
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { cardName, cardNumber, month, year, cvv, paymentType } = formFields
    const maxYear = Year + 10;
    const range = (start, end) => { return Array(end - start + 1).fill().map((_, idx) => start + idx) }
    const yearArr = range(Year, maxYear);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
        if (e.target.className.includes("paymentType")) {
            let payment = e.target.className.split(" ");
            console.log(payment[0])
            console.log(e.target.innerHTML)
            setFormFields({ ...formFields, [payment[0]]: e.target.innerHTML });
        }
    }

    return (
        <div className='form'>
            <FormInput
                label={"Name on Card"}
                value={cardName}
                type="text"
                name="cardName"
                required={true}
                onChange={handleChange}
                placeholder={"eg. LE van Aarde"}
            />
            <FormInput
                label={"Card Number"}
                value={cardNumber}
                type="text"
                name="cardNumber"
                required={true}
                onChange={handleChange}
                placeholder={"eg. 1234 54678 34568"}
            />
            <div className='exp-date-container'>
                <p className='exp'>Exp date</p>
                <select className='select' name='month' onChange={handleChange}>
                    {mL.map(month => (<option value={month}>{month}</option>))}
                </select>

                <select className='select' name='year' onChange={handleChange}>
                    {yearArr.map(year => (<option value={year}>{year}</option>))}
                </select>
            </div>
            <div className='cvv'>
                <FormInput
                    label={"CVV"}
                    value={cvv}
                    type="text"
                    name="cvv"
                    required={true}
                    onChange={handleChange}
                    placeholder={"eg. 000"} />
            </div>
            <div className='paymentOptions'>
                <p className='options'>Payment </p>
                {paymentOptions.map(option => <span name={'paymentType'} className={`paymentType ${option}`} value={option} onClick={handleChange}>{option}</span>)}
            </div>
        </div>
    );
};
export default PaymentForm;