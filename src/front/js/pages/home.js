import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1>Comprueba tu coche</h1>
			<p className="position-absolute">
				{/* <img src={rigoImageUrl} /> */}
			</p>
			<div class="">
				<select class="form-select fs-5" id="inputGroupSelect02">
					<option selected="">Marca...</option>
					<option value="1">Audi</option>
					<option value="2">BMW</option>
					<option value="3">Citroen</option>
				</select>
				<select class="form-select fs-5" id="inputGroupSelect02">
					<option selected="">Modelo...</option>
					<option value="1">A1</option>
					<option value="2">A2</option>
					<option value="3">A3</option>
				</select>
				<select class="form-select fs-5" id="inputGroupSelect02">
					<option selected="">Año...</option>
					<option value="1">2000-2003</option>
					<option value="2">2003-2009</option>
					<option value="3">2009-2012</option>
				</select>
				<select class="form-select fs-5" id="inputGroupSelect02">
					<option selected="">Motor...</option>
					<option value="1">1.6 Tdi 105cv</option>
					<option value="2">1.9 Tdi 110cv</option>
					<option value="3">2.0 Tdi 140cv</option>
				</select>
			</div>
			<div class="d-grid gap-2 col-6 mx-auto">
				<button class="btn btn-primary" type="button">Comprobar</button>
			</div>
		</>

	);
};
