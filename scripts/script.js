//  function toggleMenu() {
//             document.getElementById("sidebar").classList.toggle("open");
//         }



// const links = document.querySelectorAll("nav a");
// const currentPage = window.location.pathname.split("/").pop();

// links.forEach(link => {
//     const linkPage = link.getAttribute("href").split("/").pop();
//     if (linkPage === currentPage) {
//         link.classList.add("active");
//     }
// });

//-----------------------------------------
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open"); // match CSS
}


/* Active link for topbar + sidebar */
const links = document.querySelectorAll("nav a, .sidebar a");

const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});


//-------------------------------
// document.addEventListener("DOMContentLoaded", function () {

//     const path = window.location.pathname.toLowerCase();

//     const navLinks = document.querySelectorAll(
//         ".topbar-nav a[data-section], .sidebar a[data-section]"
//     );

//     navLinks.forEach(link => {
//         const section = link.dataset.section;

//         // HOME
//         if (
//             section === "home" &&
//             (path === "/" || path.endsWith("index.html"))
//         ) {
//             link.classList.add("active");
//         }

//         // WRITING (writing.html + articles)
//         if (
//             section === "writing" &&
//             path.includes("writing")
//         ) {
//             link.classList.add("active");
//         }

//         // READING
//         if (
//             section === "reading" &&
//             path.includes("reading")
//         ) {
//             link.classList.add("active");
//         }

//         // DEEP DIVE (list + articles)
//         if (
//             section === "deep-dive" &&
//             path.includes("deep-dive")
//         ) {
//             link.classList.add("active");
//         }
//     });

// });


//----------------------------------------------------------------
// document.addEventListener("DOMContentLoaded", () => {
//     const path = window.location.pathname.toLowerCase();

//     const navLinks = document.querySelectorAll(
//         ".topbar-nav a[data-section], .sidebar a[data-section]"
//     );

//     navLinks.forEach(link => {
//         link.classList.remove("active");

//         const section = link.dataset.section;

//         if (section === "home" && (path.endsWith("/") || path.endsWith("index.html"))) {
//             link.classList.add("active");
//         }

//         if (section === "reading" && path.includes("/reading/")) {
//             link.classList.add("active");
//         }

//         if (section === "writing" && path.includes("/writing/")) {
//             link.classList.add("active");
//         }

//         if (section === "deep-dive" && path.includes("/deep-dive/")) {
//             link.classList.add("active");
//         }
//     });
// });

