const header = document.querySelector("#Header");

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