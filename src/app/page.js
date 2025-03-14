'use client'
import React, { useEffect } from 'react'
import { lexend_deca } from "./fonts";
import './landingPage.css'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import pilots from '../../public/pilots.png';
import { motion } from 'framer-motion';

const LandingPage = () => {
  useEffect(() => {
    document.body.classList.add('landing-page');   //For the unique background image on the landing page.
    return () => {
      document.body.classList.remove('landing-page');
    };
  })
  return (
      <motion.div
        className="landing"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
      <div className='left-container'>
        <div className='lines-container'>
          <div className='top-line'>Discover</div>
          <div className={`middle-line ${lexend_deca.className}`}><TypeAnimation
            sequence={[
              'FORMULA-1', 2000, // Pause for 2 seconds
              'RACING', 2000,
              'DATA', 2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{display: 'inline-block' }}
          /></div>
          {/* RACING, DATA */}
          {/* <div className='bottom-line'>At your Fingertips</div> */}
        </div>
      </div>
      {/* <div className='right-container'>
        <Image src={pilots} alt='landing-page-image' />
      </div> */}
    </motion.div>
  )
}

export default LandingPage