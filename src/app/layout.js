import { poppins } from "./fonts";
import "./globals.css";
import "./Components/Navbar/Navbar"
import NavbarWrapper from "./Components/NavbarWrapper/NavbarWrapper";

export const metadata = {
  title: "Formula-1 Dashboard",
  description: "A dashboard for Formula 1 data",
  image: "/icon.png",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
