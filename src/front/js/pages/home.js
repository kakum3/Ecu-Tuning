import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const [marks, setMarks] = useState(["Alfalfa Rome", "BMW"]);
  const [models, setModels] = useState(null);
  const [years, setYears] = useState(null);
  const [engines, setEngines] = useState(null);

  const handleMarksChange = (e) => {
    if (e.value !== true) {
      setModels(["A7", "A2"]);
      console.log("Fetch and show next");
    }
  };
  const handleModelsChange = (e) => {
    if (e.value !== true) {
      setYears(["1998", "1999"]);
      console.log("Fetch and show next");
    }
  };
  const handleYearsChange = (e) => {
    if (e.value !== true) {
      setEngines(["2 TDI", "3 TDOY"]);
      console.log("Fetch and show next");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const mark = e.target.mark.value;
    const model = e.target.model !== undefined ? e.target.model.value : false;
    const years = e.target.years !== undefined ? e.target.years.value : false;
    const engine =
      e.target.engine !== undefined ? e.target.engine.value : false;

    !model || !years || !engine
      ? console.log("Error submit, select all first")
      : console.log("Form pass, next to carAPI and get results to store");
  };

  return (
    <div className="container m-auto">
      <div className="row py-3 text-center">
        <h1 className="title-header f-bold mb-4 text-white t-shadow">ECU Tunning</h1>
        <h2 className="fs-5 mb-4 t-shadow-black text-white">
          Encuentra talleres tunning
        </h2>
        <p className="position-absolute">{/* <img src={rigoImageUrl} /> */}</p>

        <div className="m-auto col-12 col-md-7 col-lg-5 p-5">
          <form onSubmit={handleSubmit} id="form">
            <select
              className="form-select form-select mb-3 shadow"
              aria-label=".form-select-lg example"
              onChange={handleMarksChange}
              name="mark"
            >
              <option value={true}>Marca</option>
              {marks.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </select>

            {models === null ? null : (
              <select
                className="form-select form-select mb-3 shadow"
                aria-label=".form-select-lg example"
                onChange={handleModelsChange}
                name="model"
              >
                <option value={true}>Modelo</option>
                {models.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            )}

            {years === null ? null : (
              <select
                className="form-select form-select mb-3 shadow"
                aria-label=".form-select-lg example"
                onChange={handleYearsChange}
                name="years"
              >
                <option value={true}>Años</option>
                {years.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            )}

            {engines === null ? null : (
              <select
                className="form-select form-select mb-3 shadow"
                aria-label=".form-select-lg example"
                name="engine"
              >
                <option value={true}>Motor</option>
                {engines.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            )}

            <div className="mx-auto btn-group mt-3 shadow">
              <button type="submit" value="Submit" className="btn btn-success">
                <i className="fa-solid fa-microchip me-3"></i>
                Comprobar
              </button>
              <Link to="/map" className="btn btn-secondary" type="button">
                <i className="fa-solid fa-car-on me-3"></i>
                Ver Talleres
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
