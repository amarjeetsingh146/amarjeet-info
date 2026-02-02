function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

const links = document.querySelectorAll("a[data-section]");

// Normalize current path
let currentPath = window.location.pathname;
if (currentPath === "/") currentPath = "/index.html";

links.forEach(link => {
    const tmp = document.createElement("a");
    tmp.href = link.getAttribute("href");

    let linkPath = tmp.pathname;
    if (linkPath === "/") linkPath = "/index.html";

    // HOME: exact match only
    if (linkPath === "/index.html") {
        if (currentPath === "/index.html") {
            link.classList.add("active");
        }
        return;
    }

    // OTHER PAGES: folder-based match
    const linkFolder = linkPath.substring(0, linkPath.lastIndexOf("/") + 1);

    // if (currentPath.startsWith(linkFolder)) {
    //     link.classList.add("active");
    // }

    if (currentPath.includes(`/${link.dataset.section}/`)) {
    link.classList.add("active");
}

});
