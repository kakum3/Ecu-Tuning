import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Map } from "./pages/map";
import { Taller } from "./pages/taller";
import { Profile } from "./pages/profile";
import { Contact } from "./pages/contact";
import { Restore } from "./pages/restore";
import { NewPassword } from "./pages/newPassword";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Alert } from "./component/alert";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  
  return (
    <>
       
          <ScrollToTop>
            <Navbar />
            <Alert />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Login />} path="/login" />
              <Route element={<Signup />} path="/signup" />
              <Route element={<Map />} path="/map" />
              <Route element={<Taller />} path="/taller/:id" />
              <Route element={<Profile />} path="/profile" />
              <Route element={<Contact />} path="/contact" />
              <Route element={<Restore />} path="/restore" />
              <Route element={<NewPassword />} path="/new/password/:token" />
              <Route element={<Home />} />
            </Routes>
            <Footer />
          </ScrollToTop>
           
        
     
    </>
  );
};
export default Layout;
