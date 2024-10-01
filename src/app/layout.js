 
import "./globals.css";
 
 

// import "flowbite/dist/flowbite";

import Navbar from "@/components/navbar/Navbar";
import HeadInfos from "@/components/navbar/HeadInfos";
import NavbarTry from "@/components/navbar/NavbarTry";

 

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-gradient-to-r from-[#ede7da]  to-[#edd091]`}
      > 

        {/* HeadInfos component */}
        <HeadInfos />
        <div className="sticky top-0  z-50 max-w-6xl mx-auto  min-h-screen ">
          {/* <Navbar /> */}
          <NavbarTry />
          {children}
        </div> 
      </body>
    </html>
  );
}
