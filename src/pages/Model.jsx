import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function ThreeJSExample() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    let scene, camera, renderer, controls;

    // Initialize scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    // Initialize camera
    camera = new THREE.PerspectiveCamera(40, mount.clientWidth / mount.clientHeight, 1, 5000);
    camera.rotation.y = 45 / 180 * Math.PI;
    camera.position.set(800, 100, 1000);

    // ... (Add lights and other scene setup here)

    // Initialize renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Initialize controls
    controls = new OrbitControls(camera, renderer.domElement);

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load('path/to/your/scene.gltf', (gltf) => {
      const car = gltf.scene.children[0];
      car.scale.set(0.5, 0.5, 0.5);
      scene.add(gltf.scene);
      animate();
    });

    // Animation function
    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    return () => {
      // Cleanup
      mount.removeChild(renderer.domElement);
      controls.dispose();
    };

  }, []);

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100vh' }}>
      {/* The renderer element will be attached here */}
    </div>
  );
}
