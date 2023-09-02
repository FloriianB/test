import React from 'react';
import '../styles/sensors.css'; // Importiere die CSS-Datei
import AI from '../assets/images/green-ai.png';
<<<<<<< HEAD
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
=======
import Sensor from '../assets/images/dgreen-sensor.png';
import '../styles/styles.css'; 
import '../styles/title.css'; 

function Sensors() {
  return (
    <div className="sensor-container">
      <header className="header">
        <h1 className="dot-title">Sensors & Algorithmen</h1>
        <div className="maindescription">
         <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu
        </p>
        </div>
      </header>
      <main className="main">
        <div className="section">
          <img className='boxImg' src={AI} alt="" />
          <h2 className='subTitle'>Verwendete Algorithmen</h2>
          <p className='description'></p>
          <a href="#" className='link'>Learn more</a>
        </div>

        <div className="section">
        <img className='boxImg' src={Sensor} alt="" />
          <h2 className='subTitle'>Verwendete Sensorik</h2>
          <p className='description'></p>
          <a href="#" className='link'>Learn more</a>
>>>>>>> 6788e6ba75244219330a18cc134b1128ee10fd91
        </div>
      </main>
    </div>
  );
}

export default Sensors;
