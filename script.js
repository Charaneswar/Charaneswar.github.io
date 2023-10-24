// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cartoon character (for example, a simple cube)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set up GSAP animation
gsap.to(cube.rotation, { duration: 2, x: Math.PI * 2, repeat: -1 });

// Set up the camera position
camera.position.z = 5;

// Main animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
