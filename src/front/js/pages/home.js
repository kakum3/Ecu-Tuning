import React, { useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../index";

export const Home = () => {
  const { store, actions, setStore } = useAppContext();
  const [marks, setMarks] = useState(["Alfalfa Rome", "BMW"]);
  const [models, setModels] = useState(null);
  const [years, setYears] = useState(null);
  const [engines, setEngines] = useState(null);

  const handleMarksChange = (e) => {
    if (e.value !== true) {
      //fetch and set the data (ejemplo ["A7"..etc])
      setModels(["A7", "A2"]);
    }
  };
  const handleModelsChange = (e) => {
    if (e.value !== true) {
      //fetch and set the data (ejemplo ["A7"..etc])
      setYears(["1998", "1999"]);
    }
  };
  const handleYearsChange = (e) => {
    if (e.value !== true) {
      //fetch and set the data (ejemplo ["A7"..etc])
      setEngines(["2 TDI", "3 TDOY"]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Error, not pay att to selected values
    const mark = e.target.mark !== undefined ? e.target.mark.value : true;
    const model = e.target.model !== undefined ? e.target.model.value : true;
    const years = e.target.years !== undefined ? e.target.years.value : true;
    const engine =
      e.target.engine !== undefined ? e.target.engine.value : true;

    if(!mark || !model || !years || !engine){
      console.log("Error submit, select all first")
    }else{
      antonioFetch({mark:mark, model:model, years:years, engine:engine})
    }
  };
  const antonioFetch = (datos) => {
      // datos que vienen = {mark:mark, model:model, years:years, engine:engine}

      //fetch y guardar estos datos de la api en store =>
      // setStore( { carSearch: { model: "Berlingo Turbo", cv: "30", nm: "50", fuel: "10" } } )
      
      console.log(datos)

  }

  return (
    <div className="container m-auto">
      <div className="row py-3 text-center">
        <h1 className="title-header f-bold mb-4 text-white t-shadow">
          ECU Tunning
        </h1>
        <h2 className="fs-5 mb-4 t-shadow-black text-white">
          Encuentra talleres tunning
        </h2>
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
