import { AppContent } from "@/app/Context/AppContext";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import axios from "axios";

const LoginButton = () => {
  const { userDetails, isLoggedIn } = useContext(AppContent);

  if (userDetails) {
    console.log(userDetails.username);1

    

    return (
        <div className="login-button">{userDetails.username}</div>
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
