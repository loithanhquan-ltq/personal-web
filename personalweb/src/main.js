import { ThreeMFLoader } from 'three/examples/jsm/Addons.js';
import './style.css'
import * as THREE from 'three'
// function AgeCounter() {
//     var startYear = new Date("1999-03-01");
//     var now = new Date();
//     var years = now.getTime() - startYear.getTime();
//     var msPerYear = 1000 * 60 * 60 * 24 * 365.25;
//     var age = years / msPerYear;
//     var ageElement = document.getElementById("years-counter");
//     if (ageElement) {
//         ageElement.textContent = "I am " + age.toFixed(9) + " years old";
//     }
// }
// setInterval(AgeCounter, 50);

const scence = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer(
    {
        canvas: document.querySelector('#bg'),
    }
);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scence,camera);

const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshBasicMaterial({color:0xFF6347, wireframe:true})
const torus = new THREE.Mesh(geometry, material);
scence.add(torus)

function animate()
{
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
    renderer.render(scence,camera);
}

animate();
renderManualCarousel();


