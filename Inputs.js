import React from 'react';
import './style.css';

function Inputs(props) {
    let style = "";
    if (props.error) {
        style = props.error;
    }
    
    if (props.startIcon) {
        style = props.startIcon;
    }
    
    if (props.size) {
        style=props.size;
    } 
    
    if (props.fullWidth) {
        style=props.fullWidth;
    }

    return (
        <div>
            <label htmlFor="input">label
            <input type="text" name="input" placeholder="Placeholder" defaultValue={props.value} className={style} disabled={props.disabled} row={props.row} />
            </label>
            <small>{props.helperText}</small>
        </div>
    )
}

export default Inputs;