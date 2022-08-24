import React, { useContext, useEffect } from "react";
import { useAppContext } from "../index";

export const Alert = () => {
  const { store, actions, setStore } = useAppContext();
  return store.alert === null ? null : (
    <>
      <div className="w-100 position-fixed mt-5 px-4 over">
        <div
          className="mx-auto toast align-items-center text-bg-primary border-0 show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">{store.alert}</div>
            <button
              onClick={() => setStore({ alert: null })}
              type="button"
              className="btn-close btn-close-white me-2 m-auto shadow-none"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};
