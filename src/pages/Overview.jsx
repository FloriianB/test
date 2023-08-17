/*import '../styles.css';
import React from 'react';



export default function Overview() {
  return (
    <div className="bg-white py-20" style={{
      backgroundColor: '#ffffff',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
      backgroundImage: `url(./src/images/beeing.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      maxWidth: '100%',
      maxHeight: '100%',
      margin: 'auto',
      padding: '20px'
    }}>
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

import '../styles.css';
import React from 'react';

export default function Overview() {
    return (
        <div style={{
            backgroundColor: '#000',
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            backgroundImage: `url(./src/images/beeing.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div className="container text-center">
                <h1 className="text-4xl font-bold mb-8" style={{color: '#fff'}}>AR-Hive</h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px', borderRadius: '5px'}}>
                    A immersive Augmented Reality experience
                </p>
                <div className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mt-8" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '10px'}}>
                    <p>Lorem ipsum ...</p>
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
