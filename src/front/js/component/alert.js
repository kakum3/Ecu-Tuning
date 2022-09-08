import React, { useContext, useEffect } from "react";
import { useAppContext } from "../index";

export const Alert = () => {
  const { store, actions, setStore } = useAppContext();
  return store.alert === null ? null : (
    <>
      <div className="alert-wrapper w-100 position-fixed over">
        <div
          className={
            "show mx-auto toast align-items-center text-bg-" +
            (JSON.stringify(store.alert).includes("Error")
              ? "warning"
              : "success")
          }
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">{store.alert}</div>
            <button
              onClick={() => setStore({ alert: null })}
              type="button"
              className="btn-close btn-close me-2 m-auto shadow-none"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};
