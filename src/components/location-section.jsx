// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import GoogleMapReact from 'google-map-react';
import {
} from './location-section.module.css'

const AnyReactComponent = ({ text }) => <div><h1>{text}</h1></div>;

export default function LocationSection(){
  const defaultProps = {
    center: {
      lat: 41.8287102, lng: -7.5419265
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
              bootstrapURLKeys={{
                  key: 'AIzaSyAVwdBuWGyHo-OpkfHD4L-QQm1kVPzH0PI',
                  language: 'pt-PT',
                    region: 'pt'
              }}
              defaultCenter={defaultProps.center} 
        defaultZoom={defaultProps.zoom}
          >
        <AnyReactComponent
          lat={41.8287102}
                lng={-7.5419265}
                text={"São Caetano, Chaves"}
              />
              
              <AnyReactComponent
          lat={41.709236}
                lng={-7.5717239}
                text={"Casas Novas Countryside Hotel"}
        />
      </GoogleMapReact>
    </div>
  );
}