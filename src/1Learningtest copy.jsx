import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const LearningSection = () => {
  const [activeTab, setActiveTab] = useState('AI');

  const tabs = ['AI', 'Deep-Learning', 'Machine-Learning', 'Neuronale Netze', 'K-NN', 'DBSCAN'];

  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <button
            style={{ padding: '8px 16px', margin: '4px', backgroundColor: activeTab === tab ? 'blue' : 'gray', color: activeTab === tab ? 'white' : 'black' }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {activeTab === 'AI' && <div><h1>AI in Beekeeping</h1><p>AI can help in monitoring the health of beehives.</p></div>}
        {activeTab === 'Deep-Learning' && <div><h1>Deep Learning</h1><p>Deep learning can be used for image recognition in beekeeping.</p></div>}
        {activeTab === 'Machine-Learning' && <div><h1>Machine Learning</h1><p>Machine learning can identify patterns in bee behavior.</p></div>}
        {activeTab === 'Neuronale Netze' && <div><h1>Neuronale Netze</h1><p>Neural networks can predict disease outbreaks in hives.</p></div>}
        {activeTab === 'K-NN' && <div><h1>K-NN Algorithm</h1><p>K-NN can be used for classifying bee species.</p></div>}
        {activeTab === 'DBSCAN' && <div><h1>DBSCAN</h1><p>DBSCAN can be used for cluster analysis of hive location data.</p></div>}
      </div>
    </div>
  );
};

// ReactDOM.render(<LearningSection />, document.getElementById('root'));
