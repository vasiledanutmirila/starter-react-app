import React, { useState } from "react";
import '../styles/Form.css';
import { AgeAction, AgeContent } from "./questions/Age";
import { GenderAction, GenderContent } from "./questions/Gender";
import { EducationAction, EducationContent } from "./questions/Education";
import { UsingSmartDevicesAction, UsingSmartDevicesContent } from "./questions/UsingSmartDevices";
import { ActivityAction, ActivityContent } from "./questions/Activity";
import { TimeSpentAction, TimeSpentContent } from "./questions/TimeSpent";
import { WorkIndustryAction, WorkIndustryContent } from "./questions/WorkIndustry";
import { OwnedDevicesAction, OwnedDevicesContent } from "./questions/OwnedDevices";
import { DeviceMostTimeSpentAction, DeviceMostTimeSpentContent } from "./questions/DeviceMostTimeSpent";
import { ReasonsAction, ReasonsContent } from "./questions/Reasons";
import { SwipeOrScrollAction, SwipeOrScrollContent } from "./questions/SwipeOrScroll";
import { ZoomAction, ZoomContent } from "./questions/Zoom";
import { ExperienceFeelingAction, ExperienceFeelingContent } from "./questions/ExperienceFeeling";
import { RateExperienceAction, RateExperienceContent } from "./questions/RateExperience";
import { NavigateAction, NavigateContent } from "./questions/Navigate";
import { LikeSwipeOrScrollAction, LikeSwipeOrScrollContent } from "./questions/LikeSwipeOrScroll";
import { SwipeEmulationAction, SwipeEmulationContent } from "./questions/SwipeEmulation";
import { ScrollEmulationAction, ScrollEmulationContent } from "./questions/ScrollEmulation";
import { EasierSwipeOrScrollAction, EasierSwipeOrScrollContent } from "./questions/EasierSwipeOrScroll";
import { DoubleTapEmulationAction, DoubleTapEmulationContent } from "./questions/DoubleTapEmulation";
import { PinchSpreadEmulationAction, PinchSpreadEmulationContent } from "./questions/PinchSpreadEmulation";
import { SubscriptionAction, SubscriptionContent } from "./questions/Subscription";
import { SubscriptionAmountAction, SubscriptionAmountContent } from "./questions/SubscriptionAmount";
import { ZoomEffectiveAction, ZoomEffectiveContent } from "./questions/ZoomEffective";
import { MonthlyAmountAction, MonthlyAmountContent } from "./questions/MonthlyAmount";
import { LikeDoubleTapOrPinchSpreadAction, LikeDoubleTapOrPinchSpreadContent } from "./questions/LikeDoubleTapOrPinchSpread";
import { EasierDoubleTapOrPinchSpreadAction, EasierDoubleTapOrPinchSpreadContent } from "./questions/EasierDoubleTapOrPinchSpread";
import { ThanksAction, ThanksContent } from "./questions/Thanks";
import { BestExperienceAction, BestExperienceContent } from "./questions/BestExoperience";

