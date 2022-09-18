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
    <img src="/Assets/Icons/folder-tree-solid.svg" alt="Menu-Icon" class="icon" onclick="openMenu()" height="24px" width="24px">
`;

document.body.appendChild(topNavbar);