import React, { useState, useEffect } from 'react';
import Age from './filters/Age';
import '../styles/Dashboard.css';
import Gender from './filters/Gender';
import Education from './filters/Education';
import UsingSmartDevices from './filters/UsingSmartDevices';
import Activity from './filters/Activity';
import OwnedDevices from './filters/OwnedDevices';
import Reasons from './filters/Reasons';
import MonthlyAmount from './filters/MonthlyAmount';
import Monetization from './filters/Monetization';
import MonetizationLevel from './filters/MonetizationLevel';
import WorkIndustry from './filters/WorkIndustry';

const Dashboard = () => {
    const [ results, setResults ] = useState();
    const [ withoutHint, setWithoutHint ] = useState();
    const [ withHint, setWithHint ] = useState();

    useEffect(() => {
        setWithoutHint(results?.filter((result) => result.swipeData.timeAfterHint === -1));
        setWithHint(results?.filter((result) => result.swipeData.timeAfterHint !== -1));
    }, [results]);
    
    return (
        <div className="dashboard w-100 h-100">
            <div className="title w-100 pt2 pb2">Dashboard</div>
            <div className='flex justify-between h-100'>
                <div className="filterContainer h-100 w-50 overflow-y-scroll">
                    <ul className='h-100'>
                        <li className='age'>
                            <Age setResults={setResults} />
                        </li>
                        <li className='gender'>
                            <Gender setResults={setResults} />
                        </li>
                        <li className='education'>
                            <Education setResults={setResults} />
                        </li>
                        <li className='usingSmartDevices'>
                            <UsingSmartDevices setResults={setResults} />
                        </li>
                        <li className='activity'>
                            <Activity setResults={setResults} />
                        </li>
                        <li className='workIndustry'>
                            <WorkIndustry setResults={setResults} />
                        </li>
                        <li className='ownedDevices'>
                            <OwnedDevices setResults={setResults} />
                        </li>
                        <li className='reasons'>
                            <Reasons setResults={setResults} />
                        </li>
                        <li className='monthlyAmount'>
                            <MonthlyAmount setResults={setResults} />
                        </li>
                        <li className='monetization'>
                            <Monetization setResults={setResults} />
                        </li>
                        <li className='monetizationLevel'>
                            <MonetizationLevel setResults={setResults} />
                        </li>
                    </ul>
                </div>
                <div className='resultsContainer h-100 w-50 overflow-y-scroll'>
                    <p>Total: {results?.length ?? ''}</p>
                    <p>Swipe:</p>
                    <ul>
                        <li>
                            without hint: {withoutHint?.length}{withoutHint && `(${(withoutHint.length / results?.length) * 100}%)`}
                            <ul>
                                <li>
                                    total time: {(withoutHint?.reduce((accumulator, result) => { return accumulator + result.swipeData.totalTime }, 0) / results?.length)}
                                </li>
                                <li>
                                    time until action: {(withoutHint?.reduce((accumulator, result) => { return accumulator + result.swipeData.timeUntilAction }, 0) / results?.length)}
                                </li>
                            </ul>
                        </li>
                        <li>
                            with hint: {withHint?.length}{withHint && `(${(withHint.length / results?.length) * 100}%)`}
                            <ul>
                                <li>
                                    total time: {(withHint?.reduce((accumulator, result) => { return accumulator + result.swipeData.totalTime }, 0) / results?.length)}
                                </li>
                                <li>
                                    time until action: {(withHint?.reduce((accumulator, result) => { return accumulator + result.swipeData.timeUntilAction }, 0) / results?.length)}
                                </li>
                                <li>
                                    time until action after hint: {(withHint?.reduce((accumulator, result) => { return accumulator + result.swipeData.timeAfterHint }, 0) / results?.length)}
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>Scroll:</p>
                    <ul>
                        <li>
                            without hint: {withoutHint?.length}{withoutHint && `(${(withoutHint.length / results?.length) * 100}%)`}
                            <ul>
                                <li>
                                    total time: {(withoutHint?.reduce((accumulator, result) => { return accumulator + result.scrollData.totalTime }, 0) / results?.length)}
                                </li>
                                <li>
                                    time until action: {(withoutHint?.reduce((accumulator, result) => { return accumulator + result.scrollData.timeUntilAction }, 0) / results?.length)}
                                </li>
                            </ul>
                        </li>
                        <li>
                            with hint: {withHint?.length}{withHint && `(${(withHint.length / results?.length) * 100}%)`}
                            <ul>
                                <li>
                                    total time: {(withHint?.reduce((accumulator, result) => { return accumulator + result.scrollData.totalTime }, 0) / results?.length)}
                                </li>
                                <li>
                                    time until action: {(withHint?.reduce((accumulator, result) => { return accumulator + result.scrollData.timeUntilAction }, 0) / results?.length)}
                                </li>
                                <li>
                                    time until action after hint: {(withHint?.reduce((accumulator, result) => { return accumulator + result.scrollData.timeAfterHint }, 0) / results?.length)}
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>Double tap:</p>
                    <ul>
                        <li>
                            without hint: {withoutHint?.length}{withoutHint && `(${(withoutHint.length / results?.length) * 100}%)`}
                            <ul>
                                <li>
                                    total time: {(withoutHint?.reduce((accumulator, result) => { return accumulator + result.doubleTapData.totalTime }, 0) / results?.length)}
                                </li>
                                <li>
                                    time until action: {(withoutHint?.reduce((accumulator, result) => { return accumulator + result.doubleTapData.timeUntilAction }, 0) / results?.length)}
                                </li>
                            </ul>
                        </li>
                        <li>
                            with hint: {withHint?.length}{withHint && `(${(withHint.length / results?.length) * 100}%)`}
                            <ul>
                                <li>
                                    total time: {(withHint?.reduce((accumulator, result) => { return accumulator + result.doubleTapData.totalTime }, 0) / results?.length)}
                                </li>
                                <li>
                                    time until action: {(withHint?.reduce((accumulator, result) => { return accumulator + result.doubleTapData.timeUntilAction }, 0) / results?.length)}
                                </li>
                                <li>
                                    time until action after hint: {(withHint?.reduce((accumulator, result) => { return accumulator + result.doubleTapData.timeAfterHint }, 0) / results?.length)}
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>Pinch & spread:</p>
                    <ul>
                        <li>
                            without hint: {withoutHint?.length}{withoutHint && `(${(withoutHint.length / results?.length) * 100}%)`}
                            <ul>
                                <li>
                                    total time: {(withoutHint?.reduce((accumulator, result) => { return accumulator + result.pinchSpreadData.totalTime }, 0) / results?.length)}
                                </li>
                                <li>
                                    time until action: {(withoutHint?.reduce((accumulator, result) => { return accumulator + result.pinchSpreadData.timeUntilAction }, 0) / results?.length)}
                                </li>
                            </ul>
                        </li>
                        <li>
                            with hint: {withHint?.length}{withHint && `(${(withHint.length / results?.length) * 100}%)`}
                            <ul>
                                <li>
                                    total time: {(withHint?.reduce((accumulator, result) => { return accumulator + result.pinchSpreadData.totalTime }, 0) / results?.length)}
                                </li>
                                <li>
                                    time until action: {(withHint?.reduce((accumulator, result) => { return accumulator + result.pinchSpreadData.timeUntilAction }, 0) / results?.length)}
                                </li>
                                <li>
                                    time until action after hint: {(withHint?.reduce((accumulator, result) => { return accumulator + result.pinchSpreadData.timeAfterHint }, 0) / results?.length)}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;