const FormContainer = () => {
    const [ count, setCount ] = useState(1);
    const [ age, setAge ] = useState();
    const [ gender, setGender ] = useState();
    const [ education, setEducation ] = useState();
    const [ usingSmartDevices, setUsingSmartDevices ] = useState();
    const [ activity, setActivity] = useState();
    const [ timeSpent, setTimeSpent ] = useState();
    const [ workIndustry, setWorkIndustry ] = useState();
    const [ ownedDevices, setOwnedDevices ] = useState();
    const [ deviceMostTimeSpent, setDeviceMostTimeSpent ] = useState();
    const [ reasons, setReasons ] = useState();
    const [ swipeOrScroll, setSwipeOrScroll ] = useState();
    const [ zoom, setZoom ] = useState();
    const [ errorMessage, setErrorMessage ] = useState();
    const [ swipeExperienceFeeling, setSwipeExperienceFeeling ] = useState();
    const [ swipeRateExperience, setSwipeRateExperience ] = useState();
    const [ swipeNavigate, setSwipeNavigate ] = useState();
    const [ scrollExperienceFeeling, setScrollExperienceFeeling ] = useState();
    const [ scrollRateExperience, setScrollRateExperience ] = useState();
    const [ scrollNavigate, setScrollNavigate ] = useState();
    const [ likeSwipeOrScroll, setLikeSwipeOrScroll ] = useState();
    const [ easierSwipeOrScroll, setEasierSwipeOrScroll ] = useState();
    const [ doubleTapExperienceFeeling, setDoubleTapExperienceFeeling ] = useState();
    const [ doubleTapRateExperience, setDoubleTapRateExperience ] = useState();
    const [ doubleTapNavigate, setDoubleTapNavigate ] = useState();
    const [ pinchSpreadExperienceFeeling, setPinchSpreadExperienceFeeling ] = useState();
    const [ pinchSpreadRateExperience, setPinchSpreadRateExperience ] = useState();
    const [ zoomEffective, setZoomEffective ] = useState();
    const [ likeDoubleTapOrPinchSpread, setLikeDoubleTapOrPinchSpread ] = useState();
    const [ easierDoubleTapOrPinchSpread, setEasierDoubleTapOrPinchSpread ] = useState();
    const [ monthlyAmount, setMonthlyAmount ] = useState();
    const [ subscription, setSubscription ] = useState();
    const [ subscriptionAmount, setSubscriptionAmount ] = useState('');
    const [ swipeDisabled, setSwipeDisabled ] = useState(true);
    const [ swipeData, setSwipeData ] = useState();
    const [ scrollDisabled, setScrollDisabled ] = useState(true);
    const [ scrollData, setScrollData ] = useState();
    const [ pinchSpreadDisabled, setPinchSpreadDisabled ] = useState(true);
    const [ pinchSpreadData, setPinchSpreadData ] = useState();
    const [ doubleTapDisabled, setDoubleTapDisabled ] = useState(true);
    const [ doubleTapData, setDoubleTapData ] = useState();
    const [ swipeBestExperience, setSwipeBestExperience ] = useState();
    const [ scrollBestExperience, setScrollBestExperience ] = useState();
    const [ doubleTapBestExperience, setDoubleTapBestExperience ] = useState();
    const [ pinchSpreadBestExperience, setPinchSpreadBestExperience ] = useState();

    const data = {
        age: age,
        gender: gender,
        education: education,
        usingSmartDevices: usingSmartDevices,
        activity: activity,
        timeSpent: timeSpent,
        workIndustry: workIndustry,
        ownedDevices: ownedDevices,
        deviceMostTimeSpent: deviceMostTimeSpent,
        reasons: reasons,
        swipeOrScroll: swipeOrScroll,
        zoom: zoom,
        swipeExperienceFeeling: swipeExperienceFeeling,
        swipeRateExperience: swipeRateExperience,
        swipeNavigate: swipeNavigate,
        scrollExperienceFeeling: scrollExperienceFeeling,
        scrollRateExperience: scrollRateExperience,
        scrollNavigate: scrollNavigate,
        likeSwipeOrScroll: likeSwipeOrScroll,
        easierSwipeOrScroll: easierSwipeOrScroll,
        doubleTapExperienceFeeling: doubleTapExperienceFeeling,
        doubleTapRateExperience: doubleTapRateExperience,
        doubleTapNavigate: doubleTapNavigate,
        pinchSpreadExperienceFeeling: pinchSpreadExperienceFeeling,
        pinchSpreadRateExperience: pinchSpreadRateExperience,
        zoomEffective: zoomEffective,
        likeDoubleTapOrPinchSpread: likeDoubleTapOrPinchSpread,
        easierDoubleTapOrPinchSpread: easierDoubleTapOrPinchSpread,
        monthlyAmount: monthlyAmount,
        subscription: subscription,
        subscriptionAmount: subscriptionAmount,
        swipeData: swipeData,
        scrollData: scrollData,
        pinchSpreadData: pinchSpreadData,
        doubleTapData: doubleTapData,
        swipeBestExperience: swipeBestExperience,
        scrollBestExperience: scrollBestExperience,
        doubleTapBestExperience: doubleTapBestExperience,
        pinchSpreadBestExperience: pinchSpreadBestExperience,
    };

    const questions = [
        '',
        'How old are you?',
        'With what gender do you identify?',
        'Last level of education that you finished',
        'For how many years have you been using smart devices?',
        'What are you doing now?',
        'Which one do you prefer?',
        'How much time do you spend daily on a smartphone/tablet?',
        'In what industry are you currently working in?',
        'What smart devices do you own?',
        'Note from 1 to 4 (with 1 the most important and 4 the least important) with which smart device you spend most of your time',
        'Which one do you prefer?',
        'Which of the following are the reasons why you use mostly smart devices?',
        '',
        'On which device did you have the best experience?',
        'How did this experience make you feel?',
        'How would you rate the experience? 1-not satisfying, 5-really satisfying',
        'Would you like to navigate throughout a feed this way? 1-not really, 5-really liked it',
        '',
        'On which device did you have the best experience?',
        'How did this experience make you feel?',
        'How would you rate the experience? 1-not satisfying, 5-really satisfying',
        'Would you like to navigate throughout a feed this way? 1-not really, 5-really liked it',
        'Which one did you like the most?',
        'Which one is easier to navigate through content?',
        '',
        'On which device did you have the best experience?',
        'How did this experience make you feel?',
        'How would you rate the experience? 1-not satisfying, 5-really satisfying',
        'Is this way of zooming effective? 1-not really, 5-really liked it',
        '',
        'On which device did you have the best experience?',
        'How did this experience make you feel?',
        'How would you rate the experience? 1-not satisfying, 5-really satisfying',
        'Is this way of zooming effective? 1-not really, 5-really liked it',
        'Which one did you like the most?',
        'Which one is easier to use for zooming?',
        'Which is the amount of money you get monthly (NET)?',
        'Would you pay a monthly subscription for an app?',
        "What's the amount of the money that you would pay for a monthly subscription for an app?",
        '',
    ];

    const renderContent = (number) => {
        switch (number) {
            case 1:
                return (
                    <AgeContent errorMessage={errorMessage} />
                );
            case 2:
                return (
                    <GenderContent />
                );
            case 3:
                return (
                    <EducationContent />
                );
            case 4:
                return (
                    <UsingSmartDevicesContent errorMessage={errorMessage} />
                );
            case 5:
                return (
                    <ActivityContent errorMessage={errorMessage} />
                );
            case 6:
                return (
                    <SwipeOrScrollContent />
                );
            case 7:
                return (
                    <TimeSpentContent errorMessage={errorMessage} />
                );
            case 8:
                return (
                    <WorkIndustryContent errorMessage={errorMessage} />
                );
            case 9:
                return (
                    <OwnedDevicesContent errorMessage={errorMessage} />
                );
            case 10:
                return (
                    <DeviceMostTimeSpentContent errorMessage={errorMessage} />
                );
            case 11:
                return (
                    <ZoomContent />
                );
            case 12:
                return (
                    <ReasonsContent errorMessage={errorMessage} />
                );
            case 13:
                return (
                    <SwipeEmulationContent setSwipeDisabled={setSwipeDisabled} />
                );
            case 14:
                return (
                    <BestExperienceContent />
                );
            case 15:
                return (
                    <ExperienceFeelingContent />
                );
            case 16:
                return (
                    <RateExperienceContent errorMessage={errorMessage} />
                );
            case 17:
                return (
                    <NavigateContent errorMessage={errorMessage} />
                );
            case 18:
                return (
                    <ScrollEmulationContent setScrollDisabled={setScrollDisabled} />
                );
            case 19:
                return (
                    <BestExperienceContent />
                );
            case 20:
                return (
                    <ExperienceFeelingContent />
                );
            case 21:
                return (
                    <RateExperienceContent errorMessage={errorMessage} />
                );
            case 22:
                return (
                    <NavigateContent errorMessage={errorMessage} />
                );
            case 23:
                return (
                    <LikeSwipeOrScrollContent />
                );
            case 24:
                return (
                    <EasierSwipeOrScrollContent />
                );
            case 25:
                return (
                    <DoubleTapEmulationContent setDoubleTapDisabled={setDoubleTapDisabled} />
                );
            case 26:
                return (
                    <BestExperienceContent />
                );
            case 27:
                return (
                    <ExperienceFeelingContent />
                );
            case 28:
                return (
                    <RateExperienceContent errorMessage={errorMessage} />
                );
            case 29:
                return (
                    <ZoomEffectiveContent errorMessage={errorMessage} />
                );
            case 30:
                return (
                    <PinchSpreadEmulationContent setPinchSpreadDisabled={setPinchSpreadDisabled} />
                );
            case 31:
                return (
                    <BestExperienceContent />
                );
            case 32:
                return (
                    <ExperienceFeelingContent />
                );
            case 33:
                return (
                    <RateExperienceContent errorMessage={errorMessage} />
                );
            case 34:
                return (
                    <ZoomEffectiveContent  errorMessage={errorMessage}/>
                );
            case 35:
                return (
                    <LikeDoubleTapOrPinchSpreadContent />
                );
            case 36:
                return (
                    <EasierDoubleTapOrPinchSpreadContent />
                );
            case 37:
                return (
                    <MonthlyAmountContent />
                );
            case 38:
                return (
                    <SubscriptionContent />
                );
            case 39:
                return (
                    <SubscriptionAmountContent />
                );

            default:
                return (
                    <ThanksContent />
                );
        }
    };

    const renderAction = (number) => {
        switch (number) {
            case 1:
                return (
                    <AgeAction count={count} setCount={setCount} setAge={setAge} setErrorMessage={setErrorMessage} />
                );
            case 2:
                return (
                    <GenderAction count={count} setCount={setCount} setGender={setGender} />
                );
            case 3:
                return (
                    <EducationAction count={count} setCount={setCount} setEducation={setEducation} />
                );
            case 4:
                return (
                    <UsingSmartDevicesAction count={count} setCount={setCount} setUsingSmartDevices={setUsingSmartDevices} setErrorMessage={setErrorMessage} />
                );
            case 5:
                return (
                    <ActivityAction count={count} setCount={setCount} setActivity={setActivity} setErrorMessage={setErrorMessage} />
                );
            case 6:
                return (
                    <SwipeOrScrollAction count={count} setCount={setCount} setSwipeOrScroll={setSwipeOrScroll} />
                );
            case 7:
                return (
                    <TimeSpentAction count={count} setCount={setCount} setTimeSpent={setTimeSpent} setErrorMessage={setErrorMessage} />
                );
            case 8:
                return (
                    <WorkIndustryAction count={count} setCount={setCount} setWorkIndustry={setWorkIndustry} setErrorMessage={setErrorMessage} />
                );
            case 9:
                return (
                    <OwnedDevicesAction count={count} setCount={setCount} setOwnedDevices={setOwnedDevices} setErrorMessage={setErrorMessage} />
                );
            case 10:
                return (
                    <DeviceMostTimeSpentAction count={count} setCount={setCount} setDeviceMostTimeSpent={setDeviceMostTimeSpent} setErrorMessage={setErrorMessage} />
                );
            case 11:
                return (
                    <ZoomAction count={count} setCount={setCount} setZoom={setZoom} />
                );
            case 12:
                return (
                    <ReasonsAction count={count} setCount={setCount} setReasons={setReasons} setErrorMessage={setErrorMessage} />
                );
            case 13:
                return (
                    <SwipeEmulationAction count={count} setCount={setCount} setSwipeData={setSwipeData} disabled={swipeDisabled} />
                );
            case 14:
                return (
                    <BestExperienceAction count={count} setCount={setCount} setBestExperience={setSwipeBestExperience} />
                );
            case 15:
                return (
                    <ExperienceFeelingAction count={count} setCount={setCount} setExperienceFeeling={setSwipeExperienceFeeling} />
                );
            case 16:
                return (
                    <RateExperienceAction count={count} setCount={setCount} setRateExperience={setSwipeRateExperience} setErrorMessage={setErrorMessage} />
                );
            case 17:
                return (
                    <NavigateAction count={count} setCount={setCount} setNavigate={setSwipeNavigate} setErrorMessage={setErrorMessage} />
                );
            case 18:
                return (
                    <ScrollEmulationAction count={count} setCount={setCount} setScrollData={setScrollData} disabled={scrollDisabled} />
                );
            case 19:
                return (
                    <BestExperienceAction count={count} setCount={setCount} setBestExperience={setScrollBestExperience} />
                );
            case 20:
                return (
                    <ExperienceFeelingAction count={count} setCount={setCount} setExperienceFeeling={setScrollExperienceFeeling} />
                );
            case 21:
                return (
                    <RateExperienceAction count={count} setCount={setCount} setRateExperience={setScrollRateExperience} setErrorMessage={setErrorMessage} />
                );
            case 22:
                return (
                    <NavigateAction count={count} setCount={setCount} setNavigate={setScrollNavigate} setErrorMessage={setErrorMessage} />
                );
            case 23:
                return (
                    <LikeSwipeOrScrollAction count={count} setCount={setCount} setLikeSwipeOrScroll={setLikeSwipeOrScroll} />
                );
            case 24:
                return (
                    <EasierSwipeOrScrollAction count={count} setCount={setCount} setEasierSwipeOrScroll={setEasierSwipeOrScroll} />
                );
            case 25:
                return (
                    <DoubleTapEmulationAction count={count} setCount={setCount} setDoubleTapData={setDoubleTapData} disabled={doubleTapDisabled} />
                );
            case 26:
                return (
                    <BestExperienceAction count={count} setCount={setCount} setBestExperience={setDoubleTapBestExperience} />
                );
            case 27:
                return (
                    <ExperienceFeelingAction count={count} setCount={setCount} setExperienceFeeling={setDoubleTapExperienceFeeling} />
                );
            case 28:
                return (
                    <RateExperienceAction count={count} setCount={setCount} setRateExperience={setDoubleTapRateExperience} setErrorMessage={setErrorMessage} />
                );
            case 29:
                return (
                    <ZoomEffectiveAction count={count} setCount={setCount} setZoomEffective={setDoubleTapNavigate} setErrorMessage={setErrorMessage} />
                );
            case 30:
                return (
                    <PinchSpreadEmulationAction count={count} setCount={setCount} setPinchSpreadData={setPinchSpreadData} disabled={pinchSpreadDisabled} />
                );
            case 31:
                return (
                    <BestExperienceAction count={count} setCount={setCount} setBestExperience={setPinchSpreadBestExperience} />
                );
            case 32:
                return (
                    <ExperienceFeelingAction count={count} setCount={setCount} setExperienceFeeling={setPinchSpreadExperienceFeeling} />
                );
            case 33:
                return (
                    <RateExperienceAction count={count} setCount={setCount} setRateExperience={setPinchSpreadRateExperience} setErrorMessage={setErrorMessage} />
                );
            case 34:
                return (
                    <ZoomEffectiveAction count={count} setCount={setCount} setZoomEffective={setZoomEffective} setErrorMessage={setErrorMessage} />
                );
            case 35:
                return (
                    <LikeDoubleTapOrPinchSpreadAction count={count} setCount={setCount} setLikeDoubleTapOrPinchSpread={setLikeDoubleTapOrPinchSpread} />
                );
            case 36:
                return (
                    <EasierDoubleTapOrPinchSpreadAction count={count} setCount={setCount} setEasierDoubleTapOrPinchSpread={setEasierDoubleTapOrPinchSpread} />
                );
            case 37:
                return (
                    <MonthlyAmountAction count={count} setCount={setCount} setMonthlyAmount={setMonthlyAmount} />
                );
            case 38:
                return (
                    <SubscriptionAction count={count} setCount={setCount} setSubscription={setSubscription} />
                );
            case 39:
                if ( subscription === 'yes' ) {
                    return (
                        <SubscriptionAmountAction count={count} setCount={setCount} setSubscriptionAmount={setSubscriptionAmount} />
                    );
                } else {
                    setCount(count + 1);
                    break;
                }
        
            default:
                return (
                    <ThanksAction data={data} />
                );
        }
    }

    return  (
        <div className="formContainer flex flex-column justify-between items-center">
            <div className={`header ${[13, 18, 25, 30].includes(count) ? 'mt1' : 'mt5'} pl1 pr1 flex flex-column items-center justify-center`}>
                <div>{count < questions.length - 1 ? `Question #${count}` : 'Thank you!'}</div>
                <div className="question">{questions[count]}</div>
            </div>
            {renderContent(count)}
            {renderAction(count)}
        </div>
    );
};

export default FormContainer;