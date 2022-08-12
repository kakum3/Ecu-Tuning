import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Servicelist = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
    
    <h1 className="">Servicios</h1>
    <div className="list-group w-auto">
  <label className="list-group-item d-flex gap-3">
    <input className="form-check-input flex-shrink-0" type="checkbox" value=""/>
    <span className="form-checked-content w-100">
      <strong><i class="fa-solid fa-microchip me-2"></i>ECU</strong>

      <small className="d-block text-muted mt-2">
      <em className="text-success">Berlingo Turbo:</em><br/>

      <span className="text-white badge bg-success rounded mx-1"><i class="fa-solid fa-gauge"></i> +30CV</span>

      <span className="text-white badge bg-success rounded mx-1"><i class="fa-solid fa-gauge"></i> +50nm</span>

      <span className="text-white badge bg-success rounded mx-1"><i class="fa-solid fa-gas-pump"></i> -10%</span>
      </small>

      <small className="d-block text-muted">
      <button class="btn btn-link btn-sm shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Ver más...
  </button>
      <div class="collapse" id="collapseExample">
     
      <ul class="list-group list-group-flush">
  <li class="list-group-item">Stage 1 & Stage 2 & Stage 3</li>
  <li class="list-group-item">Arranque en caliente</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
</div>
</small>
    {/**  <small className="d-block text-muted">
      ARRANQUE EN CALIENTE/FR
      </small>
      <small className="d-block text-muted">
      DPF, FAP, EGR, ADBLUE, SCR, GPF, OPF
      </small>
      <small className="d-block text-muted">
      DTC SELECTIVO
      </small>
      <small className="d-block text-muted">
      TELECARGA SOFTWARE ORIGINAL
      </small>
      <small className="d-block text-muted">
      LIMITADOR VELOCIDAD
      </small>
      <small className="d-block text-muted">
      CATALIZADOR - LAMBDA - O2
      </small>
      <small className="d-block text-muted">
      DESACTIVAR MARIPOSAS ADMISIÓN VARIABLE / FLAPS
      </small>
      <small className="d-block text-muted">
      POP CORN
      </small>
      <small className="d-block text-muted">
      HARDCUT
      </small>
      <small className="d-block text-muted">
      POPS&BANGS
      </small>*/}
    </span>
  </label>
  <label className="list-group-item d-flex gap-3">
    <input className="form-check-input flex-shrink-0" type="checkbox" value=""/>
    <span className="form-checked-content">
      <strong>Cambio aceite</strong>
      <small className="d-block text-muted">

      </small>
    </span>
  </label>
  <label className="list-group-item d-flex gap-3">
    <input className="form-check-input flex-shrink-0" type="checkbox" value=""/>
    <span className="form-checked-content">
      <strong>Otro</strong>
      <small className="d-block text-muted">
        ...
      </small>
    </span>
  </label>
</div>
    
    
  
    
    
    
    
    
    
    
    </>
  );
};
export default Servicelist;