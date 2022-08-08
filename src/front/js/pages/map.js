import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import Mapcomp from "../component/mapcomp";
import Servicelist from "../component/servicelist";

export const Map = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center mt-5">
      <div className="row">
      <div className="col-sm-12 col-lg-7">
      <Mapcomp/>
        </div>
        <div className="col-sm-12 col-lg-5">
        <Servicelist/>
        </div>


      </div>

      
    </div>
  );
};
