import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Comprueba tu coche</h1>
			<p className="position-absolute">
				{/* <img src={rigoImageUrl} /> */}
			</p>
			<div class="">
				<select class="form-select fs-3" id="inputGroupSelect02">
					<option selected="">Marca...</option>
					<option value="1">Audi</option>
					<option value="2">BMW</option>
					<option value="3">Citroen</option>
				</select>
				<select class="form-select" id="inputGroupSelect02">
					<option selected="">Modelo...</option>
					<option value="1">A1</option>
					<option value="2">A2</option>
					<option value="3">A3</option>
				</select>
				<select class="form-select" id="inputGroupSelect02">
					<option selected="">Modelo...</option>
					<option value="1">A1</option>
					<option value="2">A2</option>
					<option value="3">A3</option>
				</select>
			</div>
		</div>
	);
};
