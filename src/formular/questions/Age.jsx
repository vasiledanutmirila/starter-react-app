import React from "react";
import { Button, Input } from 'semantic-ui-react';
import '../../styles/Form.css';

let value;

const onChange = (e) => {
    value = e.target.value;
};

const AgeContent = ({ errorMessage }) => {
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        <div className="question">How old are you?</div>
        <div className="flex flex-column items-center">
            <Input className="inputField scale2 w-50" type='number' onChange={onChange} />
            <span className="error mt5 scale2">{errorMessage}</span>
        </div>
    </div>
    );
};

const AgeAction = ({ count, setCount, setAge, setErrorMessage }) => {
    const onClick = () => {
        if ( value ){
            if ( value.match(/^[1-9][0-9]?$/) ) {
                setCount(count + 1);
                setAge(Number(value));
                setErrorMessage('');
                value = undefined;
            } else {
                setErrorMessage("Age must consist of a maximum of 2 digits (non-zero and without decimals)!");
            }
        }
        else {
            setErrorMessage("Age can't be empty!");
        }
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { AgeContent, AgeAction };