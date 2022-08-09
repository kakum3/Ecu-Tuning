import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Servicelist = () => {
  const { store, actions } = useContext(Context);
  return (
    <><h1 className="text-success">Berlingo Turbo</h1>
    <sub>Mejoras:</sub>
    <ul class="list-group mb-5">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
    <label class="form-check-label" for="firstCheckbox">First checkbox</label>
    <span class="float-end badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
    <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
    <span class="float-end badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
    <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
    <span class="float-end badge bg-primary rounded-pill">14</span>
  </li>
</ul></>
  );
};
export default Servicelist;