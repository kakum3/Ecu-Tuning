import React, { Component } from "react";
import { Link } from "react-router-dom";
export const Footer = () => (
	// <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 my-4 bg-primary mb-0 shadow-lg">
	// 	<div className="col-md-4 d-flex align-items-center">
	// 		<a href="/" className="me-2 text-muted text-decoration-none">
	// 			<i className="fa-solid fa-car"></i>
	// 		</a>
	// 		<span className="text-muted">© 2022 Fast&Furious</span>
	// 	</div>
	// 	<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
	// 		<li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-facebook"></i></a></li>
	// 		<li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-instagram"></i></a></li>
	// 		<li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-twitter"></i></a></li>
	// 	</ul>
	// </footer>

	<footer  className="py-1 my-1 mt-5">
		<ul  className="nav justify-content-center border-bottom pb-3 mb-1">
			
				<li  className="nav-item"><Link to="/polprivacy"   className="nav-link px-1 text-muted">Politica de Privacidad
			</Link></li>
			<li  className="nav-item"><Link to="/avilegal" className="nav-link px-1 text-muted">Aviso Legal
			</Link></li>
			<li  className="nav-item"><Link to="/polcookies" className="nav-link px-1 text-muted">
				Politica de Cookies
			</Link></li>
		</ul>
		<p  className="text-center text-muted mt-3">© 2022 ECU Tunning</p>
		<p className="text-center fs-6 mb-1 t-shadow-black text-white"><strong>Diseño Web para empresas</strong> TeamTrio</p>
	</footer>
);