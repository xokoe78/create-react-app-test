import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        <button onClick={this.handleClick}>
          {loading ? 'Loading...' : 'Call Lambda'}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Map
          mapboxAccessToken="MAPBOX_TOKEN"
          initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 3.5,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </Map>
      </div>
    );
  }
}

export default App;