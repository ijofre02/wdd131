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

/* W04 Assignment: Picture Album Enhancement */
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Córdoba Argentina Temple",
    location: "Córdoba, Argentina",
    dedicated: "2015, May, 17",
    area: 34369,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093.jpg"
  },
  {
    templeName: "Mendoza Argentina Temple",
    location: "Mendoza, Argentina",
    dedicated: "2024, September, 22",
    area: 21999,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-51736.jpg"
  },
  {
    templeName: "Buenos Aires Argentina Temple",
    location: "Buenos Aires, Argentina",
    dedicated: "1985, January, 17-19",
    area: 30659,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
  },
  {
    templeName: "Salta Argentina Temple",
    location: "Salta, Argentina",
    dedicated: "2024, June, 16",
    area: 27000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241-main.jpg"
  },
  {
    templeName: "Bahía Blanca Argentina Temple",
    location: "Buenos Aires, Argentina",
    dedicated: "2025, November, 16",
    area: 234000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-65191-main.jpg"
  }
];



const templeContainer = document.querySelector("#cards-container");

function displayTemples(temples) {
  /* Clean the container function (important for future) */
  templeContainer.innerHTML = "";

  /* The Loop */
  temples.forEach(temple => {
    /* Card conteiner */
    const card = document.createElement("section");

    /* Figure and image */
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";
    img.width = 400;
    img.height = 250; /* Lighthouse problems */

    /* Temple information */
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<span><strong>Location:</strong> </span> ${temple.location}`;

    const dedicate = document.createElement("p");
    dedicate.innerHTML = `<span><strong>Dedicated:</strong> </span> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<span><strong>Area:</strong></span> ${temple.area} sq ft`;

    /* Lets append all */
    figure.appendChild(img);
    card.appendChild(figure);
    card.appendChild(h3);
    card.appendChild(location);
    card.appendChild(dedicate);
    card.appendChild(area);

    templeContainer.appendChild(card);

  }); 
}

displayTemples(temples);

/* Lets create filters */
const allLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

allLink.addEventListener("click", () => {
  displayTemples(temples);
});

oldLink.addEventListener("click", () => {
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(","));
    return year < 1900;
  });
  displayTemples(oldTemples);
});

newLink.addEventListener("click", () => {
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(","));
    return year > 2000;
  });
  displayTemples(newTemples);
});

largeLink.addEventListener("click", () => {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
});

smallLink.addEventListener("click", () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
});