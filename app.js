const menuIcon = document.querySelector('.hamburger-icon');

function toggleMenuIcon() {
    menuIcon.classList.toggle('active')
}

menuIcon.addEventListener('click', toggleMenuIcon);