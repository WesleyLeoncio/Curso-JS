import React from 'react';
import './Button.css';

//const button = (props) => <button className="button">{props.label}</button>

function button(props) {
    let classes = 'button ';
    classes += props.operation ? 'operation' : '';
    classes += props.double ? 'double' : '';
    classes += props.triple ? 'triple' : '';


    return (
        <button
            onClick={(e) => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}

export default button;