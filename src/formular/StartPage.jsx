import React from 'react';
import { Button } from 'semantic-ui-react';
import '../styles/Button.css';

const StartPage = () => {
    const onClick = () => {
        console.log('starting form...');
    }
    return (<div className="App h-100 flex items-center justify-center"><Button content='Start Formular' onClick={onClick} primary /></div>);
};

export default StartPage;