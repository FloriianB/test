import React from 'react';
import { motion } from 'framer-motion';

function Sensors() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row', // Definiere die Hauptachse als Zeile
      flexWrap: 'nowrap', // Verhindert, dass die Elemente umgebrochen werden
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      marginTop: '20px',

    },
    header: {
        
      width: '100%',
      textAlign: 'center',
      marginBottom: '20px',
    },
    title: {
      fontSize: '24px',
      color: '#555',
    },
    section: {
      marginTop: '20em',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      order: 1,
      flex: '0 1 auto',
      alignSelf: 'auto',
      minWidth: '0',
      minHeight: 'auto',
      marginTop: '20px',
    },
    subTitle: {
      fontSize: '18px',
      color: '#555',
    },
    description: {
            
      fontSize: '16px',
      color: '#777',
    },
    link: {
      color: '#007BFF',
      textDecoration: 'none',
    },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Sensors & AI</h1>
      </header>
      <main>
        <motion.div style={styles.section} {...fadeIn}>
          {/* <img className="img1" src={KNNImage} alt="k-nearest neighbors" /> */}
          <h2 style={styles.subTitle}>Machinelles Lernen - K-NN</h2>
          <p style={styles.description}>A near description of the K-NN algorithm</p>
          <a href="#" style={styles.link}>Learn more</a>
        </motion.div>

        <motion.div style={styles.section} {...fadeIn}>
          {/* <img className="img1" src={DBSCANImage} alt="DBSCAN logo" /> */}
          <h2 style={styles.subTitle}>DBSCAN</h2>
          <p style={styles.description}>A description of the DBSCAN algorithm</p>
          <a href="#" style={styles.link}>Learn more</a>
        </motion.div>
      </main>
    </div>
  );
}

export default Sensors;
