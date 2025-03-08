'use client'
import React, { useState, useEffect, useContext } from 'react'
import StandingsHeading from '../Components/StandingsHeadings/StandingsHeading'
import { CurrentSeasonPageContext, CurrentSeasonPageContextProvider } from '../Context/CurrentSeasonPageProvider';
import './currentSeasonPage.css'
import CollisionsCount from '../Components/CollisionsCount/CollisionsCount';
import axios from 'axios';
import TwitterFeed from '../Components/TwitterFeed/TwitterFeed';


const CurrentSeasonPageContent = () => {
  const [standings, setStandings] = useState("Drivers"); //State to store the type of standings
  const [collisionsCount, setCollisionsCount] = useState(null); //State to store the number of collisions
  const [isCollisionCountLoading, setIsCollisionCountLoading] = useState(true); // Loading state
  const { selectedYear } = useContext(CurrentSeasonPageContext)

  useEffect(() => {
    setIsCollisionCountLoading(true);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/currentData/collisionCount/${selectedYear}`
      )
      .then((response) => {
        setCollisionsCount(response.data)
        setIsCollisionCountLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setCollisionsCount(null);
        setIsCollisionCountLoading(false);
      });
  }, []);

  return (
    <>
      <div className='standings-and-info-container'>
        <div className='currentpage-standingsheadingcontainer'>
          <StandingsHeading />
        </div>
        <div className='twitterfeed-container'><TwitterFeed /></div>
      </div>
        <div className='currentpage-collisionscountcontainer'>
          <CollisionsCount collisions={collisionsCount} isLoading={isCollisionCountLoading} />
        </div>
    </>


  )
}


const CurrentSeasonPage = () => {
  return (
    <CurrentSeasonPageContextProvider>
      <CurrentSeasonPageContent />
    </CurrentSeasonPageContextProvider>

  )
}

export default CurrentSeasonPage