import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Map } from "./pages/map";
import { Details } from "./pages/details";
import { Profile } from "./pages/profile";

import { Protected } from "./pages/protected";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Alert } from "./component/alert";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Alert />

                    <div className="container m-auto mt-5">
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Signup />} path="/signup" />

                        <Route element={<Map />} path="/map" />
                        <Route element={<Details />} path="/details" />
                        <Route element={<Profile />} path="/profile" />

                        <Route element={<Protected />} path="/protected" />

                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    </div>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </>
    );
};

export default injectContext(Layout);
