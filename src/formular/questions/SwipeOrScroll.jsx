import React, { useState } from "react";
import { Button, Radio } from 'semantic-ui-react';

let swipeOrScrollValue = 'swipe';

const onChange = (e, { value }, setSwipeOrScroll) => {
    setSwipeOrScroll(value);
    swipeOrScrollValue = value;
};

const SwipeOrScrollContent = ({ question }) => {
    const [ swipeOrScroll, setSwipeOrScroll ] = useState('swipe');
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        <div className="question">{question}</div>
        <Radio
            label='swipe'
            name='radioGroup'
            value='swipe'
            checked={swipeOrScroll === 'swipe'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setSwipeOrScroll)
            }}
        />
        <Radio
            label='scroll'
            name='radioGroup'
            value='scroll'
            checked={swipeOrScroll === 'scroll'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setSwipeOrScroll)
            }}
        />
    </div>
    );
};

const SwipeOrScrollAction = ({ count, setCount, setSwipeOrScroll }) => {
    const onClick = () => {
        setCount(count + 1);
        setSwipeOrScroll(swipeOrScrollValue);
        swipeOrScrollValue = 'swipe';
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary/>
        </div>
    );
};

export { SwipeOrScrollContent, SwipeOrScrollAction };