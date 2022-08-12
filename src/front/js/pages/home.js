import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container m-auto">
      <div className="row py-3 text-center">
        <h1 className="mb-5 text-white">Comprueba tu coche</h1>
        <p className="position-absolute">{/* <img src={rigoImageUrl} /> */}</p>

        <select
          class="form-select form-select mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          class="form-select form-select mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <div class="col-md-6 mx-auto btn-group">
          <Link to="/map" class="btn btn-primary" type="button">
          <i class="fa-solid fa-gauge-high me-3"></i>
          Comprobar
          </Link>
          <Link to="/map" class="btn btn-secondary" type="button">
          <i class="fa-solid fa-car-on me-3"></i>
          Ver Talleres
          </Link>
        </div>
      </div>
    </div>
  );
};
