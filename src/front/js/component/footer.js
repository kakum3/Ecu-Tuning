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

	<footer class="py-1 my-1">
		<ul class="nav justify-content-center border-bottom pb-3 mb-1">
			<Link to="/polprivacy">
				<li class="nav-item"><a href="#" class="nav-link px-1 text-muted">Politica de Privacidad</a></li>
			</Link>
			<Link to="/avilegal">
				<li class="nav-item"><a href="#" class="nav-link px-1 text-muted">Aviso Legal</a></li>
			</Link>
			<Link to="/polcookies">
				<li class="nav-item"><a href="#" class="nav-link px-1 text-muted">Politica de Cookies</a></li>
			</Link>
		</ul>
		<p class="text-center text-muted">© 2022 Ecu Tunning</p>
		<p className="text-center fs-6 mb-1 t-shadow-black text-white"><strong>Diseño Web para empresas</strong> TeamTrio</p>
	</footer>
);