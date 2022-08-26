import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../index";

export const Home = () => {
  const { store, actions, setState } = useAppContext();
  const [marks, setMarks] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [engines, setEngines] = useState([]);



  const handleMarksChange = (e) => {

    if (e.value !== true) {
      //fetch and set the data (ejemplo ["A7"..etc])
      // setModels(["A7", "A2"]);

    }
  };
  useEffect(() => {
    const url = "https://api.carecusoft.com/de/v1/tuning/brands/20?key=testSA65D46ASD4AS8F4AS6F4A68"
    fetch(url).then(r => r.json()).then(data => {
      console.log(data)
      setMarks(data)
    })
  }, []);


  const handleModelsChange = (e) => {
    if (e.value !== true) {
      //fetch and set the data (ejemplo ["A7"..etc])
      // setYears(["1998", "1999"]);

    }
  };

  useEffect(() => {
    const url = "https://api.carecusoft.com/de/v1/tuning/stages/20?key=testSA65D46ASD4AS8F4AS6F4A68"
    fetch(url).then(r => r.json()).then(data => {
      console.log(data)
      setModels(data)

    })
  }, []);

  const handleYearsChange = (e) => {
    if (e.value !== true) {
      //fetch and set the data (ejemplo ["A7"..etc])
      // setEngines(["2 TDI", "3 TDOY"]);

    }
  };

  useEffect(() => {
    const url = "https://api.carecusoft.com/de/v1/tuning/brands/20?key=testSA65D46ASD4AS8F4AS6F4A68"
    fetch(url).then(r => r.json()).then(data => {
      console.log(data)
      setYears(data)

    })
  }, []);

  const handleEnginersChange = (e) => {
    if (e.value !== true) {
      //fetch and set the data (ejemplo ["A7"..etc])
      // setEngines(["2 TDI", "3 TDOY"]);

    }
  };

  useEffect(() => {
    const url = "https://api.carecusoft.com/de/v1/tuning/stages/20?key=testSA65D46ASD4AS8F4AS6F4A68"
    fetch(url).then(r => r.json()).then(data => {
      console.log(data)
      setEngines(data)

    })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Error, not pay att to selected values
    const mark = e.target.mark !== undefined ? e.target.mark.value : true;
    const model = e.target.model !== undefined ? e.target.model.value : true;
    const years = e.target.years !== undefined ? e.target.years.value : true;
    const engine =
      e.target.engine !== undefined ? e.target.engine.value : true;

    if (!mark || !model || !years || !engine) {
      console.log("Error submit, select all first")
    } else {
      antonioFetch({ mark: mark, model: model, years: years, engine: engine })
    }
  };
  const antonioFetch = (datos) => {

    // try {
    //   // fetching data from the backend
    //   const url = "https://api.carecusoft.com/anplrjpjtdpjrh.html/v1/chiptuning/?key= testSA65D46ASD4AS8F4AS6F4A68"
    //   const resp = await fetch(url + "/home", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: "Bearer " + token,
    //     },
    //   });
    //   const data = await resp.json();
    //   console.log(data)

    //   setStore({ message: data.message });
    // don't forget to return something, that is how the async resolves
    return data;
    //   } catch (error) {
    //     console.log("Error loading message from backend", error);
    //   }
    // },
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

            {marks.length === null ? null : (
              <select
                className="form-select form-select mb-3 shadow"
                aria-label=".form-select-lg example"
                onChange={handleMarksChange}
                name="mark"
              >
                <option value={true}>Marca</option>
                {marks.map((e) => (
                  <option key={e.id} value={e.var_title}>
                    {e.var_title}
                  </option>
                ))}
              </select>
            )}

            {models.length === null ? null : (
              <select
                className="form-select form-select mb-3 shadow"
                aria-label=".form-select-lg example"
                onChange={handleModelsChange}
                name="model"
              >
                <option value={true}>Modelo</option>
                {models.map((e) => (
                  <option key={e.id} value={e.seo_title}>
                    {e.seo_title}
                  </option>
                ))}
              </select>
            )}

            {years.length === 0 ? null : (
              <select
                className="form-select form-select mb-3 shadow"
                aria-label=".form-select-lg example"
                onChange={handleYearsChange}
                name="years"
              >
                <option value={true}>Años</option>
                {years.map((e) => (
                  <option key={e.id} value={e.models_count}>
                    {e.models_count}
                  </option>
                ))}
              </select>
            )}

            {engines.length === 0 ? null : (
              <select
                className="form-select form-select mb-3 shadow"
                aria-label=".form-select-lg example"
                name="engine"
              >
                <option value={true}>Motor</option>
                {engines.map((e) => (
                  <option key={e.id / 1} value={e.seo_title}>
                    {e.seo_title}
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
        <div className="px-4 py-5 my-5 text-center">
          {/* <img className="d-block mx-auto mb-4" src="https://prochips.cl/wp-content/uploads/2022/01/CHIPVECTOR.png" alt="" width="72" height="57"> */}
          <i className="fa-solid title-header text-white mb-5 t-shadow fa-microchip"></i>
          {/* </img> */}
          <h1 className="fs-4 mb-4 t-shadow-black text-white">Red lider en servicios de reprogramación y mecanica tunning</h1>
          <hr></hr>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 t-shadow-black text-white">Porque sabemos lo importante que es su coche, disponemos de la más amplia red de talleres tunning lideres en tecnologías y profesionales mejor cualificados para tu coche.</p>
            {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                  <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                </div> */}
          </div>
        </div>

        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <i className="fa-solid fs-1 title-header text-white mb-5 t-shadow fa-desktop"></i>
            {/* <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em"> use </svg>
            </div> */}
            <h2 className="fs-4 mb-4 t-shadow-black text-white">Reprogramacion y Reparación de Centralitas</h2>
            <p className="lead fs-5 mb-4 t-shadow-black text-white">Mediante una correcta optimización del software de tu vehículo podemos conseguir aumentar la potencia y par, reducir elconsumo de combustible, optimizar sistemas EGR y deslimitaciones de todo tipo..</p>
            {/* <a href="#" class="icon-link d-inline-flex align-items-center">
              Call to action
              <svg class="bi" width="1em" height="1em"> use </svg>
            </a> */}
          </div>
          <div class="feature col">
            <i className="fa-solid fs-1 title-header text-white mb-5 t-shadow fa-car-burst"></i>
            {/* <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em"> use </svg>
            </div> */}
            <h2 className="fs-4 mb-4 t-shadow-black text-white">Tunning</h2>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <p className="lead fs-5 mb-4 t-shadow-black text-white">Todo tipo de preparación tunning como tintado de lunas, taloneras, colas de escape, equipos de sonido, ilumación led, pantallas digitales...</p>
            {/* <a href="#" class="icon-link d-inline-flex align-items-center">
              Call to action
              <svg class="bi" width="1em" height="1em"> use </svg>
            </a> */}
          </div>
          <div class="feature col">
            <i className="fa-solid fs-1 title-header text-white mb-5 t-shadow fa-screwdriver-wrench"></i>
            {/* <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em"> use </svg>
            </div> */}
            <h2 className="fs-4 mb-4 t-shadow-black text-white">Mecanica Tunning</h2>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <p className="lead fs-5 mb-4 t-shadow-black text-white">Modificaciones de escapes, admisión, turbos y mecanica en general para sacar el máximo rendimiento a tu vehículo</p>
            {/* <a href="#" class="icon-link d-inline-flex align-items-center">
              Call to action
              <svg class="bi" width="1em" height="1em"> use </svg>
            </a> */}
          </div>

        </div>









        {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <i className="fa-solid fs-3 title-header text-white mb-5 t-shadow fa-desktop"></i>
            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"> link </svg>
            <div>
              <h4 className="fs-5 mb-4 t-shadow-black text-white">Reprogramacion y Reparación de Centralitas</h4>
              <p>Mediante una correcta optimización del software de tu vehículo podemos conseguir aumentar la potencia y par, reducir elconsumo de combustible, optimizar sistemas EGR y deslimitaciones de todo tipo..</p>
            </div>
          </div>






          <div className="col d-flex align-items-start">
            <i className="fa-solid fs-2 title-header text-white t-shadow fa-chart-line"></i>
            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"> link </svg>
            <div>
              <h4 className="fs-5 mb-4 t-shadow-black text-white">Banco de Potencia</h4>
              <p>Disposición de banco de potencia de ultima generación para mediciones con sistemas de tracción ultima generación. Podrá comprobar el estado de su motor y realizar simulaciones y pruebas de potencia.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"> link </svg>
            <div>
              <h4 className="fs-5 mb-4 t-shadow-black text-white">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"> link </svg>
            <div>
              <h4 className="fs-5 mb-4 t-shadow-black text-white">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"> link </svg>
            <div>
              <h4 className="fs-5 mb-4 t-shadow-black text-white">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"> link </svg>
            <div>
              <h4 className="fs-5 mb-4 t-shadow-black text-white">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"> link </svg>
            <div>
              <h4 className="fs-5 mb-4 t-shadow-black text-white">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"> link </svg>
            <div>
              <h4 className="fs-5 mb-4 t-shadow-black text-white">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
        </div> */}

      </div>

    </div >
  );
};
