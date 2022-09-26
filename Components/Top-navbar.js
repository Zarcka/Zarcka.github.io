const topNavbar  = document.createElement("nav");

topNavbar.id = "Topnav";
topNavbar.innerHTML = 
`
    <h2 class="title">Placeholder Text</h2>
    <div class="links">
        <h2>/</h2>
        <section>
            <a href="/index.html">index.html</a>
        </section>
        <h2>/Interests</h2>
        <section>
            <a href="/Interests/art.html">art.html</a>
            <a href="/Interests/coding.html">coding.html</a>
        </section>
    </div>
    <img src="/Assets/Icons/folder-tree-solid.svg" alt="Menu-Icon" class="icon" onclick="openNav()" height="24px" width="24px">
`;

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openNav() {
    const navbar = document.querySelector("#Topnav");

    navbar.classList.toggle("responsive");
}

document.body.appendChild(topNavbar);