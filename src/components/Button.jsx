import React from 'react';
import './Button.css';

const Button = (props) => {
    const classes = ["btn-custom"];
    if(props.children === '+' || props.children === '-' || props.children === 'x' || props.children === '/')
       classes.push('operator');
    return (
        <div onClick={( ) => props.clickHandler(props.children)} className={classes.join(' ')}>
            {props.children}
        </div>
    )
}

export default Button;
