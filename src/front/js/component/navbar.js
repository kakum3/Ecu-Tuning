import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
	return (
		<nav className="p-3 text-bg-dark">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					<a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
						<i className="fa fa-heart text-danger" />
					</a>
					<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
						<Link to="/">
							<li><a href="#" className="nav-link px-2 text-secondary"><h5><strong>Fast&Furious</strong></h5></a></li>
						</Link>
						<Link to="/map">
							<li><a href="#" className="nav-link px-2 text-white">Talleres(Dev:Map)</a></li>
						</Link>
						<li><a href="#" className="nav-link px-2 text-white">Contacto</a></li>
						<li><a href="#" className="nav-link px-2 text-white">Salir</a></li>

					</ul>
					<ul className="nav col-md-4 container-fluid list-unstyled d-flex">
						<li className="ms-3"><a className="text-muted" href="#"><i class="fa-brands fa-facebook"></i></a></li>
						<li className="ms-3"><a className="text-muted" href="#"><i class="fa-brands fa-instagram"></i></a></li>
						<li className="ms-3"><a className="text-muted" href="#"><i class="fa-brands fa-twitter"></i></a></li>
					</ul>
					<div className="text-end">
						<Link to="/login">
							<button type="button" className="btn btn-outline-light me-2">Entrar</button>
						</Link>
						<Link to="/signup">
							<button type="button" className="btn btn-success">Registrar</button>
						</Link>
					</div>
					<div className="text-end">

						<Link to="/profile" href="#" class="ms-2 d-block link-dark text-decoration-none dropdown-toggle">
							<img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"></img>
						</Link>
					</div>
				</div>
			</div>
		</nav >
	);
};








