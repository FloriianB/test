import React from 'react';
import { motion } from 'framer-motion';


function Sensors() {
  return (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: '#333', background: '#fff', minHeight: '100vh', maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}>
      <header style={{ padding: '20px 40px', borderBottom: '1px solid #e0e0e0', transition: 'all 0.3s' }}>
        <h1 style={{ margin: 0, fontSize: '24px', color: '#555', transition: 'all 0.3s' }}>AI</h1>
      </header>
      <main style={{ padding: '40px', transition: 'all 0.3s' }}>
        <section className="intro" style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#555', fontSize: '20px', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px', transition: 'all 0.5s' }}>Introduction to AI, Deep Learning, and Neural Networks</h2>
          <p style={{ lineHeight: '1.7', marginTop: '20px', fontSize: '16px', color: '#777', transition: 'all 0.5s' }}>AI, or Artificial Intelligence, is the simulation...</p>
        </section>


        <section className="intro" style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#555', fontSize: '20px', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px', transition: 'all 0.5s' }}>   Understanding the Buzz: AI and Bees</h2>
          <p style={{ lineHeight: '1.7', marginTop: '20px', fontSize: '16px', color: '#777', transition: 'all 0.5s' }}>
        In the fascinating world of beekeeping, 
        technology is playing an increasingly vital role. Artificial Intelligence (AI),
        Deep Learning, and Neural Networks are no longer terms confined to the realms of computer science. 
        They are becoming essential tools for modern beekeepers. But what do these terms mean, 
        and how can they be applied to beekeeping? Let's dive in!</p>
        </section>
       
        <section className="algorithms">
          <div className="algorithm" style={{ marginBottom: '40px', transition: 'all 0.3s', padding: '20px' }}
               onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
               onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <h2 style={{ color: '#555', fontSize: '18px' }}>Deep Learning
            </h2>
            <p style={{ lineHeight: '1.7', marginTop: '20px', fontSize: '16px', color: '#777' }}>DBSCAN (Density-Based Spatial Clustering of Applications with Noise) is a clustering algorithm that groups together points that are close to each other based on a distance measurement and a minimum number of points. It also marks as outliers the points that are in low-density regions.</p>
          </div>
          <div className="algorithm" style={{ transition: 'all 0.3s', padding: '20px' }}
               onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
               onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <h2 style={{ color: '#555', fontSize: '18px' }}>K-Nearest Neighbour Algorithm</h2>
            <p style={{ lineHeight: '1.7', marginTop: '20px', fontSize: '16px', color: '#777' }}>The K-Nearest Neighbours (K-NN) algorithm is a type of instance-based learning used for classification and regression. It stores all available cases and classifies new cases based on a similarity measure, such as distance functions</p>
          </div>
        </section>
      </main>
      <footer style={{ backgroundColor: '#f5f5f5', padding: '20px 40px', borderTop: '1px solid #e0e0e0', transition: 'all 0.3s' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#999', transition: 'all 0.3s' }}>© 2023 KI-Pilot</p>
      </footer>
      <style>
        {`
          @media (max-width: 768px) {
            main {
              padding: 20px;
            }
            header, footer {
              padding: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Sensors;
