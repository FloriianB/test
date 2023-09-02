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
