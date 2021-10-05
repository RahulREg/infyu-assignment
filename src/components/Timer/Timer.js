import React from 'react'
import { useState, useEffect } from 'react';

const Timer = () => {
    const [ minutes, setMinutes ] = useState(15);
    const [seconds, setSeconds ] =  useState(25);
    const [ hours, setHours ] = useState(11);
    const [ days, setDays ] = useState(171);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        if(days === 0) {
                            clearInterval(myInterval)
                        } else {
                            setDays(days - 1);
                            setHours(23);
                        }
                    } else {
                        setHours(hours - 1);
                        setMinutes(59);
                    }
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
        { minutes === 0 && seconds === 0
            ? null
            : <h1> {days} : {hours} : {minutes} : {seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}

export default Timer;