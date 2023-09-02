import React from 'react';
import AI from '../assets/images/green-ai.png';
import Sensor from '../assets/images/green-sensor.png';
import '../styles/sensors.css'; // Importieren der externen CSS-Datei

function Sensors() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Sensors & AI</h1>
      </header>
      <main className="main">
        <div className="section">
          <img className="img" src={AI} alt="ki logo" />
          <h2 className="subTitle">Machinelles Lernen</h2>
          <p className="description">A near description of the machine learning algorithms</p>
          <a href="#" className="link">Learn more</a>
        </div>
        <div className="section">
          <img className="img" src={Sensor} alt="Sensor logo" />
          <h2 className="subTitle">Sensoren</h2>
          <p className="description">A list of Sensors</p>
          <a href="#" className="link">Learn more</a>
        </div>
      </main>
    </div>
  );
}

export default Sensors;
