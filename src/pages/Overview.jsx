
import React from 'react'

/*
export default function Overview() {

      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">AR-Hive</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">A immersive Augmented Reality experience</p>
        <div className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          <ul className="links">
            <li>
              <a className="link" href="#">Learn more</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
*/


import { motion } from 'framer-motion';

export default function Overview() {
    return (
        <motion.div
            className="bg-white py-20"
            style={{
                backgroundColor: '#ffffff',
                color: '#333',
                fontFamily: 'Arial, sans-serif',
                backgroundImage: `url(./src/assets/images/beeing.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maxWidth: '100%',
                maxHeight: '100%',
                margin: 'auto',
                marginTop:'1em',
                padding: '20px',
                opacity: 0 // Initial opacity
            }}
            animate={{ opacity: 1 }} // Animate opacity to 1
            transition={{ duration: 1 }} // Animation duration
        >
               <div className='layout'>     
            <div className="container mx-auto text-center" style={{
                maxWidth: '100%',
                margin: 'auto',
                marginTop:'5em',
                textAlign: 'center'
            }}>

         


              
              <div className='logo' style={{ /* Styles here if needed */ }}>
                <img className='' src="./assets/src/images/ki-pilot.png" alt="" />
              </div>
                <h1 className="text-4xl  text-gray-100 font-bold mb-8" style={{
                    fontSize: '4em',
                    fontWeight: 'bold',
                    color: '#f9f9f9',
                    marginBottom: '0.5em'
                }}>AR-Hive</h1>
                <p className="text-lg text-gray-100 max-w-2xl mx-auto" style={{
                  
                    fontSize: '1.125em',
                    color: '#f9f9f9',
                    maxWidth: '36em',
                    margin: 'auto'
                }}>
                    A immersive Augmented Reality experience
                </p>

                <p className="text-lg text-gray-100 max-w-2xl mx-auto" style={{
                    fontSize: '1.125em',
                    color: '#f9f9f9',
                    maxWidth: '36em',
                    marginTop: '1em',
                    marginRight: 'auto',
                    marginLeft:'auto'
                }}>

            Dies ist mehr als nur eine Weiterbildungsplattform. 
            Wir bieten Imkern die Möglichkeit, sich über die neuesten Technologien, 
            einschließlich IoT und Machine Learning, zu informieren und ihre Fähigkeiten zu verbessern.
             Mit unseren Kursen und Ressourcen können Sie die Möglichkeiten der modernen Imkerei 
             erkunden und dazu beitragen, das Bienensterben zu bekämpfen, 
            welches ein großes Problem unserer Zeit darstellt.
                </p>

                <div className="text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed" style={{
                    fontSize: '1.125em',
                    color: '#a0a0a0',
                    maxWidth: '36em',
                    margin: '1em auto 1em auto'
                }}>
                    {/* Content here */}
                    <a href="/Learning" class="p_index__btn" aria-label="START" style={{

                        color: '#f9f9f9',
                        cursor: 'pointer',
                        fontSize: '16px',
                        lineHeight: '45px',
                        maxWidth: '160px',
                        width: '100%',
                        textDecoration: 'none',
                        textTransform: 'uppercase'
                        // Other styles here
                    }}>
                      <div><span>START it</span></div>
                    </a>
                  </div>
                </div>
            </div>
        </motion.div>
    );
}
