import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Servicelist from "../component/servicelist";
import { number } from "prop-types";

export const Details = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container card m-auto bg-transparent text-white border-0">
      <div className="row py-3 ">
        <div className="col-sm-12 col-lg-5 ">
          <h1 className="logo text-white  ">
            <span className="taller text-white p-2 mb-3  rounded ">
              Search{" "}
            </span>
            <span className="nombreTaller text-success shadow-sm p-3 mb-5 bg-dark rounded">
              Tunning
            </span>
          </h1>
          <p className="text mt-3"><i className="fas fa-map-marker-alt"></i> Baker Street 2,Córdoba</p>
          <button
            type="button"
            className="btn btn-dark mt-5 mx-3  text-success shadow-sm p-3 mb-5  rounded text-decoration-underline"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            Message Taller
          </button>
          <div
            className="modal fade text-center text-success"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered mt-5 ">
              <div className="modal-content bg-dark">
              <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
                <div className="modal-body">
                  <form>
                  <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Asunto:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
                    <div className="mb-3 mb-2 ">
                      <label for="recipient-phone " className="col-form-label">
                        Telefono
                        <i className="fas fa-phone"/>:
                      </label>
                      <input
                        type="tel-"
                        className="form-control"
                        id="phone"
                        placeholder=""
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label for="message-text" className="col-form-label">
                        Message <i class="fa-solid fa-message"></i>:
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
                    Close
                  </button>
                  <button type="button" className="btn btn-success">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-7 ">
          <h1 className="text-dark m-auto text-white shadow-sm p-3 mb-3 bg-transparent">
            <span className="tunning text-white ">
           LISTA 
            </span>
            <span className="you text-white p-2 m-auto  rounded ">MEJORAS</span>
          </h1>
   
          <ul class="list-group mt-1 mb-5 text-whit bg-dark">
            <li class="list-group-item">
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                id="firstCheckbox"
              />
              <label class="form-check-label" for="firstCheckbox">
                First checkbox
              </label>
              <span class="float-end badge bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item">
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                id="secondCheckbox"
              />
              <label class="form-check-label" for="secondCheckbox">
                Second checkbox
              </label>
              <span class="float-end badge bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item">
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                id="thirdCheckbox"
              />
              <label class="form-check-label" for="thirdCheckbox">
                Third checkbox
              </label>
              <span class="float-end badge bg-primary rounded-pill">14</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
