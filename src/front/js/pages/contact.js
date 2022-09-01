import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";

export const Contact = () => {
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
                    {/* <a class="btn btn-outline-secondary" href="#">Contactar</a> */}
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
                {/* <img className="d-block mx-auto mb-4" src="https://prochips.cl/wp-content/uploads/2022/01/CHIPVECTOR.png" alt="" width="72" height="57"> */}
                <i className="fa-solid title-header text-white mb-5 t-shadow fa-people-line"></i>
                {/* </img> */}
                <h1 className="fs-4 mb-4 t-shadow-black text-white">Quienes Somos</h1>
                <hr></hr>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4 t-shadow-black text-white">Dos castellanos manchegos y un andaluz unen sus conocimientos para crear una web donde hacer posible al ciente que quiere un servicio tunning ponerlo en contacto con los talleres mas cercanos a su ubicación que ofrecen dichos servicios</p>
                    {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                  <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                </div> */}
                </div>
            </div>

            {/* prueba card dinamica */}
            <div class="container-fluid marketing text-center">
                <div class="card">
                    <div class="card-info">
                        <div class="card-avatar"><img className="bd-placeholder-img shadow rounded-circle" width="60" height="60" src="https://avatars.githubusercontent.com/u/70114505?v=4" /></div>
                        <div class="card-title">Steve Jobs</div>
                        <div class="card-subtitle">CEO &amp; Co-Founder</div>
                    </div>
                    <ul class="card-social">
                        <li class="card-social__item">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
                            </svg></li>
                        <li class="card-social__item">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
                            </svg></li>
                        <li class="card-social__item">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>


            {/* prueba card dinamica */}
            <div class="container-fluid marketing text-center">

                <div className="row">
                    <div className="col-lg-4">
                        {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                        <img className="bd-placeholder-img shadow rounded-circle" width="140" height="140" src="https://avatars.githubusercontent.com/u/70114505?v=4" />
                        <h2 className="fs-4 mb-4 t-shadow-black text-white">Luis "El Rapido"</h2>
                        <p className="text-white">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        {/* <p><a class="btn btn-secondary" href="#">View details »</a></p> */}

                        <i className="fa-brands fs-3 title-header text-white mb-5 t-shadow fa-github" />
                        <a className="fs-6 title-header text-white mb-5 t-shadow" href="https://github.com/LuisAguadoVicaria"> Github </a>

                        <i className="fa-brands fs-3 title-header text-white mb-5 t-shadow fa-linkedin" />
                        <a className="fs-6 title-header text-white mb-5 t-shadow" href="https://www.linkedin.com/in/luisaguadovicaria/"> Linkedin</a>


                    </div>
                    <div className="col-lg-4">
                        {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://avatars.githubusercontent.com/u/104210758?v=4" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="http://avatars.githubusercontent.com/u/104210758?v=4" />
                        <h2 className="fs-4 mb-4 t-shadow-black text-white">Jesús "El Grafitis"</h2>
                        <p className="text-white">Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        {/* <p><a class="btn btn-secondary" href="#">View details »</a></p> */}
                        <i className="fa-brands fs-3 title-header text-white mb-5 t-shadow fa-github" />
                        <a className="fs-6 title-header text-white mb-5 t-shadow" href="https://github.com/kakum3"> Github </a>

                        <i className="fa-brands fs-3 title-header text-white mb-5 t-shadow fa-linkedin" />
                        <a className="fs-6 title-header text-white mb-5 t-shadow" href="https://www.linkedin.com"> Linkedin</a>

                    </div>
                    <div class="col-lg-4">
                        {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="https://avatars.githubusercontent.com/u/104069050?s=400&u=86d6a22ab542ce8cbaac0cff04417a1e666d67a1&v=4" />
                        <h2 className="fs-4 mb-4 t-shadow-black text-white">Antonio "El repros"</h2>
                        <p className="text-white">And lastly this, the third column of representative placeholder content. The next column.</p>
                        {/* <p><a class="btn btn-secondary" href="#">View details »</a></p> */}
                        <i className="fa-brands fs-3 title-header text-white mb-5 t-shadow fa-github" />
                        <a className="fs-6 title-header text-white mb-5 t-shadow" href="https://github.com/Brox13"> Github </a>

                        <i className="fa-brands fs-3 title-header text-white mb-5 t-shadow fa-linkedin" />
                        <a className="fs-6 title-header text-white mb-5 t-shadow" href="https://www.linkedin.com/in/antonio-gómez-brox-4b283130"> Linkedin</a>

                    </div>
                </div>
            </div>
        </div >



    );
};
