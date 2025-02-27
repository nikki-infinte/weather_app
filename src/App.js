import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
    <div className="main">
      <div className="side_box">
        <h4>current weather</h4>
        <p>2:37 PM</p>
        <div className="weather-info">
          <img src="/sun.png" alt="Weather Icon" />
          <h2>30°C</h2>
        </div>
      </div>

      
    </div>

    <div className="Additional">
      <div className="a1">
        <h4>Air Quality</h4>
        <p>113</p>
        
      </div>
      <div className="w1">
        <h4> Wind</h4>
        <p>4 km/h</p>
      </div>
      <div className="h1">
        <h4> Humidity</h4>
        <p>22 %</p>
      </div>
      <div className="v1">
        <h4>Visibility</h4>
        <p>10 km</p>
      </div>
      <div className="p1">
        <h4> Pressure</h4>
        <p>1015 mb</p>
      </div>
      <div className="d1">
        <h4> Dew point</h4>
        <p>8*</p>
      </div>
    </div>
    </>
    
  );
};

export default App;