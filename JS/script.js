/* 
    This project is torture,
    please do something.. I am no more okay.
*/

//TODO | Comment more the code to help myself in the future.

const header = document.querySelector("#Header");
const interests = document.querySelectorAll(".interest");
const anchors = document.querySelectorAll("a")

/* I commented that part due to the lag when using an image as a background in CSS instead */

// header.addEventListener("mousemove", (e) => {
//     // Note: Do not even attempt to understand this code Zarcka or whatever nickname or name you are using now.

//     const { height, top } = header.getBoundingClientRect();
//     const rotateX = (5 * (e.clientY - (top + height) / 2) / (header.offsetHeight / 2));
//     const rotateY = (-5 * (e.clientX - (header.offsetLeft + header.offsetWidth) / 2) / (header.offsetWidth / 2));

//     header.style.setProperty("--rotateX", rotateX + "deg");
//     header.style.setProperty("--rotateY", rotateY + "deg");
// });

for (let i = 0; i < interests.length; i++) {
    const interest = interests[i];

    interest.addEventListener("mousemove", (e) => {

        const { left, top } = interest.getBoundingClientRect();

        // The CSS property --x is equal to the mouse x coordinates relative/on the element
        interest.style.setProperty("--x", Math.round(((e.clientX - ((left + interest.offsetWidth) / 2)) / (interest.offsetWidth / 2)) * 25 )+ "%");
        // The CSS property --y is equal to the mouse y coordinates relative/on the element
        interest.style.setProperty("--y", Math.round(((e.clientY - ((top + interest.offsetHeight) / 2)) / (interest.offsetHeight / 2)) * 25 )+ "%");
    });
};

window.onload = () => {
    const transition_eles = document.querySelectorAll(".transition");

    for (let i = 0; i < transition_eles.length; i++) {
        setTimeout( transition_eles[i].classList.remove("active") , 600);
    }

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i]

        anchor.addEventListener("click", (e) => {
            e.preventDefault()

            let target = e.target.href;

            for (let i = 0; i < transition_eles.length; i++) {
            transition_eles[i].classList.add("active");
            }

            setTimeout(() => {
                window.location.href = target;
            }, 500)
        })
    }
};