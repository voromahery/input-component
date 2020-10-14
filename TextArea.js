import React from 'react';

function TextArea(props) {
    return (
    <div className="component">
        <textarea rows="4" name="multiline" placeholder="Placeholder"></textarea>
        <label htmlFor="multiline">{props.children}</label>
    </div>
    )
}

export default TextArea;