import React from "react";
import { Button, Checkbox } from 'semantic-ui-react';

let ownedDevicesValue = {
    smartphone: false,
    tablet: false,
    smartwatch: false,
    smartband: false,
};

const onChange = (e, { checked }, key) => {
    ownedDevicesValue[key] = checked;
};

const OwnedDevicesContent = ({ errorMessage }) => {
    return (
        <div className="content flex flex-column items-center justify-around pl4 pr4">
            <div className="question">What smart devices do you own?</div>
            <div className="flex flex-column items-center justify-around h-75 w-50">
                <Checkbox
                    label='smartphone'
                    onChange={(e, { checked }) => {
                        onChange(e, { checked }, 'smartphone');
                    }}
                />
                <Checkbox
                    label='tablet'
                    onChange={(e, { checked }) => {
                        onChange(e, { checked }, 'tablet');
                    }}
                />
                <Checkbox
                    label='smartwatch'
                    onChange={(e, { checked }) => {
                        onChange(e, { checked }, 'smartwatch');
                    }}
                />
                <Checkbox
                    label='smartband'
                    onChange={(e, { checked }) => {
                        onChange(e, { checked }, 'smartband');
                    }}
                />
                <span className="error mt5">{errorMessage}</span>
            </div>
        </div>
        );
};

const OwnedDevicesAction = ({ count, setCount, setOwnedDevices, setErrorMessage }) => {
    const onClick = () => {
        if ( ownedDevicesValue.smartband || ownedDevicesValue.smartphone || ownedDevicesValue.smartwatch || ownedDevicesValue.tablet ) {
            setCount(count + 1);
            setOwnedDevices(ownedDevicesValue);
            setErrorMessage('');
            ownedDevicesValue = {
                smartphone: false,
                tablet: false,
                smartwatch: false,
                smartband: false,
            };
        } else {
            setErrorMessage('Please select at least one option!');
        }
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary/>
        </div>
    );
};

export { OwnedDevicesContent, OwnedDevicesAction };