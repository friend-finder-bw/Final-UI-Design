
const floatingNav = document.querySelector("header");
floatingNav.addEventListener('reset', () => {
    floatingNav.preventDefault();
});

const orangeNav = document.querySelector("h1");
orangeNav.addEventListener('mouseover', () => {
  orangeNav.style.color = 'orange';
});

const footer = document.querySelector('footer');
footer.addEventListener('click', () => {
    alert("Copyright Friend Finder 2019");
});

