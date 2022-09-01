import React, { useContext, useEffect, useState } from "react";
import { useAppContext } from "../index";
import Servicelist from "../component/servicelist";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import "../../styles/taller.css";

import { number } from "prop-types";

export const Taller = () => {
  const { store, actions, setStore } = useAppContext();

  const { id } = useParams();
  const [taller, setTaller] = useState({});
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/taller/" + id)
      .then((r) => r.json())
      .then((data) => setTaller(data.taller));
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    actions.getTaller_id({
      asunto: e.target.asunto.value,
      telefon: e.target.telefon.value,
      fname: e.target.fname.value,
      taller_id: e.target.taller_id.value,
    });
  };

  return (
    <div className="container-fluid  m-auto mt-4 text-white border-0 ">
      <main className="bg-transparent ">
      <div className="row  ">
        <div className="col-sm-12 col-lg-5 ">
          <h1 className="logo text-center text-white mt-4  ">
            <span className="text-center text-white py-5 mb-3 t-shadow ">
            {taller.w_name}
            </span>
            
          </h1>

          

          <h6 className="address text-align-top text-center text-white py-2 pt-2">
            <i className="fas fa-map-marker-alt me-2"></i>
            {taller.w_address}
          </h6>
          <div className="text-center">
        {
          <img
            className="rounded shadow figure"
            src={
              "https://i.ibb.co/KNZ0Yx1/ecubk.png"
            }
            alt="Profile"
          />
        }
      </div>

        <div className="text-center">
          <Link
            className="btn btn-transparent bg-primary t-shadow text-align-top btn-align-top mt-5  mb-3 me-1 text-white shadow-sm  mb-5  "
            to="/map"
          >
         <i class="fa-sharp fa-solid fa-arrow-left"/>atras
          </Link>
          
          <button
            type="button"
            className="btn btn-success "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          ><i class="fa-sharp fa-solid fa-envelope me-2"></i>
            Mensaje Taller
          </button>
          </div>
          
          <div
            className="modal fade text-center text-primary rounded shadow"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-white card  shadow">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Nuevo Mensaje
                  </h5>
                </div>
                <div className="modal-body">
                  <form onSubmit={formSubmit}>
                    <div className="mb-3 mb-2 ">
                      <label
                        htmlFor="floatingInput "
                        className="col-form-label"
                      >
                        <i className="fa-brands fa-whatsapp me-1"></i>
                        Telefono
                      </label>
                      <input
                        defaultValue={""}
                        name="telefon"
                        type="tel"
                        className="form-control"
                        id="floatingInput"
                        placeholder="numero"
                      ></input>
                    </div>
                    <input name="taller_id" 
                     value={id} 
                     type="hidden" />
                    <div className="mb-3 mb-2 ">
                      <label
                        htmlFor="recipient-phone "
                        className="col-form-floating"
                      >
                        nombre
                      </label>
                      <input
                        defaultValue={""}
                        name="fName"
                        type="text"
                        className="form-control"
                        id="fName"
                        placeholder="nombre"
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className=" col-form-floating"
                      >
                        Asunto
                      </label>
                      <input
                        defaultValue={""}
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        name="asunto"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="message-text"
                        className="col-form-floating"
                      >
                        <i className="fa-solid fa-comment-dots me-1"></i>
                        Mensaje
                      </label>
                      <textarea
                        className="form-control "
                        id="message-text"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button type="submit" className="btn btn-success">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 p-5 overflow-auto  card rounded shadow m-auto color-dark text-dark">
         
          <h2>servicios</h2>
          <hr/>

          <Servicelist />
        </div>
      </div>
      </main>
    </div>
  );
};
