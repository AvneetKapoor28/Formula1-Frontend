"use client";

import React from "react";
import Navbar from "../Navbar/Navbar";
import { usePathname } from "next/navigation";

const NavbarWrapper = () => {
    const pathname = usePathname();
    const hideNavbarRoutes = ["/auth"];

    return hideNavbarRoutes.includes(pathname) ? null : <Navbar />;
};

export default NavbarWrapper;
