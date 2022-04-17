import React from 'react';

const Input = (props) => {

    return (
        <div>
            <label>{props.LabelText}</label>
            <input 
            placeholder = {props.placeholderUserName}
            onChange = {props.handleOnChange}/>
        </div>
    );
};

export default Input;