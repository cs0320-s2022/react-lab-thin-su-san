import React from 'react';
import './App.css';

type horo = {
    label: string;
    change: Function
}

function TextBox(props: horo) {
    return (
        <div>
            <label>{props.label}</label>
            <input type={'text'}></input>
        </div>
    );
}

export default TextBox;