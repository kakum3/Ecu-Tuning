import React from "react";
import { Link } from "react-router-dom";

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
								<a className="nav-link active" aria-current="page" href="#">Mapas</a>
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
		</nav>

	);
};
