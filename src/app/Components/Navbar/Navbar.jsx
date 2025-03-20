"use client";
import React from "react";
import "./Navbar.css";
import Image from "next/image";
import logo from "../../../Assets/logo.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoginButton from "../LoginButton/LoginButton";

const Navbar = () => {
  const pathname = usePathname();
  let isLandingPage = pathname === "/";
  const [navSelection, setNavSelection] = useState("HomePage");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    // Update window width when resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`Navbar ${isLandingPage ? "no-bottom-border" : ""}`}>
      <div className="navbar-content">
        <div className="website-logo">
          <Link href={"/"} onClick={() => setNavSelection("LandingPage")}>
            <Image src={logo} alt="Website Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Mobile hamburger menu */}
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navigation links - will be hidden on mobile unless menu is open */}
        <div className={`links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <p
            onClick={() => {
              setNavSelection("CurrentSeason");
              setIsMobileMenuOpen(false);
            }}
            className={navSelection === "CurrentSeason" ? "selected" : ""}
          >
            <Link href={"/currentseason"} className="link">
              Current Season
            </Link>
          </p>
          <p
            onClick={() => {
              setNavSelection("PastSeasons");
              setIsMobileMenuOpen(false);
            }}
            className={navSelection === "PastSeasons" ? "selected" : ""}
          >
            <Link href={"/pastseasons"} className="link">
              Past Seasons
            </Link>
          </p>
          <div className="login-button-container">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;