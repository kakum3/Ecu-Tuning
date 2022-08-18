import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Servicelist from "../component/servicelist";
import { Link } from "react-router-dom";


import { number } from "prop-types";

export const Details = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container  m-auto text-white border-0 ">
      <div className="row py-3 ">
        <div className="col-sm-12 col-lg-5 ">
          <h1 className="logo text-white mt-4  ">
            <span className="tittle taller text-white py-5 mb-3 t-shadow  rounded ">
              Ecu
            </span>
            <span className=" tittle nombreTaller text-success bg-white  p-2 t-shadow mb-4 rounded">
              Tunning
            </span>
          </h1>
          
            <h4 className="tittle mt-4 text-align-top ">Talleres Paco</h4>
           
            <h6 className="address text-align-top "><i className="fas fa-map-marker-alt "></i> calle Baena 2</h6>  
           
            <Link className="btn btn-dark text-align-top btn-align-top mt-5  mb-3 me-1 text-white shadow-sm p-3 mb-5  rounded" to="/map">
            <i class="fa-solid fa-circle-left"></i> atras
            </Link>

      
          <button
            type="button"
            className="btn btn-success mt-5  mb-3 text-white shadow-sm p-3 mb-5  rounded text-decoration-underline "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            Mensaje Taller
          </button>
          <div
            className="modal fade text-center text-success"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-white card rounded shadow">
                <div className="modal-header">
                  <h5 className="modal-title " id="exampleModalLabel">
                    Nuevo Mensaje
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3 mb-2 ">
                      <label for="recipient-phone " className="col-form-label">
                        <i className="fa-brands fa-whatsapp me-1"></i>
                        Telefono
                      </label>
                      <input
                        type="tel-"
                        className="form-control"
                        id="phone"
                        placeholder=""
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label for="recipient-name" className="col-form-label">
                        Asunto
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="message-text" className="col-form-label">
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
                  <button type="button" className="btn btn-success">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 card rounded shadow m-auto color-dark text-dark">
          <Servicelist />
        </div>
      </div>
    </div>
  );
};
