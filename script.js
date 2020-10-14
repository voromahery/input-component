import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Inputs.js';
import phoneIcon from './icon/phone-icon.svg';
import TextArea from './TextArea.js';

function App() {
    return (
        <div>
            <h1>Collection of inputs</h1>
            <div className="inputs">
                <Input>label</Input>
                <Input error="error">label</Input>
                <Input disabled >label</Input>
                <div>
                    <Input helperText="Some interesting text">label</Input>
                </div>
                <div>
                    <Input helperText="Some interesting text" error="errorText">label</Input>
                </div>
                <div>
                    <Input startIcon="startIcon">label</Input>
                    <Input endIcon="endIcon">label</Input>
                </div>
                <div>
                    <Input value="Text">label</Input>
                </div>
                <div>
                    <Input size="sm">label</Input>
                    <Input size="md">label</Input>
                </div>
                <div>
                    <Input fullWidth="fullWidth">label</Input>
                </div>
                <div>
                    <TextArea rows="multiline">label</TextArea>
                </div>
            </div>
            <p>H. Daniel Fabrice @ DevChallenges.io</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
