import React from 'react';
import Button from '../Button/Button.component';
import "./EmailInput.styles.scss"
const EmailInput = () => {
    return (
        <div className='input-group'>
            <h5>Stay up to Date with shoe news</h5>
            <input type={"email"} className="mail" placeholder='Enter Email...' />
            <div className='button-container'>
                <Button
                    buttonType={"primary"}
                    type={"submit"}
                    children={"I'm In!"}
                />
            </div>
        </div>
    );
};

export default EmailInput;