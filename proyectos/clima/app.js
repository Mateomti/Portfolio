const apiKey = "c57bfc57e06d088a9c68212a93578ea7";

async function getWeather1() {
  const lat = document.getElementById("lat").value;
  const lon = document.getElementById("lon").value;
  const resultDiv = document.getElementById("weatherResult1");

  if (lat === "" || lon === "") {
    resultDiv.innerHTML = "<p>⚠️ Escribe una ciudad</p>";
    return;
  }

  const url = `http://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&APPID=c57bfc57e06d088a9c68212a93578ea7`;
  console.log(url);

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ciudad no encontrada");
    const data = await response.json();

    const { name, main, weather } = data;
    resultDiv.innerHTML = `
      <h3>${name}</h3>
      <p>🌡️ Temp: ${main.temp}°C</p>
      <p>🤔 Sensación: ${main.feels_like}°C</p>
      <p>💧 Humedad: ${main.humidity}%</p>
      <p>${weather[0].description}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p>❌ ${error.message}</p>`;
  }
}
async function getWeather2() {
  const nombre = document.getElementById("nombre").value;
  const resultDiv = document.getElementById("weatherResult2");

  if (lat === "" || lon === "") {
    resultDiv.innerHTML = "<p>⚠️ Escribe una ciudad</p>";
    return;
  }

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${nombre}&APPID=c57bfc57e06d088a9c68212a93578ea7`;
  console.log(url);

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ciudad no encontrada");
    const data = await response.json();

    const { name, main, weather } = data;
    resultDiv.innerHTML = `
      <h3>${name}</h3>
      <p>🌡️ Temp: ${main.temp}°C</p>
      <p>🤔 Sensación: ${main.feels_like}°C</p>
      <p>💧 Humedad: ${main.humidity}%</p>
      <p>${weather[0].description}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p>❌ ${error.message}</p>`;
  }
}

async function cambiarCuadro1 (){
  const cuadro1 = document.querySelector('.card1');
  const cuadro2 = document.querySelector('.card2');
  console.log(cuadro1);
  cuadro1.style.display = "none";
  cuadro2.style.display = "block";
}
async function cambiarCuadro2 (){
  const cuadro1 = document.querySelector('.card1');
  const cuadro2 = document.querySelector('.card2');
  console.log(cuadro1);
  cuadro2.style.display = "none";
  cuadro1.style.display = "block";
}

