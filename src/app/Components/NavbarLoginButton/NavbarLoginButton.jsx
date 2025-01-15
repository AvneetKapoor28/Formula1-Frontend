import React from "react";
import "./NavbarLoginButton.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { doNavbarLogin } from "@/app/actions";

const NavbarLoginButton = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Display a loading state while session is being checked
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // If unauthenticated, show login option
  if (status === "unauthenticated") {
    return (
      <div className="navbar-login-button" onClick={() => doNavbarLogin()}>
        Login
      </div>
    );
  }

  // If authenticated, show welcome message
  return (
    <div className="navbar-login-button">
      {`${session?.user?.name}`}
    </div>
  );
};

export default NavbarLoginButton;
