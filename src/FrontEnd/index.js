import React, { Component } from 'react';
import { render } from 'react-dom';
import { withScriptjs } from "react-google-maps";
import Map from '../component/index/map';
import './style.css';

const App = () => {
    const MapLoader = withScriptjs(Map);

    return (
        <MapLoader
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAtiuQLx-WDx9BHkunZ6Ltvh7EEeKzm-P0"
            loadingElement={<div style={{ height: `100%` }} />}
        />
    );
};

render(<App />, document.getElementById('root'));
