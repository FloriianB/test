import { Scatter } from 'react-chartjs-2';

const knnData = {
    datasets: [
      {
        label: 'K-Nearest Neighbours',
        data: [
          { x: 3, y: 7 },
          { x: 6, y: 3 },
          { x: 7, y: 8 },
          { x: 5, y: 4 },
        ],
        backgroundColor: 'rgba(255,99,132,0.2)',
      },
    ],
  };
  
  const knnOptions = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  <div className="algorithm">
  <h2>K-Nearest Neighbour Algorithm</h2>
  <p>The K-Nearest Neighbours (K-NN) algorithm is a type of instance-based learning 
      used for classification and regression. It stores all available cases 
      and classifies new cases based on a similarity measure, such as distance functions.</p>
  <Scatter data={knnData} options={knnOptions} />
</div>

  