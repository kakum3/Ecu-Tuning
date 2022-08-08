import React from "react";
import { Link } from "react-router-dom";
// export const Navbar = () => {
//  return (
//      <nav className="navbar navbar-expand-lg bg-light">
//          <div className="container-fluid">
//              <Link to="/">
//                  <a className="navbar-brand" href="#">Fast&Furious</a>
//              </Link>
//              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                  <span className="navbar-toggler-icon"></span>
//              </button>
//              <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                      <li className="nav-item">
//                          <Link to="/map">
//                              <a className="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-screwdriver-wrench"></i>Mapa</a>
//                          </Link>
//                      </li>
//                      <li className="nav-item">
//                          <Link to="/profile">
//                              <a className="nav-link" href="#"><i class="fa-solid fa-user"></i>Usuarios</a>
//                          </Link>
//                      </li>
//                  </ul>
//              </div>
//          </div>
//      </nav >
//  );
// };
// ste navbar me da error en la linea de <use xlink:href="bootstrap" pero puedo estar bien
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
							<li><a href="#" className="nav-link px-2 text-white">Talleres</a></li>
						</Link>
						<li><a href="#" className="nav-link px-2 text-white">Contacto</a></li>
						<li><a href="#" className="nav-link px-2 text-white">Salir</a></li>
					</ul>
					<div className="text-end">
						<Link to="/login">
							<button type="button" className="btn btn-outline-light me-2">Usiario</button>
						</Link>
						<Link to="/signup">
							<button type="button" className="btn btn-success">Registrar</button>
						</Link>
					</div>
					<div className="text-end">
						<a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							<img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"></img>
						</a>
					</div>
				</div>
			</div>
		</nav >
	);
};








