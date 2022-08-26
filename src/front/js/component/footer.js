import React, { Component } from "react";
export const Footer = () => (
		<footer className="d-flex flex-wrap justify-content-between align-items-center p-3 my-4 bg-primary mb-0 shadow-lg">
			<div className="col-md-4 d-flex align-items-center">
				<a href="/" className="me-2 text-muted text-decoration-none">
					<i className="fa-solid fa-car"></i>
				</a>
				<span className="text-muted">© 2022 Fast&Furious</span>
			</div>
			<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
				<li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-facebook"></i></a></li>
				<li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-instagram"></i></a></li>
				<li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-twitter"></i></a></li>
			</ul>
		</footer>
);