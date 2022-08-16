import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useLocation } from "react-router-dom";

// FAKE DB DATA
const svcesdb = [
  {
    name: "Tintado de lunas",
    desc: "Cambia el color de las lunas",
    value: true,
  },
  { name: "Body Kit", desc: "Ensancha tu coche", value: true },
];

export const Servicelist = () => {
  const { store, actions } = useContext(Context);
  const location = useLocation();

  const [services, setServices] = useState([
    { name: "", desc: "", value: true },
  ]);

  useEffect(() => {
    // do fetch from db and set
    setServices([{ name: "ECU", value: true }, ...svcesdb]);
  }, []);

  const handleCheckChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name;
    setServices(
      services.map((e) =>
        e.name === target.name ? { ...e, value: !e.value } : e
      )
    );
    console.log(services);
  };
  return (
    <>
      <h1 className="">Servicios</h1>
      <div className="list-group w-auto">
        <label className="list-group-item d-flex gap-3">
          <input
            className="form-check-input flex-shrink-0"
            type="checkbox"
            name="ECU"
            checked={services[0].value || false}
            onChange={handleCheckChange}
            value=""
          />
          <span className="form-checked-content w-100">
            <strong>
              <i className="fa-solid fa-microchip me-2"></i>ECU
            </strong>

            {location.pathname === "/map" && store.carSearch !== null ? (
              <small className="d-block text-muted mt-2">
                <em className="fs-5 text-success">{store.carSearch.model}</em>
                <br />

                <span className="fs-5 text-white badge bg-success rounded mx-1">
                  <i className="fa-solid fa-gauge"></i> +{store.carSearch.cv}CV
                </span>

                <span className="fs-5 text-white badge bg-success rounded mx-1">
                  <i className="fa-solid fa-gauge"></i> +{store.carSearch.nm}nm
                </span>

                <span className="fs-5 text-white badge bg-success rounded mx-1">
                  <i className="fa-solid fa-gas-pump"></i> -
                  {store.carSearch.fuel}%
                </span>
              </small>
            ) : null}

            <small className="d-block text-muted">
              <button
                className="btn btn-link btn-sm shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Ver más...
              </button>
              <div className="collapse" id="collapseExample">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Stage 1 & Stage 2 & Stage 3
                  </li>
                  <li className="list-group-item">Arranque en caliente</li>
                  <li className="list-group-item">A third item</li>
                  <li className="list-group-item">A fourth item</li>
                  <li className="list-group-item">And a fifth one</li>
                </ul>
              </div>
            </small>
          </span>
        </label>
        {services.map((e, i) =>
          e.name === "ECU" ? null : (
            <label key={i} className="list-group-item d-flex gap-3">
              <input
                className="form-check-input flex-shrink-0"
                type="checkbox"
                name={e.name || false}
                checked={e.value || false}
                onChange={handleCheckChange}
                value=""
              />
              <span className="form-checked-content">
                <strong>{e.name}</strong>
                <small className="d-block text-muted">{e.desc}</small>
              </span>
            </label>
          )
        )}
      </div>
    </>
  );
};
export default Servicelist;
