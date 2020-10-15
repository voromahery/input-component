import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Inputs.js';
import phoneIcon from './icon/phone-icon.svg';
import TextArea from './TextArea.js';

function App() {
    return (
        <div>
            <div className="inputs">
                {`<input />`}
                <Input>label</Input>
                {`<input error />`}
                <Input error="error">label</Input>
                {`<input disabled />`}
                <Input disabled >label</Input>
                <div className="container">
                    <div className="wrapper">
                    {`<input helperText="Some interesting text here"/>`}
                        <Input helperText="Some interesting text">label</Input>
                    </div>
                    <div className="wrapper">
                    {`<input helperText="Some interesting text here" error />`}
                        <Input helperText="Some interesting text" error="errorText">label</Input>
                    </div>
                </div>
                <div className="container">
                    <div className="wrapper">
                    {`<input startIcon />`}
                        <Input startIcon="startIcon">label</Input>
                    </div>
                    <div className="wrapper">
                    {`<input endIcon />`}
                        <Input endIcon="endIcon">label</Input>
                    </div>
                </div>
                <div>
                {`<input value="Text"/>`}
                    <Input value="Text">label</Input>
                </div>
                <div className="container">
                    <div className="wrapper">
                    {`<input size="sm" />`}
                        <Input size="sm">label</Input>
                    </div>
                    <div className="wrapper">
                    {`<input size="md" />`}
                        <Input size="md">label</Input>
                    </div>
                </div>
                <div>
                {`<input fullWidth />`}
                    <Input fullWidth="fullWidth">label</Input>
                </div>
                <div>
                    {`<input multiline row="4" />`}
                    <TextArea rows="multiline">label</TextArea>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
