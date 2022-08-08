import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import Mapcomp from "../component/mapcomp";
import Servicelist from "../component/servicelist";

export const Map = () => {
  const { store, actions } = useContext(Context);
  
  return (
    <div className="text-center mt-5">
      <h1>Map!!</h1>

        <Mapcomp/>

        <Servicelist/>

    </div>
  );
};