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
import DonutChart from 'react-donut-chart';

const Dashboard = () => {
    const [ results, setResults ] = useState();
    const [ swipeWithoutHint, setSwipeWithoutHint ] = useState();
    const [ swipeWithHint, setSwipeWithHint ] = useState();
    const [ scrollWithoutHint, setScrollWithoutHint ] = useState();
    const [ scrollWithHint, setScrollWithHint ] = useState();
    const [ doubleTapWithoutHint, setDoubleTapWithoutHint ] = useState();
    const [ doubleTapWithHint, setDoubleTapWithHint ] = useState();
    const [ pinchSpreadWithoutHint, setPinchSpreadWithoutHint ] = useState();
    const [ pinchSpreadWithHint, setPinchSpreadWithHint ] = useState();

    useEffect(() => {
        setSwipeWithoutHint(results?.filter((result) => result.swipeData.timeAfterHint === -1));
        setSwipeWithHint(results?.filter((result) => result.swipeData.timeAfterHint !== -1));
        setScrollWithoutHint(results?.filter((result) => result.scrollData.timeAfterHint === -1));
        setScrollWithHint(results?.filter((result) => result.scrollData.timeAfterHint !== -1));
        setDoubleTapWithoutHint(results?.filter((result) => result.doubleTapData.timeAfterHint === -1));
        setDoubleTapWithHint(results?.filter((result) => result.doubleTapData.timeAfterHint !== -1));
        setPinchSpreadWithoutHint(results?.filter((result) => result.pinchSpreadData.timeAfterHint === -1));
        setPinchSpreadWithHint(results?.filter((result) => result.pinchSpreadData.timeAfterHint !== -1));
        
    }, [results]);
    
    return (
        <div className="dashboard w-100 h-100">
            <div className="title w-100 pt2 pb2">Dashboard</div>
            <div className='dashboardContent flex justify-between'>
                <div className="filterContainer h-100 w-30 overflow-y-scroll">
                    <div className='filterList h-100 flex flex-column pl4 pr4'>
                        <div className='age'>
                            <Age setResults={setResults} />
                        </div>
                        <div className='gender'>
                            <Gender setResults={setResults} />
                        </div>
                        <div className='education'>
                            <Education setResults={setResults} />
                        </div>
                        <div className='usingSmartDevices'>
                            <UsingSmartDevices setResults={setResults} />
                        </div>
                        <div className='activity'>
                            <Activity setResults={setResults} />
                        </div>
                        <div className='workIndustry'>
                            <WorkIndustry setResults={setResults} />
                        </div>
                        <div className='ownedDevices'>
                            <OwnedDevices setResults={setResults} />
                        </div>
                        <div className='reasons'>
                            <Reasons setResults={setResults} />
                        </div>
                        <div className='monthlyAmount'>
                            <MonthlyAmount setResults={setResults} />
                        </div>
                        <div className='monetization'>
                            <Monetization setResults={setResults} />
                        </div>
                        <div className='monetizationLevel'>
                            <MonetizationLevel setResults={setResults} />
                        </div>
                    </div>
                </div>
                {(swipeWithHint || swipeWithoutHint) && <div className='resultsContainer h-100 w-70 overflow-y-scroll pa4'>
                    <p className='resultHeader'>Total: {results?.length ?? ''}</p>
                    {results.length > 0 && (<div>
                        <div className='charts'>
                            <div className='chartItem'>
                                <p className='resultHeader'>Swipe:</p>
                                <div>
                                    <div>
                                        <DonutChart
                                            data={[
                                                { label: 'no hint', value: Number(((swipeWithoutHint?.length / results?.length) * 100).toFixed(2)) },
                                                { label: 'hint', value: Number(((swipeWithHint?.length / results?.length) * 100).toFixed(2)) }
                                            ]}
                                            className='chart'
                                            width={370}
                                            height={250}
                                        />
                                        <p>no hint:</p>
                                        <ul>
                                            <li>
                                                total time: {(swipeWithoutHint?.reduce((accumulator, result) => { return accumulator + result.swipeData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(swipeWithoutHint?.reduce((accumulator, result) => { return accumulator + result.swipeData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        hint:
                                        <ul>
                                            <li>
                                                total time: {(swipeWithHint?.reduce((accumulator, result) => { return accumulator + result.swipeData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(swipeWithHint?.reduce((accumulator, result) => { return accumulator + result.swipeData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action after hint: {(swipeWithHint?.reduce((accumulator, result) => { return accumulator + result.swipeData.timeAfterHint }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='chartItem'>
                                <p className='resultHeader'>Scroll:</p>
                                <div>
                                    <div>
                                        <DonutChart
                                            data={[
                                                { label: 'no hint', value: Number(((scrollWithoutHint?.length / results?.length) * 100).toFixed(2)) },
                                                { label: 'hint', value: Number(((scrollWithHint?.length / results?.length) * 100).toFixed(2)) }
                                            ]}
                                            className='chart'
                                            width={370}
                                            height={250}
                                        />
                                        <p>no hint:</p>
                                        <ul>
                                            <li>
                                                total time: {(scrollWithoutHint?.reduce((accumulator, result) => { return accumulator + result.scrollData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(scrollWithoutHint?.reduce((accumulator, result) => { return accumulator + result.scrollData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        hint:
                                        <ul>
                                            <li>
                                                total time: {(scrollWithHint?.reduce((accumulator, result) => { return accumulator + result.scrollData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(scrollWithHint?.reduce((accumulator, result) => { return accumulator + result.scrollData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action after hint: {(scrollWithHint?.reduce((accumulator, result) => { return accumulator + result.scrollData.timeAfterHint }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='chartItem'>
                                <p className='resultHeader'>Double tap:</p>
                                <div>
                                    <div>
                                        <DonutChart
                                            data={[
                                                { label: 'no hint', value: Number(((doubleTapWithoutHint?.length / results?.length) * 100).toFixed(2)) },
                                                { label: 'hint', value: Number(((doubleTapWithHint?.length / results?.length) * 100).toFixed(2)) }
                                            ]}
                                            className='chart'
                                            width={370}
                                            height={250}
                                        />
                                        <p>no hint:</p>
                                        <ul>
                                            <li>
                                                total time: {(doubleTapWithoutHint?.reduce((accumulator, result) => { return accumulator + result.doubleTapData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(doubleTapWithoutHint?.reduce((accumulator, result) => { return accumulator + result.doubleTapData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        with hint:
                                        <ul>
                                            <li>
                                                total time: {(doubleTapWithHint?.reduce((accumulator, result) => { return accumulator + result.doubleTapData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(doubleTapWithHint?.reduce((accumulator, result) => { return accumulator + result.doubleTapData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action after hint: {(doubleTapWithHint?.reduce((accumulator, result) => { return accumulator + result.doubleTapData.timeAfterHint }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='chartItem'>
                                <p className='resultHeader'>Pinch & spread:</p>
                                <div>
                                    <div>
                                        <DonutChart
                                            data={[
                                                { label: 'no hint', value: Number(((pinchSpreadWithoutHint?.length / results?.length) * 100).toFixed(2)) },
                                                { label: 'hint', value: Number(((pinchSpreadWithHint?.length / results?.length) * 100).toFixed(2)) }
                                            ]}
                                            className='chart'
                                            width={370}
                                            height={250}
                                        />
                                        <p>no hint:</p>
                                        <ul>
                                            <li>
                                                total time: {(doubleTapWithoutHint?.reduce((accumulator, result) => { return accumulator + result.pinchSpreadData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(doubleTapWithoutHint?.reduce((accumulator, result) => { return accumulator + result.pinchSpreadData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        hint:
                                        <ul>
                                            <li>
                                                total time: {(doubleTapWithHint?.reduce((accumulator, result) => { return accumulator + result.pinchSpreadData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(doubleTapWithHint?.reduce((accumulator, result) => { return accumulator + result.pinchSpreadData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action after hint: {(doubleTapWithHint?.reduce((accumulator, result) => { return accumulator + result.pinchSpreadData.timeAfterHint }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt6'>
                            <p>Preference between swipe and scroll: {results?.filter((result) => result.swipeOrScroll === 'scroll' ).length < results?.filter((result) => result.swipeOrScroll === 'swipe' ).length ? 'swipe' : 'scroll'}</p>
                            <p>Better experience between swipe and scroll: {results?.filter((result) => result.likeSwipeOrScroll === 'scroll' ).length < results?.filter((result) => result.likeSwipeOrScroll === 'swipe' ).length ? 'swipe' : 'scroll'}</p>
                            <p>Preference between double tap and pinch & spread: {results?.filter((result) => result.zoom === 'doubleTap' ).length < results?.filter((result) => result.zoom === 'pinchSpread' ).length ? 'pinch & spread' : 'double tap'}</p>
                            <p>Better experience between tap and pinch & spread: {results?.filter((result) => result.likeDoubleTapOrPinchSpread === 'doubleTap' ).length < results?.filter((result) => result.likeDoubleTapOrPinchSpread === 'pinchSpread' ).length ? 'pinch & spread' : 'double tap'}</p>
                            <p>Time spent daily on smartphone/tablet: {((results?.reduce((accumulator, result) => { return accumulator + result.usingSmartDevices }, 0)) / results?.length).toFixed(2) || ''}</p>
                            
                        </div>
                    </div>)}
                </div>}
            </div>
        </div>
    );
};

export default Dashboard;