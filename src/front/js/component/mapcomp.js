import React, { useContext, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
  InfoWindow,
} from "@react-google-maps/api";
import { useAppContext } from "../index";

import { useNavigate } from "react-router-dom";

import markerimage from "../../../../marker.png";

const libs = ["places"];

function Mapcomponent({ center }) {
  const { store, actions, setState } = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {}, [store.map_markers]);
  return (
    <LoadScript googleMapsApiKey={process.env.MAPS_API} libraries={libs}>
      <GoogleMap
        mapContainerStyle={{
          width: "auto",
          height: "89vh",
        }}
        center={{ lat: 40.420177, lng: -3.703928 }}
        zoom={6}
      >
        {!store.loggedIn ? (
          <Marker
            label={{
              text: "Regístrate",
              fontSize: "1.23rem",
              marginTop: "2rem",
              fontWeight: "bold",
              color: "black",
              className: "marker-label t-shadow-black-marker",
            }}
            icon={markerimage}
            position={{ lat: 40.420177, lng: -3.703928 }}
          />
        ) : store.map_markers[0].w_name === "EMPTY" ? null : (
          store.map_markers.map((e, i) => {
            const coincidenceArray = e.w_services.map((e) =>
              store.sel_services[e.id - 1] === undefined
                ? null
                : store.sel_services[e.id - 1].value
                ? true
                : false
            );

            const mark = (
              <Marker
                key={i}
                label={{
                  text: e.w_name,
                  fontSize: "1.23rem",
                  marginTop: "2rem",
                  fontWeight: "bold",
                  color: "black",
                  className: "marker-label t-shadow-black-marker",
                }}
                icon={markerimage}
                position={e}
                onClick={() => navigate("/taller/" + e.id, { replace: true })}
              />
            );
            const selectionLength = store.sel_services.filter(
              (e) => e.value === true
            ).length;
            return selectionLength === 1
              ? coincidenceArray.includes(true)
                ? mark
                : null
              : coincidenceArray.filter((e) => e === true).length ===
                selectionLength
              ? mark
              : null;
          })
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Mapcomponent);
