const anchors = document.querySelectorAll("a");

window.onload = () => {
    const transition_eles = document.querySelectorAll(".transition");

    for (let i = 0; i < transition_eles.length; i++) {
        setTimeout( transition_eles[i].classList.remove("active") , 850);
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
            }, 850)
        })
    }
};