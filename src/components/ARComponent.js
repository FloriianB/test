// ARComponent.js
import React from 'react';

const ARComponent = () => {
  return (
    <a-scene embedded arjs="sourceType: webcam;">
      <a-marker preset="hiro">
        <a-entity
          gltf-model="./models/hive-body.glb"
          scale="0.1 0.1 0.1"
          position="0 0 0"
        ></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARComponent;
