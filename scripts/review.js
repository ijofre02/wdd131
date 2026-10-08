document.addEventListener("DOMContentLoaded", () => {
  // Obtener la cantidad actual guardada en localStorage
  let numReviews = Number(window.localStorage.getItem("reviewCounter-ls")) || 0;

  // Incrementar en 1 por cada envío exitoso
  numReviews++;

  // Mostrar el nuevo valor en pantalla
  const reviewDisplay = document.getElementById("reviewCount");
  if (reviewDisplay) {
    reviewDisplay.textContent = numReviews;
  }

  // Guardar el nuevo valor actualizado
  window.localStorage.setItem("reviewCounter-ls", numReviews);

  // Footer
  const year = document.querySelector("#currentyear");
  year.textContent = new Date().getFullYear();
  document.getElementById("lastModified").innerHTML = document.lastModified;
});