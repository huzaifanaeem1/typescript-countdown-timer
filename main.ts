#!/usr/bin/env node

//countdown timer project

//step # 1

import { differenceInSeconds, DifferenceInSecondsOptions } from "date-fns";

import chalk from "chalk";

//function for  countdown second
function* countdownTimer(second: number){
    //while loop
    while( second > 0){
        yield second;
        second--;
    }
}

//step # 2

//counter timing initialization
let timerIterator = countdownTimer(10);


//function to create a countdown timer

function displatCountdown(){

    // value below 10
let result = timerIterator.next();

 // if / else statement

 if (!result.done){
    //current date and time call
    const now = new Date();

    //claculate minutes in time
    const countdownTimer = new Date(now.getTime() + (result.value * 1000));

    // calculate remaining seconds in time
    const remainingSeconds = differenceInSeconds(countdownTimer, now)

    console.log((chalk.yellow)(`Remaining Seconds: ${remainingSeconds}`))

    setTimeout(displatCountdown, 1000); // 1sec is = to 1000 ms (mili seconds) k = hoga..
 }else{
    //display result countdown complete

    console.log((chalk.red)("Countdown Compelete!"))
 }

}

//Invoke

displatCountdown();