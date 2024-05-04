import React, { useState, useEffect} from 'react';

import Background from '../../assets/media/background-blue.svg';

interface FeedbackProps {
    feedbackData: object[];
}

const Feedback = ({
    feedbackData
}: FeedbackProps) => {

    let results = []; 
    let calloutsFound = [];

    let averageTime = 0;
    let bestAccuracy = -1;
    let bestCallout = '';
    let worstAccuracy = 101;
    let worstCallout = '';

    //Loops through data passed as prop, stores and finds key takeaways to display for user
    const proccessData = () => {
        console.log(feedbackData);
        feedbackData.map((callout) => {
            if(!calloutsFound.includes(callout.image)) {
                calloutsFound.push(callout.image);
                let newCallout = {calloutName: callout.image, calloutAttempts: 1, calloutTrue: (callout.image === callout.callout ? 1 : 0), calloutFalse: (callout.image !== callout.callout? 1 : 0), calloutAverageTime: callout.time};
                    results.push(newCallout);
            } else {
                results.map((resultsCallout) => {
                    if(resultsCallout.calloutName === callout.image) {
                        resultsCallout.calloutAttempts++;
                        callout.image === callout.callout ? resultsCallout.calloutTrue = resultsCallout.calloutTrue + 1 : resultsCallout.calloutFalse = resultsCallout.calloutFalse + 1;
                        resultsCallout.calloutAverageTime = (callout.image === callout.callout ? (resultsCallout.calloutAverageTime + callout.time)/2 : resultsCallout.calloutAverageTime);
                    }
                })
            }
        })

        console.log('Results: ' + JSON.stringify(results));
        
        //calcs average callout time
        let totalTime = 0;
        let totalCorrect = 0;
        results.forEach((result) => {
            totalTime += result.calloutAverageTime;
            totalCorrect += result.calloutTrue;
        })
        averageTime = totalTime/totalCorrect;

        //calc most and least accurate callout
        results.forEach((result) => {
            const accuracy = (result.calloutTrue / result.calloutAttempts) * 100;
            if(accuracy > bestAccuracy){
                bestAccuracy = accuracy;
                bestCallout = result.calloutName;
            }
            else if(accuracy < worstAccuracy){
                worstAccuracy = accuracy;
                worstCallout = result.calloutName;
            }
        })
    }

    //Serves list displaying all results after data is processed
    const serveResultsList = () => {
        return results.map((result, index) => (
            <div key={index} className='result-wrapper'>
                <div className='result-data'>{result.calloutName}</div>
                <div className='result-data'>{result.calloutAttempts}</div>
                <div className='result-data'>{result.calloutTrue}</div>
                <div className='result-data'>{result.calloutFalse}</div>
                <div className='result-data'>{result.calloutAverageTime}&#40;MS&#41;</div>
            </div>
        ));
    };
    
    proccessData();
    
    return (
        <div className='feedback-wrapper'>
            <img className='feedback-background' src={Background} />
            <div className='feedback-content'>
                <div className='featured-wrapper'>
                    <div className='average-time-wrapper'>
                        <div className='featured-title'>Average Time</div>
                        <div className='featured-data'>{averageTime}&#40;MS&#41;</div>
                    </div>
                    <div className='average-time-wrapper'>
                        <div className='featured-title'>Best Callout</div>
                        <div className='featured-data'>{bestCallout}</div>
                    </div>
                    <div className='average-time-wrapper'>
                        <div className='featured-title'>Worst Callout</div>
                        <div className='featured-data'>{worstCallout}</div>
                    </div>
                </div>
                <div className='feedback-list'>
                    <div className='result-wrapper'>
                        <div className='result-data result-title'>Callout Name:</div>
                        <div className='result-data result-title'>Attempts:</div>
                        <div className='result-data result-title'>Correct:</div>
                        <div className='result-data result-title'>Incorrect:</div>
                        <div className='result-data result-title'>Average Time:</div>
                    </div>
                    {serveResultsList()}
                </div>
            </div>
        </div>
    );
};

export default Feedback;