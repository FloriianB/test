import React, { useState, useEffect } from 'react';



const DataProcessingAndAnimation = () => {
  // Dummy-Daten generieren
  const generateDummyData = () => {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push([Math.random(), Math.random()]);
    }
    return data;
  };

  const [data, setData] = useState(generateDummyData());
  const [dbLabels, setDBLabels] = useState([]);
  const [knnLabels, setKNNLabels] = useState([]);

  useEffect(() => {
    // DBSCAN durchführen
    const dbscan = new DBSCAN(0.3, 5);
    const dbLabels = dbscan.fit_predict(data);
    setDBLabels(dbLabels);

    // KNN durchführen
    const knn = new KNeighborsClassifier(5);
    knn.fit(data, dbLabels);
    const knnLabels = knn.predict(data);
    setKNNLabels(knnLabels);
  }, [data]);

  // Animation für Datenpunkte
  const AnimatedScatterPlot = animated(Plot);

  const scatterProps = useSpring({
    x: data.map((point) => point[0]),
    y: data.map((point) => point[1]),
    color: dbLabels,
  });

  return (
    <div>
      <AnimatedScatterPlot
        data={[
          {
            x: scatterProps.x,
            y: scatterProps.y,
            mode: 'markers',
            marker: { color: scatterProps.color, colorscale: 'Viridis', size: 8 },
          },
        ]}
        layout={{ width: 800, height: 600, title: 'DBSCAN Clustering' }}
      />
    </div>
  );
};

export default DataProcessingAndAnimation;
