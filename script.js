// // collapse menu on item selection
// const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)');
// const menuToggle = document.getElementById('navbarSupportedContent');
// const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => {
//         if (menuToggle.classList.contains('show')) { bsCollapse.hide(); }
//     });
// });

function removeHash() {
    setTimeout(function(){history.replaceState("", document.title, window.location.pathname)}, 1)
}