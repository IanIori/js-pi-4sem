import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '50%',
  height: '400px',
  margin: "0 auto",
  display: "block"
};

const center = {
  lat: -23.113552854750548,
  lng: -47.27554440834238
};

const apiKey = 'AIzaSyDZXF_k3MhjxpAvGkInWDaxJPtN2h8hyAg'; 

const MapaComponente: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapaComponente;
