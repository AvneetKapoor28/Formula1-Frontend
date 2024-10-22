'use client'
import React from "react";
import "./Navbar.css";
import Image from 'next/image';
import logo from "../../../Assets/Logo.svg";
import { useState } from "react";
import Link from 'next/link'

const Navbar = () => {
  const [navSelection, setNavSelection] = useState("HomePage");
  return (
    <div className="Navbar">
      <div className="website-logo">
        <Link href={"/"} onClick={() => setNavSelection("LandingPage")}>
          {/* <img src={logo} alt="" /> */}
          <Image src={logo} alt="Website Logo" width={50} height={50} />
        </Link>
      </div>
      <div className="links">
        <p
          onClick={() => setNavSelection("LiveRaceData")}
          className={navSelection === "LiveRaceData" ? "selected" : ""}
        >
          <span className="spanforlink">
            <Link href={"/liverace"} className="link">
              Live Race Data
            </Link>
          </span>
        </p>
        <p
          onClick={() => setNavSelection("CurrentSeason")}
          className={navSelection === "CurrentSeason" ? "selected" : ""}
        >
          <Link href={"/currentseason"} className="link">
            Current Season
          </Link>
        </p>
        <p
          onClick={() => setNavSelection("PastSeasons")}
          className={navSelection === "PastSeasons" ? "selected" : ""}
        >
          <Link href={"pastseasons"} className="link">
            Past Seasons
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;