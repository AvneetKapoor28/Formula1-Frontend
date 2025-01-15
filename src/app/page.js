'use client';

import React, { useEffect } from 'react';
import { lexend_deca } from './fonts';
import Image from 'next/image'; // Correct import for Next.js Image
import googleIcon from '../Assets/google-icon.png'; // Correct image import
import './landingPage.css';
import { TypeAnimation } from 'react-type-animation';
import { doSocialLogin } from './actions';

const LandingPage = () => {
  useEffect(() => {
    document.body.classList.add('landing-page'); // Unique background for the landing page
    return () => {
      document.body.classList.remove('landing-page');
    };
  }, []); // Add the empty dependency array to avoid re-runs

  return (
    <div className="landing">
      <div className="left-container">
        <div className="lines-container">
          <div className="top-line">Discover</div>
          <div className={`middle-line ${lexend_deca.className}`}>
            <TypeAnimation
              sequence={['FORMULA-1', 2000, 'RACING', 2000, 'DATA', 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="login-form-container">
          <form action={doSocialLogin}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <button id='login-button' type="submit">Login</button>

            <button className="google-sign-in" type='submit' name='action' value='google'>
              <Image src={googleIcon} alt="Google Logo" width={30} />
              <p>
                Sign in with Google
              </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
