import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../index";
import { useNavigate, useLocation } from "react-router-dom";

import LogoWhite from "../svgs/logoWhite";
export const Home = () => {
  const { store, actions, setStore } = useAppContext();
  const [loadmarks, setLoadMarks] = useState([]);
  const [marks, setMarks] = useState();
  const [loadmodels, setLoadModels] = useState([]);
  const [models, setModels] = useState();
  const [loadyears, setLoadYears] = useState([]);
  const [years, setYears] = useState();
  const [loadengines, setLoadEngines] = useState([]);
  const [engines, setEngines] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const url =
      "https://api.carecusoft.com/de/v1/tuning/brands/20?key=testSA65D46ASD4AS8F4AS6F4A68";
    fetch(url, {
      mode: "cors",
    })
      .then((r) => r.json())
      .then((data) => {
        setLoadMarks(data);
        setLoading(false);
      });
  }, []);

  const handleMarksChange = (e) => {
    setMarks(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    const url = `https://api.carecusoft.com/anplrjpjtdpjrh.html/v1/tuning/models/${marks}?key=testSA65D46ASD4AS8F4AS6F4A68`;
    fetch(url, {
      mode: "cors",
    })
      .then((r) => r.json())
      .then((data) => {
        setLoadModels(data);
        setLoading(false);
      });
  }, [marks]);

  const handleModelsChange = (e) => {
    setModels(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    const url = `https://api.carecusoft.com/es/v1/tuning/years/${models}?key=testSA65D46ASD4AS8F4AS6F4A68`;
    fetch(url, {
      mode: "cors",
    })
      .then((r) => r.json())
      .then((data) => {
        setLoadYears(data);
        setLoading(false);
      });
  }, [models]);

  const handleYearsChange = (e) => {
    setYears(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    const url = `https://api.carecusoft.com/anplrjpjtdpjrh.html/v1/tuning/engines/${years}?key=testSA65D46ASD4AS8F4AS6F4A68`;
    fetch(url, {
      mode: "cors",
    })
      .then((r) => r.json())
      .then((data) => {
        setLoadEngines(data);
        setLoading(false);
      });
  }, [years]);

  const handleEnginesChange = (e) => {
    setEngines(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mark = e.target.mark !== undefined ? e.target.mark.value : false;
    const model = e.target.model !== undefined ? e.target.model.value : false;
    const years = e.target.years !== undefined ? e.target.years.value : false;
    const engine =
      e.target.engine !== undefined ? e.target.engine.value : false;

    if (!mark || !model || !years || !engine) {
      setStore({ alert: "Error, seleccione correctamente todos los campos" });
    } else {
      antonioFetch({
        marks: mark,
        models: model,
        years: years,
        engines: engine,
      });
    }
  };
  const antonioFetch = (datos) => {
    setLoading(true);
    const url = `https://api.carecusoft.com/anplrjpjtdpjrh.html/v1/chiptuning/${datos.marks}/${datos.models}/${datos.years}/${datos.engines}?key=testSA65D46ASD4AS8F4AS6F4A68`;
    fetch(url, {
      mode: "cors",
    })
      .then((r) => r.json())
      .then((data) => {
        setStore({
          carSearch: {
            model: data[1].seo_title,
            cv: data[1].int_hp_diff,
            nm: data[1].int_nm_diff,
            fuel: data[1].int_eco,
          },
        });
        setLoading(false);
        navigate("/map", { replace: true });
      });
  };

  return (
    <main className="container">
      <div className="row text-center">
        <span className="img-fluid" onClick={()=>(actions.goMap())}>
          <LogoWhite className="logo-home" />
        </span>
        <h1 className="title-header f-bold mb-4 text-white t-shadow">
          ECU Tuning
        </h1>
        <h3 className="t-shadow-black text-white">Encuentra talleres tuning</h3>

        <div className="m-auto col-12 col-md-8 col-lg-6 p-5">
          <h6 className="mb-3 t-shadow-black text-white">
            BUSCA EL MODELO DE TU COCHE:
          </h6>
          <form onSubmit={handleSubmit} id="form">
            {loadmarks && loadmarks.length === 0 ? null : (
              <select
                className="form-select form-select mb-3 shadow"
                aria-label=".form-select-lg example"
                onChange={(e) => handleMarksChange(e)}
                name="mark"
              >
                <option value={true}>Marca</option>
                {loadmarks &&
                  loadmarks.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.var_title}
                    </option>
                  ))}
              </select>
            )}

            {loadmodels && loadmodels.length === 0 ? null : (
              <select
                className="form-select form-select mb-3 shadow"
                aria-label=".form-select-lg example"
                onChange={(e) => handleModelsChange(e)}
                name="model"
              >
                <option value={true}>Modelo</option>
                {loadmodels &&
                  loadmodels.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.var_alias}
                    </option>
                  ))}
              </select>
            )}

            {loadyears && loadyears.length === 0 ? null : (
              <select
                className="form-select form-select mb-3 shadow"
                aria-label=".form-select-lg example"
                onChange={(e) => handleYearsChange(e)}
                name="years"
              >
                <option value={true}>Años</option>
                {loadyears &&
                  loadyears.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.var_title}
                    </option>
                  ))}
              </select>
            )}

            {loadengines && loadengines.length === 0 ? null : (
              <select
                className="form-select form-select mb-3 shadow"
                aria-label=".form-select-lg example"
                onChange={(e) => handleEnginesChange(e)}
                name="engine"
              >
                <option value={true}>Motor</option>
                {loadengines &&
                  loadengines.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.var_alias}
                    </option>
                  ))}
              </select>
            )}
            {!loading ? null : (
              <div className="w-100">
                {" "}
                <div
                  className="text-success spinner-border spinner-border-sm"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
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
        <div className="px-4 py-5 text-center">
          <i className="logo-nav fa-solid title-header text-white my-5 t-shadow fa-car-on"></i>

          <h1 className="m-auto fs-3 mb-4 t-shadow-black text-white">
            Red líder en servicios tuning
          </h1>

          <div className="col-lg-6 mx-auto">
            <p className="home-shadow p-5 lead mb-4 t-shadow-black text-white">
              Porque sabemos lo importante que es tu coche, disponemos de la más
              amplia red de talleres tuning lideres en tecnologías con los
              profesionales mejor cualificados.
            </p>
          </div>
        </div>

        <div className="row g-4 py-5 row-eq-heights row-cols-1 row-cols-lg-3">
          <div className=" feature col">
            <div className="home-shadow m-3 h-100">
              <i className="fa-solid logo-nav title-header text-white my-5 t-shadow fa-microchip"></i>

              <h2 className="fs-4 mb-4 t-shadow-black text-white">
                <hr />
                Reprogramación ECU
                <hr />
              </h2>
              <p className=" p-5 lead fs-5 mb-4 t-shadow-black text-white">
                Optimización del software de tu vehículo para conseguir aumentar
                la potencia y par, reducir el consumo de combustible, optimizar
                sistemas EGR y deslimitaciones de todo tipo.
              </p>
            </div>
          </div>

          <div className=" feature col">
            <div className="home-shadow m-3 h-100">
              <i className="fa-solid logo-nav title-header text-white my-5 t-shadow fa-screwdriver-wrench"></i>

              <h2 className="fs-4 mb-4 t-shadow-black text-white">
                <hr />
                Mecánica Tuning
                <hr />
              </h2>
              <p className=" p-5 lead fs-5 mb-4 t-shadow-black text-white">
                Modificaciones de tramos y colas de escapes, admisión, turbos,
                intercooler, filtros de alto rendimiento y mecanica en general
                para sacar el máximo rendimiento a tu vehículo.
              </p>
            </div>
          </div>
          <div className=" feature col">
            <div className="home-shadow m-3 h-100">
              <i className="logo-nav fa-solid title-header text-white my-5 t-shadow fa-car-burst"></i>

              <h2 className=" fs-4 mb-4 t-shadow-black text-white">
                <hr />
                Accesorios Tuning
                <hr />
              </h2>
              <p className=" p-5 lead fs-5 mb-4 t-shadow-black text-white">
                Todo tipo de preparación tuning como tintado de lunas, llantas,
                alerones, pitura y vinilos, taloneras, equipos de sonido,
                ilumación led, pantallas digitales y mucho más.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
