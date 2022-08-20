import React, { useContext, useEffect } from "react";
import { useAppContext } from "../index";

export const Alert = () => {
  const { store, actions, setState } = useAppContext();

  return store.alert === null ? null : (
    <div className="alert alert-primary" role="alert">
      {store.alert}
    </div>
  );
};
