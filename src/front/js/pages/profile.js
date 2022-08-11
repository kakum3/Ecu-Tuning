import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Mapcomp from "../component/mapcomp";
import Servicelist from "../component/servicelist";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container m-auto">
      <main class="m-auto mt-3 card">
        <div className="row">
        <div className="p-5 col-sm-12 col-lg-7">
         <h1>Perfil</h1>
        <hr/>
        <div class="input-group mb-3">
  <span class="input-group-text">Nombre</span>
  <input type="text" aria-label="First name" class="form-control"/>
  </div>
  <div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Subir"/>
</div>

         <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="inlineRadio1">
                Soy un Cliente
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Soy un Taller
              </label>
            </div>
          <Link className="btn btn-success" to="/details">
            Detalles mapa (Dev)
          </Link>
        </div>
        <div className="col-sm-12 col-lg-5">
          <Servicelist />
        </div>
        </div>
      </main>
    </div>
  );
};