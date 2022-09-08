import React, { useContext, useEffect, useState } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { useAppContext } from "../index";

const libs = ["places"];

function Placecomplete({ value }) {
  const { store, actions, setState } = useAppContext();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [input, setInput] = useState("");
  const handleChange = () => {
    return null;
  };
  const onLoad = (ref) => {
    return (window.Autocomplete = ref);
  };
  const onPlacesChanged = () => {
    //console.log(window.Autocomplete.gm_bindings_.fields[13].Zj.place); // TO BD
    setLat(
      window.Autocomplete.gm_bindings_.fields[13].Zj.place.geometry.location.lat()
    );
    setLng(
      window.Autocomplete.gm_bindings_.fields[13].Zj.place.geometry.location.lng()
    );
  };
  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.MAPS_API}
        value=""
        libraries={libs}
      >
        <Autocomplete
          className="form-floating mb-3"
          restrictions={{ country: "es" }}
          fields={["formatted_address", "geometry.location", "name"]}
          types={["establishment"]}
          onLoad={onLoad}
          onPlaceChanged={onPlacesChanged}
        >
          <>
            <input
              defaultValue={value || input}
              name="w_address"
              type="address"
              className="w-100 form-control"
              id="w_address"
              placeholder="Avda Tuning ..."
            />
            <label htmlFor="floatingInput">Dirección del Taller</label>
          </>
        </Autocomplete>

        <em className="fs-6 mb-3 d-block mx-3">
          Por favor, asegúrese que su Taller se encuentra registrado como
          establecimiento en Google Maps.
        </em>
      </LoadScript>
      <input type="hidden" name="lat" value={lat} onChange={handleChange} />
      <input type="hidden" name="lng" value={lng} onChange={handleChange} />
    </>
  );
}

export default React.memo(Placecomplete);
