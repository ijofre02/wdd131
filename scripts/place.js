/* footer */
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

/* Win Chill calculate */
const temperature = parseFloat(document.querySelector("#temperature").textContent) ;
const windSpeed = parseFloat (document.querySelector("#windSpeed").textContent);

/* CalcualateWindChil  that returns in one line the results of the  wid chill calculation*/
function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16;
}

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
}

document.querySelector("#windChill").textContent = windChill;