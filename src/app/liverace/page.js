'use client'
import React from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LiveRacePage = () => {
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
    <div>LiveRacePage</div>
  )
}

export default LiveRacePage