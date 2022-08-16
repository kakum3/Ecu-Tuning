import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Mapcomp from "../component/mapcomp";
import Servicelist from "../component/servicelist";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container m-auto">
      <main className="m-auto col-12 col-md-8 col-lg-6 card p-5 rounded shadow">
        <div className="row">
          <h1>Perfil</h1>
          <hr />
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              @example.com
            </span>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              checked
            />
            <label className="form-check-label" for="inlineRadio1">
              Soy un Cliente
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" for="inlineRadio2">
              Soy un Taller
            </label>
          </div>
        </div>
      </main>
    </div>
  );
};
