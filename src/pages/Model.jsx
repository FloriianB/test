
import '../styles/model.css'; 
import '../styles/button.css';
import { Link, Outlet } from "react-router-dom";
import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Model = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x += 0.005));

  let gltf;
  new GLTFLoader().load('assets/models/hive-top.glb', (result) => {
    gltf = result;
  });

  return (
    <mesh ref={mesh}>
      {gltf && <primitive object={gltf.scene} />}
    </mesh>
  );
};


const Controls = () => {
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[state.camera, state.gl.domElement]} />;
};

function ModelApp() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Controls />
      <Model />
    </Canvas>
  );
}

export default ModelApp;
