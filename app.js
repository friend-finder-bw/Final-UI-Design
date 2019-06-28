const orangeHeader = document.querySelector("h4");
orangeNav.addEventListener('mouseover', () => {
  orangeNav.style.color = 'orange';
});

const floatingNav = document.querySelector("header");
floatingNav.addEventListener('reset', () => {
    floatingNav.preventDefault();
});