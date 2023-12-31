import React from 'react';
import AI from '../assets/images/green-ai.png';
import Sensor from '../assets/images/dgreen-sensor.png';


function Sensors() {
  const styles = {
  

    header: {
      marginBottom: '20px',
    },
    
    title: {
      fontSize: '32px',
      fontWeight: '300',
      letterSpacing: '2px',
    },

    main: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
    },

    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      background: '#fad145',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.05)',
      borderRadius: '10px',
      margin: '20px',
      width: '40%',
    },
    
    img: {
      width: '100px',
      height: '100px',
      marginBottom: '15px',
    },
    maindescription: {
      textAlign:'center',
      alignItems: 'center',
      paddingRight:'10px',
      paddingLeft:'auto',
      margin: '100px',
      color:'#f9f9f9',
      width: '80%',
    },
    p: {
      textAlign:'center',
      color:'#f9f9f9'
    },
    subTitle: {
      fontSize: '24px',
      fontWeight: '300',
      marginBottom: '10px',
      color: '#333'
    },
    description: {
      fontSize: '16px',
      color: '#777',
      marginBottom: '15px',
      textAlign: 'center',
    },
    link: {
        padding: '10px 20px',
        color: '#f9f9f9',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        background: '#3D6A52',
        border: '1px solid #333',
        display: 'inline-block',
        '&:hover': {
          background: '#f9f9f9',
          color: '#f9f9f9',
          transform: 'scale(1.05)', // Vergrößert den Link ein wenig beim Hovern
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Fügt einen leichten Schatten hinzu
        },
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title} className='dot-title'>Sensors & Algorithmen</h1>
        <div style={styles.maindescription}>
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu
        
          </p>
       </div>
      </header>
      <main style={styles.main}>
        <div style={styles.section}>
        
          <img style={styles.img} src={AI} alt="ki logo" />
          <h2 style={styles.subTitle}>Machinelles Lernen</h2>  
          <p style={styles.description}>A near description of the machine learning algorithms</p>
          <a href="#" style={styles.link}>Learn more</a>
        </div>
        <div style={styles.section}>
          <img style={styles.img} src={Sensor} alt="Sensor logo" />
          <h2 style={styles.subTitle}>Sensoren</h2>
          <p style={styles.description}>A list of Sensors</p>
          <a href="#" style={styles.link}>Learn more</a>
        </div>
      </main>
    </div>
  );
}

export default Sensors;
