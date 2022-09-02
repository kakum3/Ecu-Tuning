import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useAppContext } from "../index";

export const Servicelist = ({is_disabled}) => {
  const { store, actions, setStore } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    if (store.all_services.length === 1) actions.getServices();
  }, [store.all_services]);

  const handleCheckChange = (e) => {
    const target = e.target;
    const name = target.name;
    const newState = store.sel_services.map((e) =>
      e.name === target.name ? { ...e, value: !e.value } : e
    );
    return setStore({ sel_services: newState });
  };
  return (
    <>
      {location.pathname === "/map" && store.carSearch !== null ? (
        <small className="d-block text-muted  text-center mb-4">
          <h5>
            ECU Stage 1:{" "}
            <em className="fs-5 text-success mb-2">{store.carSearch.model}</em>
          </h5>

          <span className="fs-5 text-white badge bg-success rounded mx-1">
            <i className="fa-solid fa-gauge"></i> +{store.carSearch.cv}CV
          </span>

          <span className="fs-5 text-white badge bg-success rounded mx-1">
            <i className="fa-solid fa-gauge"></i> +{store.carSearch.nm}nm
          </span>

          <span className="fs-5 text-white badge bg-success rounded mx-1">
            <i className="fa-solid fa-gas-pump"></i> -{store.carSearch.fuel}%
          </span>
        </small>
      ) : null}

      <div className="accordion" id="accordionExample">
        {store.all_services[0] === undefined
          ? null
          : store.all_services.map((e, i) =>
              e.name !== "ECU" ? (
                <div key={i} className="accordion-item">
                  <label className="accordion-header d-flex" id="headingOne">
                    <label className="m-auto ms-4 w-75 list-group-item d-flex gap-3">
                      <input
                        className="form-check-input flex-shrink-0"
                        type="checkbox"
                        name={e.name}
                        disabled={is_disabled}
                        checked={
                          store.sel_services[i] === undefined
                            ? true
                            : store.sel_services[i].value
                        }
                        onChange={handleCheckChange}
                        value=""
                      />
                      <span className="form-checked-content">
                        <strong>{e.name}</strong>
                      </span>
                    </label>
                    <button
                      className="w-25 accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#collapse" + i}
                      aria-expanded="false"
                      aria-controls={"collapse" + i}
                    ></button>
                  </label>
                  <div
                    id={"collapse" + i}
                    className="accordion-collapse collapse"
                    aria-labelledby={"heading" + i}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="border-top">
                      <small className="list-group list-group-flush">
                        {" "}
                        <li className="list-group-item">{e.desc}</li>
                      </small>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={i} className="accordion-item">
                  <label className="accordion-header d-flex" id="headingOne">
                    <label className="m-auto ms-4 w-75 list-group-item d-flex gap-3">
                      <input
                        className="form-check-input flex-shrink-0"
                        type="checkbox"
                        name={e.name}
                        disabled={is_disabled}
                        checked={
                          store.sel_services[i] === undefined
                            ? true
                            : store.sel_services[i].value
                        }
                        onChange={handleCheckChange}
                        value=""
                      />
                      <span className="form-checked-content">
                        <strong>
                          <i className="fa-solid fa-microchip me-2"></i>ECU
                        </strong>
                      </span>
                    </label>
                    <button
                      className="w-25 accordion-button collapsed shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#collapse" + i}
                      aria-expanded="false"
                      aria-controls={"collapse" + i}
                    >
                      <i className="ms-auto me-2 fa-solid fa-question"></i>
                    </button>
                  </label>
                  <div
                    id={"collapse" + i}
                    className="accordion-collapse collapse"
                    aria-labelledby={"heading" + i}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="border-top">
                      <small className="list-group list-group-flush">
                        <li className="list-group-item">
                          Stage 1 & Stage 2 & Stage 3
                        </li>
                        <li className="list-group-item">
                          Arranque en caliente / frío
                        </li>
                        <li className="list-group-item">
                          DPF, FAP, EGR, ADBLUE, SCR, GPF, OPF
                        </li>
                        <li className="list-group-item">DTC Selectivo</li>
                        <li className="list-group-item">
                          Telecarga Software Original
                        </li>
                        <li className="list-group-item">
                          Limitador de Velocidad
                        </li>
                        <li className="list-group-item">
                          Catalizador, Lambda, O2
                        </li>
                        <li className="list-group-item">Desactivar FLAPS</li>
                        <li className="list-group-item">HardCut</li>
                        <li className="list-group-item">Pop & Corn</li>

                        <li className="list-group-item">Pops & Bangs</li>
                      </small>
                    </div>
                  </div>
                </div>
              )
            )}
      </div>
    </>
  );
};
export default Servicelist;
