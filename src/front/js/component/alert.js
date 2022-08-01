import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Alert = () => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();
  const redir = () => navigate("/login", { replace: true });

  useEffect(() => {
    if (store.alert === "registered") redir();
  }, [store.alert]);

  return store.alert === null ? null : (
    <div className="alert alert-primary" role="alert">
      {store.alert}
    </div>
  );
};
