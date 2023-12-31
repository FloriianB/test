import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import '../styles/overview.css';

export default function Overview() {
    return (
        <motion.div
            className="bg"
            animate={{ opacity: 1 }} // Animate opacity to 1
            transition={{ duration: 1 }} // Animation duration
        >
            <div className='layout'>
           
              
                <div className='landing-section'>
                    <h1 className="text-4xl text-gray-100 ">AR-Hive</h1>
                    <p className='sub-title'>
                        A immersive Augmented Reality experience
                    </p>
                    
<<<<<<< HEAD
                    <div className="text-lg text-gray-100  leading-relaxed ">
                            <a href="/Model" className="btn-2" aria-label="START">
                                <div><span className='start'> START </span></div>
=======
                    <div className="text-lg text-gray-100  leading-relaxed">
                            <a href="/Model" className="btn-2" aria-label="START">
                                <div><span> START </span></div>
>>>>>>> 6788e6ba75244219330a18cc134b1128ee10fd91
                            </a>
                    </div>
                </div>
            <div className='description-section'>
            <div className="description">
          
<<<<<<< HEAD
             
                <h2 className='sub-title'>Dies ist mehr als nur eine Weiterbildungsplattform.</h2>
                  <p className='description-text'> Wir bieten Imkern die Möglichkeit, sich über die neuesten Technologien, 
                    einschließlich IoT und Machine Learning, zu informieren und ihre Fähigkeiten zu verbessern.</p> 
           
                 
                 <p className='description-text2'>
                     Mit unseren Kursen und Ressourcen können Sie die Möglichkeiten  der modernen Imkerei 
=======
                <p className='description-text'>
                <h2 className='dot-title'>Dies ist mehr als nur eine Weiterbildungsplattform.</h2>
                    Wir bieten Imkern die Möglichkeit, sich über die neuesten Technologien, <br />
                    einschließlich IoT und Machine Learning, zu informieren und ihre Fähigkeiten zu verbessern.
                 </p>
                 
                 <p className='description-text2'>
                     Mit unseren Kursen und Ressourcen können Sie die Möglichkeiten <br /> der modernen Imkerei 
>>>>>>> 6788e6ba75244219330a18cc134b1128ee10fd91
                    erkunden und dazu beitragen, das Bienensterben zu bekämpfen, 
                   <br /> welches ein großes Problem unserer Zeit darstellt.
                   </p>
                   
            </div>
            </div>
            
            </div>
        </motion.div>
    );
}