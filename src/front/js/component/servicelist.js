import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Servicelist = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
      !Lista de servicios

    </div>
  );
};
export default Servicelist;