import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken='pk.eyJ1IjoieG9rb2UiLCJhIjoiY2w4cmk1cWVqMW1sejN1bzVsaW80ZXV2YiJ9.sNukazh3PYPUy5qHak9hRA';

class Mapp extends React.Component{

	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
			lng: -74,
			lat: 40.7128,
			zoom: 12
		}
	}

	// Create map and lay over markers
	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/shiy/ckjg4xi1r158y19maqdzjkqjx', 
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100%', height:'100vh'}}/>
			</div>
		)
	}
}

export default Mapp;