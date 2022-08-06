import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand" href="#">Fast&Furious</a>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/map">
								<a className="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon="fas fa fa-tools" />Mapa</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/profile">
								<a className="nav-link" href="#">Usuarios</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav >
	);
};


// ste navbar me da error en la linea de <use xlink:href="bootstrap" pero puedo estar bien 
{/* <nav className="navbar navbar-expand-lg bg-light">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					<a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
						<svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
					</a>

					<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
						<li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
						<li><a href="#" className="nav-link px-2 text-white">Features</a></li>
						<li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
						<li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
						<li><a href="#" className="nav-link px-2 text-white">About</a></li>
					</ul>
					<div className="text-end">
						<button type="button" className="btn btn-outline-light me-2">Login</button>
						<button type="button" className="btn btn-warning">Sign-up</button>
					</div>
				</div>
			</div> */}