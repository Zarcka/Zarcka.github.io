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

let turning_back;

function animate() {
    requestAnimationFrame(animate);
    
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.0002;
    torus.rotation.z += 0.0002;

    /*
    Checks that the camera's X, Y, Z positions are smaller or equal to -10.
    When turning_back is true the camera's position will increase till they are greater than 20,
    this will create a looped animation
    */
    if (camera.position.z <= -10 && camera.position.x <= -10 && camera.position.y <= -10 || turning_back) {
        /*
        turning_back is a boolean, as long the camera's X, Y, Z position is smaller or equal to 20,
        the camera positions will get more far from the center, when the camera's positions are greater than 20,
        the turning_back value will be false as the condition is no more met
        */
        turning_back = camera.position.z <= 20 && camera.position.x <= 20 && camera.position.y <= 20;
        camera.position.z += 0.1;
        camera.position.x += 0.02;
        camera.position.y += 0.02;
    }
    else {
        turning_back = false;
        camera.position.z -= 0.1;
        camera.position.x -= 0.02;
        camera.position.y -= 0.02;
    }

    camera.rotation.z += -0.01;
    camera.rotation.x += -0.0002;
    camera.rotation.y += -0.0002;

    renderer.render(scene, camera);
};

animate();

// Creates a sphere and add it to the scene
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

// Use the Array() constructor to create an array and use the fill() method with the forEach() method to add 200 stars with addStar() function
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