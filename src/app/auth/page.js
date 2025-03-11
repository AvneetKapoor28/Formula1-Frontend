"use client";
import React, { useContext, useState } from "react";
import "./authpage.css";
import Image from "next/image";
import userIcon from "../../Assets/user-icon.svg";
import passwordIcon from "../../Assets/lock-icon.svg";
import emailIcon from "../../Assets/envelope-icon.svg";
import { AppContent } from "../Context/AppContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
    const router = useRouter();
    const [authState, setAuthState] = useState("signup"); // options: login, signup, forgotPassword
    const {setIsLoggedIn, getUserData} = useContext(AppContent);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async (e) => {
        try{
            e.preventDefault();

            axios.defaults.withCredentials = true;

            if(authState === "signup"){
                const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,{username, email, password})

                if(data.success){
                    setIsLoggedIn(true);
                    router.replace('/');
                    getUserData();
                    toast.success("Registered successfully")
                }
                else{
                    toast.error(data.message)
                }
            }
            else{
                const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,{email, password})

                if(data.success){
                    setIsLoggedIn(true);
                    router.replace('/');
                    getUserData();
                    toast.success("Logged in successfully")
                }
                else{
                    toast.error(data.message)
                }
            }
        }
        catch(error){
            toast.error("An error occurred. Please try again.")
        }
    }

    if (authState === "signup") {
        return (
            <div className="auth-page-container">
                <div className="login-block">
                    <h2>Sign Up</h2>
                    <form onSubmit={onSubmitHandler}>
                        <div className="input-field-with-image">
                            <Image src={userIcon} alt="User Icon" width={20} height={20} />
                            <input
                                onChange={e => setUsername(e.target.value)}
                                value={username}
                                type="text"
                                placeholder="Enter Username" />
                        </div>
                        <div className="input-field-with-image">
                            <Image src={emailIcon} alt="Email Icon" width={20} height={20} />
                            <input
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                type="text"
                                placeholder="Enter Email" />
                        </div>
                        <div className="input-field-with-image">
                            <Image src={passwordIcon} alt="Password Icon" width={20} height={20} />
                            <input
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Enter Password" />
                        </div>
                        {/* Forgot Password */}
                        {/* <p className="auth-links" onClick={() => setAuthState("forgotPassword")}>Forgot Password?</p> */}
                        <button type="submit">Sign Up</button>
                    </form>
                    <p className="auth-links" onClick={() => setAuthState("login")}>
                        Already have an account? <span style={{ textDecoration: 'underline' }}>Login</span>
                    </p>
                </div>
            </div>
        );
    }

    if (authState === "login") {
        return (
            <div className="auth-page-container">
                <div className="login-block">
                    <h2>Login</h2>
                    <form onSubmit={onSubmitHandler}>
                        <div className="input-field-with-image">
                            <Image src={emailIcon} alt="Email Icon" width={20} height={20} />
                            <input
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                type="text"
                                placeholder="Enter Email" />
                        </div>
                        <div className="input-field-with-image">
                            <Image src={passwordIcon} alt="Password Icon" width={20} height={20} />
                            <input onChange={e => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Enter Password" />
                        </div>
                        {/* Forgot Password */}
                        {/* <p className="auth-links" onClick={() => setAuthState("forgotPassword")}>Forgot Password?</p> */}
                        <button type="submit">Login</button>
                    </form>
                    <p className="auth-links" onClick={() => setAuthState("signup")}>
                        Don&apos;t have an account? <span style={{ textDecoration: 'underline' }}>Signup</span>
                    </p>
                </div>
            </div>
        )
    }
};

export default Page;
