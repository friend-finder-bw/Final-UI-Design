const siteNav = document.querySelectorAll("nav a");
siteNav[0].textContent = "Home";
siteNav[1].textContent = "The App";
siteNav[2].textContent = "The Story";
siteNav[3].textContent = "The Team";
siteNav[4].textContent = "Log In/Sign Up";

const floatingNav = document.querySelector("header");
floatingNav.addEventListener('reset', () => {
    floatingNav.preventDefault();
});

const orangeNav = document.querySelector("header nav a");
orangeNav.addEventListener('mouseover', () => {
  orangeNav.style.color = 'orange';
});

const footer = document.querySelector('footer');
footer.addEventListener('click', () => {
    alert("Copyright Friend Finder 2019");
});

