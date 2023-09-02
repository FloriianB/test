<<<<<<< HEAD
// Importieren der benötigten Module
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Szene, Kamera und Renderer initialisieren
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// GLTFLoader instanzieren
const loader = new GLTFLoader();

// 3D-Modell laden
loader.load('../src/models/hive-top.glb', function (gltf) {
  // Das geladene Modell zur Szene hinzufügen
  scene.add(gltf.scene);

  // Kamera-Position anpassen, falls notwendig
  camera.position.z = 5;
});

// Animation
const animate = function () {
  requestAnimationFrame(animate);

  // Hier können Sie weitere Animationen oder Updates hinzufügen

  renderer.render(scene, camera);
};

animate();
=======
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
>>>>>>> 6788e6ba75244219330a18cc134b1128ee10fd91
