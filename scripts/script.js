
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open"); // match CSS
}



const links = document.querySelectorAll("nav a, .sidebar a");

// get current path, e.g., "/writing/article/fear.html"
const currentPath = window.location.pathname;

links.forEach(link => {
    // resolve the link's path
    const tmp = document.createElement("a");
    tmp.href = link.getAttribute("href");
    const linkPath = tmp.pathname;

    // Check if currentPath belongs to the same folder as link
    // Extract folder from linkPath
    const linkFolder = linkPath.substring(0, linkPath.lastIndexOf('/'));

    if (currentPath.startsWith(linkFolder)) {
        link.classList.add("active");
    }
});



