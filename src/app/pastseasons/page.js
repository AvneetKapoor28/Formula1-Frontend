'use client'
import React, { useContext, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "./PastSeasonsPage.css";
import StandingsHeading from "../Components/StandingsHeadings/StandingsHeading";
import DropdownYear from "../Components/DropdownYear/DropdownYear";
import { PastSeasonsPageContext, PastSeasonsPageContextProvider } from "../Context/PastSeasonsPageProvider";
import SeasonRaceCount from "../Components/CountWidgets/SeasonRaceCount/SeasonRaceCount";
import DriverCount from "../Components/CountWidgets/DriverCount/DriverCount";
import ConstructorCount from "../Components/CountWidgets/ConstructorCount/ConstructorCount";
import RaceItemList from "../Components/RaceItemList/RaceItemList";
import RaceDetails from "../Components/RaceDetails/RaceDetails";

const PastSeasonsPageContent = () => {
  // const [ isPopupOpen, setIsPopupOpen ] = useState(false); //deprecated
  const { displayRaceDetails, setDisplayRaceDetails } = useContext(PastSeasonsPageContext);
  return (
    <div>
      <div className="standingsheading-selectyear">
        <div>
          <StandingsHeading />
        </div>

        <div className="right-side">
          <DropdownYear />
          <div className="counts-container">
            <DriverCount />
            <ConstructorCount />
            <SeasonRaceCount />
          </div>
        </div>
      </div>

      <div>
        <RaceItemList />
      </div>
      {displayRaceDetails ? <RaceDetails /> : null}

    </div>
  );
};

const PastSeasonsPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect unauthenticated users to the sign-in page
  React.useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/"); // Adjust the path to your sign-in page
    }
  }, [status, router]);

  // Display a loading state while session is being checked
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  
  return (
    <PastSeasonsPageContextProvider>
      <PastSeasonsPageContent />
    </PastSeasonsPageContextProvider>
  )
}

export default PastSeasonsPage;
