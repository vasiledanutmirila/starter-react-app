import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import axios from "axios";
import '../../styles/Dashboard.css';

const Age = ({ setResults }) => {
    const [ ageMin, setAgeMin ] = useState();
    const [ ageMax, setAgeMax ] = useState();

    const ageMinHandler = (e) => {
        setAgeMin(Number(e.target.value));
    };

    const ageMaxHandler = (e) => {
        setAgeMax(Number(e.target.value));
    };

    const ageOnClick = async () => {
        const response = await axios(
            'https://formular-api.cyclic.app/find/age',
            {
                method: 'get',
                params: { ageMin: ageMin, ageMax: ageMax },
            },
        );
        setResults(await response.data)
    };

    return (
        <div className='filter flex flex-column pt4'>
            <span>Age</span>
            <div className='ageMin'>
                <span>min:</span>
                <Input type='number' onChange={ageMinHandler} />
            </div>
            <div className='ageMax'>
                <span>max:</span>
                <Input type='number' onChange={ageMaxHandler} />
            </div>
            <Button className='w-25' disabled={!ageMin || !ageMax} content="Find" primary onClick={ageOnClick} />
        </div>
    );
};

export default Age;