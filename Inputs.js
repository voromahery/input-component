import React from 'react';
import './style.css';

function Inputs(props) {
    let style = "";
    let icon = "";
    if (props.error) {
        style = props.error;
    }

    if (props.errorText) {
        style = props.errorText
    }

    if (props.endIcon) {
        style = props.endIcon;
    }

    if (props.startIcon) {
        style = props.startIcon;
    }

    if (props.size) {
        style = props.size;
    }

    if (props.fullWidth) {
        style = props.fullWidth;
    }

    return (
        <div>
            <label htmlFor="input">{props.children}
            <input  type="text" name="input" placeholder="Placeholder" defaultValue={props.value} className={style} disabled={props.disabled} row={props.row} />
                <small>{props.helperText}</small>
            </label>
        </div>
    )
}

export default Inputs;