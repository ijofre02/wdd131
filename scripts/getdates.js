const year = document.querySelector("#currentyear");
// Listo, ya tome currentyear y lo converti en constante year

year.textContent = new Date().getFullYear();

//Add las modification
document.getElementById("lastModified").innerHTML = document.lastModified;