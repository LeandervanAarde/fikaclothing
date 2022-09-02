import React from 'react';
import "./TextArea.styles.scss"

const TextArea = ({ label, ...otherprops }) => {
    return (
        <>

            <div className='text-group'>

                {
                    label &&
                    <label for={label} className={`${otherprops.value ? 'shrink' : ''} form-input-label`}>{label}</label>
                }
                <br />
                <textarea className='input' {...otherprops} rows={4} cols={100} />
            </div>
            <br />

        </>
    );
};

export default TextArea;