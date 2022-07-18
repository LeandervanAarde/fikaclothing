import React from 'react';
import "./Forminput.styles.scss";
const FormInput = ({label, ...otherprops}) => {
    return (
   <>   
   
   <div className='group'>
            <input className='form-input' {...otherprops}/>
            {
                label && 
                <label for={label} className={`${otherprops.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            }
        </div>
        <br/>
    
   </>
    );
};

export default FormInput;