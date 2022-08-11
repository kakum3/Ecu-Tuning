import React from 'react'
import { GoogleMap, LoadScript, Marker, Autocomplete } from '@react-google-maps/api';

const containerStyle = {
  width: 'auto',
  height: '60vh'
};

const center = {
  lat: 39,
  lng: -3
};

const fakeLoc = {
  lat: 39,
  lng: -3
}

const onLoad = () => {}
const onPlaceChanged = () => {}

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker label="Taller Paco" position={fakeLoc}/>
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)