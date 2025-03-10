'use client'
import React, { useState, useEffect, useContext } from 'react'
import StandingsHeading from '../Components/StandingsHeadings/StandingsHeading'
import { CurrentSeasonPageContext, CurrentSeasonPageContextProvider } from '../Context/CurrentSeasonPageProvider';
import './currentSeasonPage.css'
import CollisionsCount from '../Components/CollisionsCount/CollisionsCount';
import axios from 'axios';
import TwitterFeed from '../Components/TwitterFeed/TwitterFeed';
import YoutubeFeed from '../Components/YotutubeFeed/YoutubeFeed';
import CurrentSeasonRaceCount from '../Components/CurrentSeasonRaceCount/CurerentSeasonRaceCount';
import SprintsCount from '../Components/SprintsCount/SprintsCount';

const CurrentSeasonPageContent = () => {
  const [collisionsCount, setCollisionsCount] = useState(null);
  const [isCollisionCountLoading, setIsCollisionCountLoading] = useState(true);
  const { selectedYear } = useContext(CurrentSeasonPageContext);

  useEffect(() => {
    setIsCollisionCountLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/currentData/collisionCount/${selectedYear}`)
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
    <div className="current-season-grid">
      {/* Left Side (65%) */}
      <div className="left-column">
        <div className="currentpage-standings-container">
          <StandingsHeading />
        </div>
        <div className="cspg-widgets-container">
          <CollisionsCount collisions={collisionsCount} isLoading={isCollisionCountLoading} />
          <CurrentSeasonRaceCount /> 
          <SprintsCount/>
        </div>
      </div>

      {/* Right Side (35%) */}
      <div className="right-column">
        <div className="twitterfeed-container">
          <TwitterFeed />
        </div>
        <div className="youtube-container">
          <YoutubeFeed />
        </div>
      </div>
    </div>
  );
};

const CurrentSeasonPage = () => {
  return (
    <CurrentSeasonPageContextProvider>
      <CurrentSeasonPageContent />
    </CurrentSeasonPageContextProvider>
  );
};

export default CurrentSeasonPage;
