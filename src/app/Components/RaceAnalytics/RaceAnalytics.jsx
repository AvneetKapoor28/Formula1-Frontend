import React from "react";
import { useContext } from "react";
import "./RaceAnalytics.css";
import { PastSeasonsPageContext } from "@/app/Context/PastSeasonsPageProvider";

const RaceAnalytics = () => {
  const { displayRaceAnalyticsChoice, setDisplayRaceAnalyticsChoice } =
    useContext(PastSeasonsPageContext);

  const showFastestLapGearShifts = () => {
    setDisplayRaceAnalyticsChoice(
      displayRaceAnalyticsChoice === "fastest-lap-gear-shifts-plot"
        ? null
        : "fastest-lap-gear-shifts-plot"
    );
  };

  const showTeamPaceComparison = () => {
    setDisplayRaceAnalyticsChoice(
      displayRaceAnalyticsChoice === "team-pace-comparison"
        ? null
        : "team-pace-comparison"
    );
  };

  const showTyreStrategies = () => {
    setDisplayRaceAnalyticsChoice(
      displayRaceAnalyticsChoice === "tyre-strategies"
        ? null
        : "tyre-strategies"
    );
  };

  const showDriverLaptimesDistribution = () => {
    setDisplayRaceAnalyticsChoice(
      displayRaceAnalyticsChoice ===
        "driver-laptimes-distribution--tyrecompound"
        ? null
        : "driver-laptimes-distribution--tyrecompound"
    );
  };

  const showPositionChangesDuringRace = () => {
    setDisplayRaceAnalyticsChoice(
      displayRaceAnalyticsChoice === "position-changes-during-race"
        ? null
        : "position-changes-during-race"
    );
  };

  return (
    <div className="raceanalytics-container">
      <div
        className="raceanalytics-element"
        onClick={() => showFastestLapGearShifts()}
      >
        Fastest Lap Gear Shifts
      </div>
      <div
        className="raceanalytics-element"
        onClick={() => showTeamPaceComparison()}
      >
        Team Pace Comparison
      </div>
      <div
        className="raceanalytics-element"
        onClick={() => showTyreStrategies()}
      >
        Tyre Strategies
      </div>
      <div
        className="raceanalytics-element"
        onClick={() => showDriverLaptimesDistribution()}
      >
        Driver&apos;s Laptimes Distribution Based on Tyre Compound
      </div>
      <div
        className="raceanalytics-element"
        onClick={() => showPositionChangesDuringRace()}
      >
        Compare Position Changes During Race
      </div>
    </div>
  );
};

export default RaceAnalytics;
