import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";

export const Contact = () => {
    const { store, actions } = useContext(Context);
    const [values, setValues] = useState({
        email: "",
        fName: "",
        telefon: "",
        asunto: "",
    });
    const { id } = useParams();
    const [taller, setTaller] = useState({});
    useEffect(() => {
        fetch(process.env.BACKEND_URL + "/taller/" + id)
            .then((r) => r.json())
            .then((data) => setTaller(data.taller));

    }, []);

    const handleTallerChange = (e) => {
        setTaller(e.target.value);
    };

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        actions.getTaller_id(values);
    };


    return (



        <div className="container-fluid m-auto">

            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">//bg-light
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-7 fs-2 mb-4 t-shadow-black text-white">¿Necesitas ayuda?</h1>
                    <p class="lead fs-4 mb-4 t-shadow-black text-white"> Contacta con nosotros<strong> 24/7</strong></p>
                    <p class="lead fs-4 mb-4 t-shadow-black text-white"> Te asesoraremos personalmente y responderemos a todas tus preguntas.</p>

                    <button
                        type="button"
                        className="btn btn-success mt-5  mb-3 text-white shadow-sm p-3 mb-5   text-decoration-underline "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@mdo"
                    >
                        Enviar Mensaje
                    </button>
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
                                                htmlFor="recipient-phone "
                                                className="col-form-label"
                                            >
                                                <i className="fa-brands fa-whatsapp me-1"></i>
                                                Telefono
                                            </label>
                                            <input
                                                value={values.telefon}
                                                onChange={handleInputChange}
                                                onLoad={handleInputChange}
                                                name="telefon"
                                                type="tel"
                                                className="form-control"
                                                id="phone"
                                                placeholder=""
                                            ></input>
                                        </div>
                                        <input
                                            name="taller_id"
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
                                                value={values.fName}
                                                onChange={handleInputChange}
                                                onLoad={handleInputChange}
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
                                                value={values.asunto}
                                                onChange={handleInputChange}
                                                onLoad={handleInputChange}
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
                <div class="product-device shadow-sm d-none d-md-block"></div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <div className="px-4 py-5 my-5 text-center">
                <i className="fa-solid title-header text-white mb-5 t-shadow fa-people-line"></i>
                <h1 className="fs-4 mb-4 t-shadow-black text-white">Quienes Somos</h1>
                <hr></hr>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4 t-shadow-black text-white">Dos castellanos manchegos y un andaluz unen sus conocimientos para crear una web donde hacer posible al ciente que quiere un servicio tunning ponerlo en contacto con los talleres mas cercanos a su ubicación que ofrecen dichos servicios</p>
                </div>
            </div>

            <div class="container-fluid marketing text-center">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                        <img className="bd-placeholder-img shadow rounded-circle mb-3" width="140" height="140" src="https://avatars.githubusercontent.com/u/70114505?v=4" />
                        <h2 className="fs-4 mb-4 t-shadow-black text-white">Luis</h2>
                        <p className="text-white"> "El Rapido"</p>
                        <i className="fa-brands fs-3 title-header text-white mb-5 t-shadow fa-github" />
                        <a className="fs-6 title-header text-white m-1 t-shadow" href="https://github.com/LuisAguadoVicaria">Github   </a>
                        <i className="fa-brands fs-3 title-header text-white m-1 t-shadow fa-linkedin" />
                        <a className="fs-6 title-header text-white mb-5 t-shadow" href="https://www.linkedin.com/in/luisaguadovicaria/">Linkedin</a>
                    </div>
                    <div className="col-lg-4">
                        <img className="bd-placeholder-img rounded-circle mb-3" width="140" height="140" src="http://avatars.githubusercontent.com/u/104210758?v=4" />
                        <h2 className="fs-4 mb-4 t-shadow-black text-white">Jesús</h2>
                        <p className="text-white">"El Grafitis"</p>
                        <i className="fa-brands fs-3 title-header text-white  t-shadow fa-github" />
                        <a className="fs-6 title-header text-white m-1 t-shadow" href="https://github.com/kakum3">Github   </a>
                        <i className="fa-brands fs-3 title-header text-white m-1 t-shadow fa-linkedin" />
                        <a className="fs-6 title-header text-white mb-5 t-shadow" href="https://www.linkedin.com">Linkedin</a>
                    </div>
                    <div class="col-lg-4">
                        <img className="bd-placeholder-img rounded-circle mb-3" width="140" height="140" src="https://avatars.githubusercontent.com/u/104069050?s=400&u=86d6a22ab542ce8cbaac0cff04417a1e666d67a1&v=4" />
                        <h2 className="fs-4 mb-4 t-shadow-black text-white">Antonio</h2>
                        <p className="text-white">"El repros"</p>
                        <i className="fa-brands fs-3 title-header text-white mb-5 t-shadow fa-github" />
                        <a className="fs-6 title-header text-white m-1 t-shadow" href="https://github.com/Brox13">Github   </a>
                        <i className="fa-brands fs-3 title-header text-white m-1 t-shadow fa-linkedin" />
                        <a className="fs-6 title-header text-white mb-5 t-shadow" href="https://www.linkedin.com/in/antonio-gómez-brox-4b283130">  Linkedin</a>
                    </div>
                </div>
            </div>
        </div>

    );
};
