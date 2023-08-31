import React from 'react';
import '../styles/learning.css'; 
import '../styles/button.css';

export default function Learning() {
  return (
    <div className='container'>
      <div className='outer-container'>
            <div className="learning-container">
                  {[1, 2, 3].map((item, index) => (
                    <div key={index} className="learning-item">
                      <div className="learning-content">
                        Sensors and Algorithms {item}
                        <p className="placeholder-text">Hier ist ein Platzhaltertext unter der Überschrift.</p>
                      
                      <button className="btn-2">
                        Read More
                      </button>
                      </div>
                    </div>
                  ))}
                </div>
          </div>
    </div>
    
    
  );
};
