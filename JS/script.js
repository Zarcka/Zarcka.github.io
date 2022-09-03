/* 
    This project is torture,
    please do something.. I am no more okay.
*/

//TODO | Comment more the code to help myself in the future.

const header = document.querySelector("#Header");
const interests = document.querySelectorAll(".interest");

// /* I commented that part due to the lag when using an image as a background in CSS instead */

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