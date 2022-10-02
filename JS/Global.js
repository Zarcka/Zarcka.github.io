/* 
    This project is torture,
    please do something.. I am no more okay.
*/

//TODO | Comment more the code to help myself in the future.

import * as THREE from "./libs/three.js/three.module.min.js";

const hiddenElems = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("hidden", !entry.isIntersecting);
    })
});

hiddenElems.forEach((el) => observer.observe(el));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#Background_3D"),
    alpha: true
});

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({
    color: 0xFF6347,
    wireframe: true
});

const gridHelper = new THREE.GridHelper(200, 50);
const torus = new THREE.Mesh(geometry, material);

const moonSphere = new THREE.Mesh(
    new THREE.SphereGeometry(6, 64, 64),
    new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    })
);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 30;
renderer.render(scene, camera);

scene.background = new THREE.Color( 0x202c4c ); // replace value after 0x with any hex color
scene.add(gridHelper);
scene.add(torus);
scene.add(moonSphere);

moonSphere.position.x = 30;
moonSphere.position.y = 10;

function animate() {
    requestAnimationFrame(animate);
    
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.0002;
    torus.rotation.z += 0.0002;

    if (camera.position.z <= -10 && camera.position.x <= -10 && camera.position.y <= -10) {
        for (let i = -10; i < 11; i += 0.1) {
            camera.position.z = i;
            camera.position.x = i;
            camera.position.y = i;
            camera.rotation.z = 0;
            camera.rotation.x = 0;
            camera.rotation.y = 0;
        }
    }
    else {
        camera.position.z -= 0.1;
        camera.position.x -= 0.02;
        camera.position.y -= 0.02;
        camera.rotation.z += -0.01;
        camera.rotation.x += -0.0002;
        camera.rotation.y += -0.0002;
    }


    renderer.render(scene, camera);
};

animate();

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    });
    
    const star = new THREE.Mesh(geometry, material);
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

//! /* I commented that part due to the lag when using an image as a background in CSS instead */

// header.addEventListener("mousemove", (e) => {
//     // Note: Do not even attempt to understand this code Zarcka or whatever nickname or name you are using now.

//     const { x, height, top } = header.getBoundingClientRect();
//     const rotateX = (5 * (e.clientY - (top + height) / 2) / (header.offsetHeight / 2));
//     const rotateY = (-5 * (e.clientX - (header.offsetLeft + header.offsetWidth) / 2) / (header.offsetWidth / 2));

//     // The CSS property --x is equal to the mouse x coordinates relative/on the element
//     header.style.setProperty("--x", ((e.clientX - x / 2) / (header.offsetWidth / 2)) * 5 + "%");
//     // The CSS property --y is equal to the mouse y coordinates relative/on the element
//     header.style.setProperty("--y", ((e.clientY - (header.offsetLeft + header.offsetWidth) / 2) / (header.offsetHeight / 2)) * 10000 + "%");

//     header.style.setProperty("--rotateX", rotateX + "deg");
//     header.style.setProperty("--rotateY", rotateY + "deg");
// });

// for (let i = 0; i < interests.length; i++) {
//     const interest = interests[i];

//     interest.addEventListener("mousemove", (e) => {

//         const { left, top } = interest.getBoundingClientRect();

//         // The CSS property --x is equal to the mouse x coordinates relative/on the element
//         interest.style.setProperty("--x", Math.round(((e.clientX - ((left + interest.offsetWidth) / 2)) / (interest.offsetWidth / 2)) * 25 )+ "%");
//         // The CSS property --y is equal to the mouse y coordinates relative/on the element
//         interest.style.setProperty("--y", Math.round(((e.clientY - ((top + interest.offsetHeight) / 2)) / (interest.offsetHeight / 2)) * 25 )+ "%");
//     });
// };