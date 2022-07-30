import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Protected = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getProtected(actions.getToken()).then((e) => {
      console.log(e);
    });
  }, []);
  return (
    <div className="text-center mt-5">
      {store.loggedIn ? "User logged in" : "Denied access"}
      <h1>Protected</h1>
    </div>
  );
};
