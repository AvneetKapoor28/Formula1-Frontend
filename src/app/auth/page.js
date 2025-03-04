"use client";
import React, { useState } from "react";
import "./authpage.css";
import Image from "next/image";

// Correct image imports
import userIcon from "../../Assets/user-icon.svg";
import passwordIcon from "../../Assets/lock-icon.svg";
import emailIcon from "../../Assets/envelope-icon.svg";

const Page = () => {
    const [authState, setAuthState] = useState("signup"); // options: login, signup, forgotPassword

    if (authState === "signup") {
        return (
            <div className="auth-page-container">
                <div className="login-block">
                    <h2>Sign Up</h2>
                    <form>
                        <div className="input-field-with-image">
                            <Image src={userIcon} alt="User Icon" width={20} height={20} />
                            <input type="text" placeholder="Enter Username" />
                        </div>
                        <div className="input-field-with-image">
                            <Image src={emailIcon} alt="Email Icon" width={20} height={20} />
                            <input type="text" placeholder="Enter Email" />
                        </div>
                        <div className="input-field-with-image">
                            <Image src={passwordIcon} alt="Password Icon" width={20} height={20} />
                            <input type="password" placeholder="Enter Password" />
                        </div>
                        {/* Forgot Password */}
                        <p className="auth-links" onClick={() => setAuthState("forgotPassword")}>Forgot Password?</p>
                        <button type="submit">Sign Up</button>
                    </form>
                    <p className="auth-links" onClick={() => setAuthState("login")}>Already have an account? <span style={{ textDecoration: 'underline' }}>Login</span></p>
                </div>
            </div>
        );
    }
};

export default Page;
