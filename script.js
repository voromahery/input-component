import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Inputs.js';
import phoneIcon from './icon/phone-icon.svg';

function App() {
    return (
        <div>
            <h1>Collection of inputs</h1>
            <div className="inputs">
                <Input />
                <Input error="error" />
                <Input disabled />
                <div>
                    <Input helperText="Some interesting text" />
                </div>
                <div>
                    <Input helperText="Some interesting text" error="errorText" />
                </div>
                <div>
                    <Input startIcon="startIcon" />
                    <Input startIcon="endIcon" />
                </div>
                <div>
                    <Input value="Text" />
                </div>
                <div>
                    <Input size="sm" />
                    <Input size="md" />
                </div>
                <div>
                    <Input fullWidth="fullWidth" />
                </div>
                <div>
                    <Input multiline="multiline" />
                </div>
            </div>
            <p>H. Daniel Fabrice @ DevChallenges.io</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
