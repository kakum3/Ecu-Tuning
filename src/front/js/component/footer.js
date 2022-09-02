import React, { Component } from "react";
import { Link } from "react-router-dom";
export const Footer = () => (

	<footer className="py-1 my-1 mt-5">
		<ul className="nav justify-content-center border-bottom pb-3 mb-1">

			<li className="nav-item"><Link to="/polprivacy" className="nav-link px-1 text-muted">Politica de Privacidad
			</Link></li>
			<li className="nav-item"><Link to="/avilegal" className="nav-link px-1 text-muted">Aviso Legal
			</Link></li>
			<li className="nav-item"><Link to="/polcookies" className="nav-link px-1 text-muted">
				Politica de Cookies
			</Link></li>
		</ul>
		<p className="text-center text-muted mt-3">© 2022 ECU Tuning</p>
		<p className="text-center fs-6 mb-1 t-shadow-black text-white"><strong>Diseño Web para empresas</strong> TeamTrio</p>
	</footer>
);