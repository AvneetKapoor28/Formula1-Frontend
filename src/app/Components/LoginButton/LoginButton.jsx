import { AppContent } from "@/app/Context/AppContext";
import './LoginButton.css'
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const LoginButton = () => {
  const { userDetails, isLoggedIn } = useContext(AppContent);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try{
        const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,{}, {withCredentials:true});
        if(data.success){
            window.location.reload();
        }
    }
    catch(error){
        toast.error("An error occured while logging out. Please try again.")
    }
  }
  let firstName = "";
  if(isLoggedIn && userDetails){
    firstName = userDetails.username.split(" ")[0]
  }

  if (isLoggedIn) {
    return (
      <div>
        <div
          className="login-button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {firstName}
        </div>
        {/* Dropdown menu */}
        {dropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={handleLogout} >Logout</button>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <Link href={"/auth"}>
        <div className="login-button">Login</div>
      </Link>
    );
  }
};

export default LoginButton;
