import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import axios from "axios";
import '../../styles/Dashboard.css';

const UsingSmartDevices = ({ setResults }) => {
    const [ usingSmartDevicesMin, setUsingSmartDevicesMin ] = useState();
    const [ usingSmartDevicesMax, setUsingSmartDevicesMax ] = useState();

    const usingSmartDevicesageMinHandler = (e) => {
        setUsingSmartDevicesMin(Number(e.target.value));
    };

    const usingSmartDevicesMaxHandler = (e) => {
        setUsingSmartDevicesMax(Number(e.target.value));
    };

    const usingSmartDevicesOnClick = async () => {
        const response = await axios(
            'https://cute-tan-oyster-belt.cyclic.app/find/usingSmartDevices',
            {
                method: 'get',
                params: { usingSmartDevicesMin: usingSmartDevicesMin, usingSmartDevicesMax: usingSmartDevicesMax },
            },
        );
        console.log(response.data);
        setResults(await response.data)
    };

    return (
        <div className='flex flex-column'>
            <span>Experience with smart devices:</span>
            <div className='ageMin'>
                <span>min:</span>
                <Input type='number' onChange={usingSmartDevicesageMinHandler} />
            </div>
            <div className='ageMax'>
                <span>max:</span>
                <Input type='number' onChange={usingSmartDevicesMaxHandler} />
            </div>
            <Button className='w-25' disabled={!usingSmartDevicesMin || !usingSmartDevicesMax} content="Find" primary onClick={usingSmartDevicesOnClick} />
        </div>
    );
};

export default UsingSmartDevices;