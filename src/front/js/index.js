//import react into the bundle
import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

// Luis newFlux
import useFlux from "./store/newFlux";
const AppContext = React.createContext();

const basename = process.env.BASENAME || "";

const Index = () => <AppContext.Provider value={useFlux()}><Layout /></AppContext.Provider>
//render your react application
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<BrowserRouter basename={basename}><Index/></BrowserRouter>);

export const useAppContext = () => useContext(AppContext);