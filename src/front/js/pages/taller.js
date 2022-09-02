import React, { useContext, useEffect, useState } from "react";
import { useAppContext } from "../index";
import Servicelist from "../component/servicelist";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";


import { number } from "prop-types";

export const Taller = () => {
  const { store, actions, setStore } = useAppContext();
  const { id } = useParams();
  const [taller, setTaller] = useState({});
  const [image, setImage] = useState("")
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/taller/" + id)
      .then((r) => r.json())
      .then((data) => {setTaller(data.taller); setImage(data.img)});
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    actions.getMensaje({
      asunto: e.target.asunto.value,
      telefon: e.target.telefon.value,
      fname: e.target.fname.value,
      message: e.target.message.value,
      taller_id: e.target.taller_id.value,
    });
  };
  return (
    <div className="container  m-auto text-white border-0 ">
      <main className="bg-transparent ">
        <div className="row  ">
          <div className="col-sm-12 col-lg-5 ">
            <h1 className="logo text-center text-white mt-4  ">
              <span className="text-center text-white py-5 mb-3 t-shadow ">
                {taller.w_name}
              </span>
            </h1>

            <h6 className="m-5 home-shadow address text-align-top text-center text-white py-2 pt-2">
              <i className="fas fa-map-marker-alt me-2"></i>
              {taller.w_address}
            </h6>
            <div className="text-center">
              {
                <img
                  className="rounded shadow figure"
                  src={image === "" ? "https://www.tuningblog.eu/wp-content/uploads/2019/05/Autowerkstatt-tuning-shop-workshop.jpg" : process.env.BACKEND_URL +
                  "/images/" + image}
                  alt="Profile"
                />
              }
            </div>

            <div className="text-center">
              <Link
                className="btn btn-transparent bg-primary  text-align-top btn-align-top mt-5  mb-3 me-1 text-white   mb-5  "
                to="/map"
              >
                <i className="fa-sharp fa-solid fa-arrow-left" />
               
              </Link>

              <button
                type="button"
                className="btn btn-success "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="fa-sharp fa-solid fa-envelope me-2"></i>
                Contactar 
              </button>
            </div>

            <div
              className="modal fade  text-primary rounded shadow"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-white card mt-5 shadow">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Nuevo Mensaje
                    </h5>
                  </div>
     
                  <div className="modal-body modal-centered ">
                    <form onSubmit={formSubmit}>
                      <div className=" form-floating mb-3  mt-3 ">
                       
                       
                        <input
                          defaultValue={""}
                          name="telefon"
                          type="tel"
                          className="form-control"
                          id="floatingInput"
                          placeholder="numero"
                          pattern="[0-9]{9}"
                        ></input>
                         <label
                          htmlFor="floatingInput "
                          className="col-form-label"
                        >
                          <i className="fa-brands fa-whatsapp me-1"></i>
                          Telefono
                          </label>
                      </div>
                      <input name="taller_id" value={id} type="hidden" />
                      <div className="form-floating mb-3  ">
                      
                        <input
                          defaultValue={""}
                          name="fname"
                          type="text"
                          className="form-control"
                          id="floatingInputfName"
                          placeholder="nombre"
                        ></input>
                          <label
                          htmlFor="floatingTextarea "
                          className="col-form-floating"
                        >
                          Nombre
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                      
                        <input
                          defaultValue={""}
                          type="floatingText"
                          className="form-control"
                          id="recipient-name"
                          name="asunto"
                          placeholder="Asunto"
                        />
                          <label
                          htmlFor="recipient-name"
                          className=" col-form-floating"
                        >
                          Asunto
                        </label>
                      </div>
                      <div className="form-floating  mb-3">
                      
                        <textarea
                          className="form-control  "
                          placeholder="Leave a comment here"
                          id="floatingMessage-text"
                          name="message"
                          style={{height: "25vh"}}

                        ></textarea>
                          <label
                          htmlFor="floatingMessage-text"
                          className="form-label"
                        >
                      
                          Mensaje
                        </label>
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-detail col-sm-12 col-lg-6 p-5 overflow-auto  card rounded shadow m-auto color-dark text-dark">
            <h2>servicios</h2>
            <hr />

            <Servicelist />
          </div>
        </div>
      </main>
    </div>
  );
};
