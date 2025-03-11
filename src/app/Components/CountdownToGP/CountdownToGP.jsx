import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import axios from 'axios';
import "./CountdownToGP.css";
import Image from 'next/image';
import countdownIcon from "../../../Assets/countdown-icon.svg";


const CountdownToGP = () => {
    const [targetDate, setTargetDate] = useState(null);
    const [timeLeft, setTimeLeft] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}/currentData/countdownToNextGP`)
          .then((response) => {
            setTargetDate(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setTargetDate(null);
            setLoading(false);
          });
    }, []);

    // Function to calculate countdown
    useEffect(() => {
        if (!targetDate) return;

        const interval = setInterval(() => {
            const raceTime = new Date(targetDate.dateTime).getTime();
            const now = new Date().getTime();
            const difference = raceTime - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft(null);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <motion.div 
            className="countdown-widget"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {loading ? (
                <p className="loading-text">Loading...</p>
            ) : targetDate && timeLeft ? (
                <div>
                    <div className='countdown-header'>
                    {/* <Image src={countdownIcon} className='cspg-widget-icon' alt="countdown Icon" width={40} height={40} /> */}
                    <h3 className="countdown-title">
                        {targetDate.raceName}
                    </h3>
                    </div>
                    <div className="countdown-timer">
                        <div className="time-box"><span>{timeLeft.days}</span> Days</div>
                        <div className="time-box"><span>{timeLeft.hours}</span> Hours</div>
                        <div className="time-box"><span>{timeLeft.minutes}</span> Minutes</div>
                        <div className="time-box"><span>{timeLeft.seconds}</span> Seconds</div>
                    </div>
                    <div className="countdown-footer"> Time to next Grand Prix</div>
                </div>
            ) : (
                <p className="no-data">No upcoming Grand Prix</p>
            )}
        </motion.div>
    );
};

export default CountdownToGP;
