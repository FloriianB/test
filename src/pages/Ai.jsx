import { motion } from 'framer-motion';
import KNNImage from '../assets/images/knn.png'; // Beispiel-Pfad für das K-NN-Bild
import DBSCANImage from '../assets/images/dbscan.png'; // Beispiel-Pfad für das DBSCAN-Bild


return (
    <div style={styles.container}>
        <header style={styles.header}>
            <h1 style={styles.title}>Sensors & AI</h1>
        </header>
        <main>
            <motion.div style={styles.section} {...fadeIn}>
                <img className="img1" src={KNNImage} alt="k-nearest neighbors" />
                <h2 style={styles.subTitle}>Machinelles Lernen - K-NN</h2>
                <p style={styles.description}>A near description of the K-NN algorithm</p>
                <a href="#" style={styles.link}>Learn more</a>
            </motion.div>

            <motion.div style={styles.section} {...fadeIn}>
                <img className="img1" src={DBSCANImage} alt="DBSCAN logo" />
                <h2 style={styles.subTitle}>DBSCAN</h2>
                <p style={styles.description}>A description of the DBSCAN algorithm</p>
                <a href="#" style={styles.link}>Learn more</a>
            </motion.div>
        </main>
    </div>
);

const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }
  };
  
  // Andere Animationen können nach Bedarf hinzugefügt werden
  