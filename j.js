const Cheerio = require("cheerio");

function generateRandomEmail() {
  const username = [...Array(500)].map(() => getRandomChar()).join("");
  return `${username}@uce.edu.ec`;
}
function generateRandomPassword() {
  const username = [...Array(500)].map(() => getRandomChar()).join("");
  return `${username}`;
}
function getRandomChar() {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  return characters[Math.floor(Math.random() * characters.length)];
}

// Define el número de veces que deseas ejecutar el código
const n_veces = 1000000; // Cambia esto al número deseado de ejecuciones
const res = async () => {
  const form = new FormData();
  form.append("_u640488560397199553", generateRandomEmail());
  form.append("_u652722692357146760", generateRandomPassword());
  form.append("form_version", "2");
  form.append("ucfid", "521498407147249904");
  const json = await fetch(
    "https://uceeduec.weebly.com/ajax/apps/formSubmitAjax.php",
    {
      method: "POST",
      body: form,
    }
  );
  const res = await json.text();

  const $ = Cheerio.load(res);
  const responseDiv = $("#response").text();

  console.log(responseDiv);
};

for (let i = 0; i < n_veces; i++) {
  await res();
}
