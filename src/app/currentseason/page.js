'use client'
import React from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LogoutButton from '../Components/LogoutButton/LogoutButton';


const CurrentSeasonPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect unauthenticated users to the sign-in page
  React.useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/"); // Adjust the path to your sign-in page
    }
  }, [status, router]);

  // Display a loading state while session is being checked
  if (status === "loading") {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <p>CurrentSeasonPage</p>

    <h1>Welcome, {session?.user?.name}!</h1>
    <LogoutButton />
    </div>
  )
}

export default CurrentSeasonPage