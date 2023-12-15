const puppeteer = require("puppeteer");

// Función para generar un correo electrónico aleatorio
function generateRandomEmail() {
  const username = [...Array(8)].map(() => getRandomChar()).join("");

  return `${username}@uce.edu.ec`;
}

function getRandomChar() {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  return characters[Math.floor(Math.random() * characters.length)];
}

// Define el número de veces que deseas ejecutar el código
const n_veces = 100000; // Cambia esto al número deseado de ejecuciones

const res = async () => {
  const browser = await puppeteer.launch({ headless: false }); // Cambia a 'true' si no deseas ver la interfaz gráfica
  const page = await browser.newPage();

  // Reemplaza la URL con la de tu página web
  const url = "https://uceeduec.weebly.com/";

  await page.goto(url);

  const randomEmail = generateRandomEmail();
  const randomText = [...Array(10)].map(() => getRandomChar()).join("");

  // Localiza los campos de entrada y el botón de envío
  await page.type("#input-640488560397199553", randomEmail);
  await page.type("#input-652722692357146760", randomText);

  await page.click(".wsite-button-inner");
  // Agrega un setTimeout de 2 segundos
  setTimeout(async () => {
    await browser.close();
  }, 1500);
};

for (let i = 0; i < n_veces; i++) {
  await res();
}
