import React from 'react';

function TextArea(props) {
    return (
        <label htmlFor="multiline">{props.children}
            <textarea rows="4" name="multiline" placeholder="Placeholder"></textarea>
        </label>
    )
}

export default TextArea;