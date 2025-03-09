import { poppins } from "./fonts";
import "./globals.css";
import "./Components/Navbar/Navbar"
import NavbarWrapper from "./Components/NavbarWrapper/NavbarWrapper";
import { AppContextProvider } from "./Context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Formula-1 Dashboard",
  description: "A dashboard for Formula 1 data",
  icons:{
    icon:"/favicon.png"
  } 
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <AppContextProvider>
          <NavbarWrapper />
          <ToastContainer position="bottom-center"/>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
