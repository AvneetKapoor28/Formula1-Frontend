'use client'
import React, { useEffect, useState } from 'react'
import { lexend_deca } from "./fonts";
import './landingPage.css'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import pilots from '../../public/pilots.png';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LandingPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Add landing page class for background
    document.body.classList.add('landing-page');
    
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    // Update window width when resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.body.classList.remove('landing-page');
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      className="landing"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className='landing-content'>
        <div className='left-container'>
          <div className='lines-container'>
            <div className='top-line'>Discover</div>
            <div className={`middle-line ${lexend_deca.className}`}>
              <TypeAnimation
                sequence={[
                  'FORMULA-1', 2000, // Pause for 2 seconds
                  'RACING', 2000,
                  'DATA', 2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{display: 'inline-block' }}
              />
            </div>
            <div className='description-line'>
              Experience the ultimate racing data platform
            </div>
            <div className='cta-buttons'>
              <Link href="/currentseason">
                <button className='primary-button'>Current Season</button>
              </Link>
              <Link href="/pastseasons">
                <button className='secondary-button'>Past Seasons</button>
              </Link>
            </div>
          </div>
        </div>
       
      </div>
      <div className='decorative-element top-right'></div>
      <div className='decorative-element bottom-left'></div>
    </motion.div>
  )
}

export default LandingPage