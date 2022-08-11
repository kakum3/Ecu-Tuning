import React, { Component } from "react";
export const Footer = () => (
		<footer className="d-flex flex-wrap justify-content-between align-items-center p-3 my-4 text-bg-dark mb-0">
			<div className="col-md-4 d-flex align-items-center">
				<a href="/" className="me-2 text-muted text-decoration-none">
					<i class="fa-solid fa-car"></i>
				</a>
				<span className="text-muted">© 2022 Fast&Furious</span>
			</div>
			<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
				<li className="ms-3"><a className="text-muted" href="#"><i class="fa-brands fa-facebook"></i></a></li>
				<li className="ms-3"><a className="text-muted" href="#"><i class="fa-brands fa-instagram"></i></a></li>
				<li className="ms-3"><a className="text-muted" href="#"><i class="fa-brands fa-twitter"></i></a></li>
			</ul>
		</footer>
);