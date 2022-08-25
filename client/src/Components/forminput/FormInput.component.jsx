import React from 'react';
import "./Forminput.styles.scss";
const FormInput = ({ label, ...otherprops }) => {
    return (
        <>

            <div className='group'>

                {
                    label &&
                    <label for={label} className={`${otherprops.value  ? 'shrink' : ''} form-input-label`}>{label}</label>
                }
                <br />
                <input className='form-input' {...otherprops} />
            </div>
            <br />

        </>
    );
};

export default FormInput;