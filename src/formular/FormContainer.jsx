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
    };

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
                    <ExperienceFeelingContent />
                );
            case 15:
                return (
                    <RateExperienceContent errorMessage={errorMessage} />
                );
            case 16:
                return (
                    <NavigateContent errorMessage={errorMessage} />
                );
            case 17:
                return (
                    <ScrollEmulationContent setScrollDisabled={setScrollDisabled} />
                );
            case 18:
                return (
                    <ExperienceFeelingContent />
                );
            case 19:
                return (
                    <RateExperienceContent errorMessage={errorMessage} />
                );
            case 20:
                return (
                    <NavigateContent errorMessage={errorMessage} />
                );
            case 21:
                return (
                    <LikeSwipeOrScrollContent />
                );
            case 22:
                return (
                    <EasierSwipeOrScrollContent />
                );
            case 23:
                return (
                    <DoubleTapEmulationContent setDoubleTapDisabled={setDoubleTapDisabled} />
                );
            case 24:
                return (
                    <ExperienceFeelingContent />
                );
            case 25:
                return (
                    <RateExperienceContent errorMessage={errorMessage} />
                );
            case 26:
                return (
                    <ZoomEffectiveContent errorMessage={errorMessage} />
                );
            case 27:
                return (
                    <PinchSpreadEmulationContent setPinchSpreadDisabled={setPinchSpreadDisabled} />
                );
            case 28:
                return (
                    <ExperienceFeelingContent />
                );
            case 29:
                return (
                    <RateExperienceContent errorMessage={errorMessage} />
                );
            case 30:
                return (
                    <ZoomEffectiveContent  errorMessage={errorMessage}/>
                );
            case 31:
                return (
                    <LikeDoubleTapOrPinchSpreadContent />
                );
            case 32:
                return (
                    <EasierDoubleTapOrPinchSpreadContent />
                );
            case 33:
                return (
                    <MonthlyAmountContent />
                );
            case 34:
                return (
                    <SubscriptionContent />
                );
            case 35:
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
                    <ExperienceFeelingAction count={count} setCount={setCount} setExperienceFeeling={setSwipeExperienceFeeling} />
                );
            case 15:
                return (
                    <RateExperienceAction count={count} setCount={setCount} setRateExperience={setSwipeRateExperience} setErrorMessage={setErrorMessage} />
                );
            case 16:
                return (
                    <NavigateAction count={count} setCount={setCount} setNavigate={setSwipeNavigate} setErrorMessage={setErrorMessage} />
                );
            case 17:
                return (
                    <ScrollEmulationAction count={count} setCount={setCount} setScrollData={setScrollData} disabled={scrollDisabled} />
                )
            case 18:
                return (
                    <ExperienceFeelingAction count={count} setCount={setCount} setExperienceFeeling={setScrollExperienceFeeling} />
                );
            case 19:
                return (
                    <RateExperienceAction count={count} setCount={setCount} setRateExperience={setScrollRateExperience} setErrorMessage={setErrorMessage} />
                );
            case 20:
                return (
                    <NavigateAction count={count} setCount={setCount} setNavigate={setScrollNavigate} setErrorMessage={setErrorMessage} />
                );
            case 21:
                return (
                    <LikeSwipeOrScrollAction count={count} setCount={setCount} setLikeSwipeOrScroll={setLikeSwipeOrScroll} />
                );
            case 22:
                return (
                    <EasierSwipeOrScrollAction count={count} setCount={setCount} setEasierSwipeOrScroll={setEasierSwipeOrScroll} />
                );
            case 23:
                return (
                    <DoubleTapEmulationAction count={count} setCount={setCount} setDoubleTapData={setDoubleTapData} disabled={doubleTapDisabled} />
                );
            case 24:
                return (
                    <ExperienceFeelingAction count={count} setCount={setCount} setExperienceFeeling={setDoubleTapExperienceFeeling} />
                );
            case 25:
                return (
                    <RateExperienceAction count={count} setCount={setCount} setRateExperience={setDoubleTapRateExperience} setErrorMessage={setErrorMessage} />
                );
            case 26:
                return (
                    <ZoomEffectiveAction count={count} setCount={setCount} setZoomEffective={setDoubleTapNavigate} setErrorMessage={setErrorMessage} />
                );
            case 27:
                return (
                    <PinchSpreadEmulationAction count={count} setCount={setCount} setPinchSpreadData={setPinchSpreadData} disabled={pinchSpreadDisabled} />
                );
            case 28:
                return (
                    <ExperienceFeelingAction count={count} setCount={setCount} setExperienceFeeling={setPinchSpreadExperienceFeeling} />
                );
            case 29:
                return (
                    <RateExperienceAction count={count} setCount={setCount} setRateExperience={setPinchSpreadRateExperience} setErrorMessage={setErrorMessage} />
                );
            case 30:
                return (
                    <ZoomEffectiveAction count={count} setCount={setCount} setZoomEffective={setZoomEffective} setErrorMessage={setErrorMessage} />
                );
            case 31:
                return (
                    <LikeDoubleTapOrPinchSpreadAction count={count} setCount={setCount} setLikeDoubleTapOrPinchSpread={setLikeDoubleTapOrPinchSpread} />
                );
            case 32:
                return (
                    <EasierDoubleTapOrPinchSpreadAction count={count} setCount={setCount} setEasierDoubleTapOrPinchSpread={setEasierDoubleTapOrPinchSpread} />
                );
            case 33:
                return (
                    <MonthlyAmountAction count={count} setCount={setCount} setMonthlyAmount={setMonthlyAmount} />
                );
            case 34:
                return (
                    <SubscriptionAction count={count} setCount={setCount} setSubscription={setSubscription} />
                );
            case 35:
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
            <div className={`header ${[13, 17, 23, 27].includes(count) ? 'mt1' : 'mt5'} flex flex-column items-center justify-center`}>{count < 36 ? `Question #${count}` : 'Thank you!'}</div>
            {renderContent(count)}
            {renderAction(count)}
        </div>
    );
};

export default FormContainer;