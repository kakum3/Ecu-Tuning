import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Servicelist from "../component/servicelist";

export const Details = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="row">
      <div className="col-sm-12 col-lg-5">
        <Servicelist />

        <div className="row text-center m-auto ">
          <div class=" text-center mt-5">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contactar
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <a class="dropdown-item active" href="#">
                    {" "}
                    <div className="content mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      ></input>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                      ></textarea>
                      <label for="floatingTextarea">Comments</label>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-lg-7">
        <h1>Nombre taller</h1>
        <p>calle inventada 2</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9-fcYSUonKnrISp1NP-vEIS09hsykWEK4w&usqp=CAU"
          class="rounded mx-auto d-block"
          alt="..."
        ></img>
      </div>
    </div>
  );
};
