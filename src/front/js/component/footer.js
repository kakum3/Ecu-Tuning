import React, { Component } from "react";
export const Footer = () => (
	// <footer className="footer mt-auto py-3 text-center">
	//  <p>
	//      Made with <i className="fa fa-heart text-danger" /> by{" "}
	//      <a href="http://www.4geeksacademy.com">Luis, Jesús y Antonio</a>
	//  </p>
	// </footer>

		<footer className="d-flex flex-wrap justify-content-between align-items-center p-3 my-4 text-bg-dark mt-auto">
			<div className="col-md-4 d-flex align-items-center">
				<a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
					<i class="fa-solid fa-car"></i>
				</a>
				<span className="mb-3 mb-md-0 text-muted">© 2022 Fast&Furious</span>
			</div>
			<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
				<li className="ms-3"><a className="text-muted" href="#"><i class="fa-brands fa-facebook"></i></a></li>
				<li className="ms-3"><a className="text-muted" href="#"><i class="fa-brands fa-instagram"></i></a></li>
				<li className="ms-3"><a className="text-muted" href="#"><i class="fa-brands fa-twitter"></i></a></li>
			</ul>
		</footer>
);