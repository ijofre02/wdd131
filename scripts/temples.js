const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')
const title = document.querySelector("header h1")

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
  title.classList.toggle("hide");
});

/* Footer part */

const year = document.querySelector("#currentYear");
year.textContent = new Date().getFullYear();
// I use both forms to remember — the long way and the short way
document.getElementById("lastModified").innerHTML = document.lastModified;