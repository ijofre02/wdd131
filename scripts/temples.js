const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')
const title = document.querySelector("header h1")

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
  title.classList.toggle("hide");
});
.0