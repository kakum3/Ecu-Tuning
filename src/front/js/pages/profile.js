import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Profile = () => {
    const { store, actions } = useContext(Context);

    return (
      <div className="text-center mt-5">
        <h1>Nombre taller</h1>
        <p>calle inventada 2</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9-fcYSUonKnrISp1NP-vEIS09hsykWEK4w&usqp=CAU"
          class="rounded mx-auto d-block"
          alt="..."
        ></img>
        <h2>Modelo de coche</h2>

        <div className="row text-center m-auto ">
          <div className="col-md-12 fs-160">
            <table class="table table-light">
              <tbody>
                <tr>
                  <thead>SERVICIOS TALLER</thead>
                </tr>

                <tr class="table-active">
                  <th scope="row">Mejoras</th>
                  <th scope="row" class="table-active">
                    %Mejora
                  </th>
                  <th scope="row" class="table-active">
                    Precio
                  </th>
                </tr>
                <tr>
                  <td scope="row">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                    ></label>{" "}
                    ECU{" "}
                  </td>
                  <td scope="row">% mejora</td>
                  <td scope="row">precio</td>
                </tr>
                <tr>
                  <td scope="row"><input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                    ></label>{" "}
                    ECU{" "} </td>
                  <td scope="row">% mejora</td>
                  <td scope="row">precio</td>
                </tr>
                <tr>
                  <td scope="row"><input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                    ></label>{" "}
                    ECU{" "} </td>
                  <td scope="row">% mejora</td>
                  <td scope="row">precio</td>
                </tr>
                <tr>
                  <td scope="row"><input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                    ></label>{" "}
                    ECU{" "} </td>
                  <td scope="row">% mejora</td>
                  <td scope="row">precio</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class=" text-center mt-5"><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Contactar
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">                          <div className="content mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div></a></li>
    <li><a class="dropdown-item" href="#"><div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div></a></li>
    
   
    
  </ul>
</div></div>

        </div>
        
      </div>
    );
};