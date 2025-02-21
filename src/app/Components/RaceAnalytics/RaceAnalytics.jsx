import React from 'react'
import { useContext } from 'react';
import './RaceAnalytics.css'
import { PastSeasonsPageContext } from '@/app/Context/PastSeasonsPageProvider';

const RaceAnalytics = () => {
    const {displayRaceAnalyticsChoice, setDisplayRaceAnalyticsChoice} = useContext(PastSeasonsPageContext);

    const showFastestLapGearShifts = () => {
        setDisplayRaceAnalyticsChoice(displayRaceAnalyticsChoice === 'Fastest Lap Gear Shifts' ? null : 'Fastest Lap Gear Shifts');
    }

    const showTeamPaceComparison = () => {
        setDisplayRaceAnalyticsChoice(displayRaceAnalyticsChoice === 'Team Pace Comparison' ? null : 'Team Pace Comparison');
    }

    const showTyreStrategies = () => {
        setDisplayRaceAnalyticsChoice(displayRaceAnalyticsChoice === 'Tyre Strategies' ? null : 'Tyre Strategies');
    }

    const showDriverLaptimesDistribution = () => {
        setDisplayRaceAnalyticsChoice(displayRaceAnalyticsChoice === 'Driver Laptimes Distribution' ? null : 'Driver Laptimes Distribution');
    }

    const showPositionChangesDuringRace = () => {
        setDisplayRaceAnalyticsChoice(displayRaceAnalyticsChoice === 'Position Changes During Race' ? null : 'Position Changes During Race');
    }
    

  return (
    <div className='raceanalytics-container'>
        <div className='raceanalytics-element' onClick={() => showFastestLapGearShifts()}>Fastest Lap Gear Shifts</div>
        <div className='raceanalytics-element' onClick={() => showTeamPaceComparison()}>Team Pace Comparison</div>
        <div className='raceanalytics-element' onClick={() => showTyreStrategies()}>Tyre Strategies</div>
        <div className='raceanalytics-element' onClick={() => showDriverLaptimesDistribution()}>Driver Laptimes Distribution</div>
        <div className='raceanalytics-element' onClick={() => showPositionChangesDuringRace()}>Position Changes During Race</div>
    </div>
  )
}

export default RaceAnalytics