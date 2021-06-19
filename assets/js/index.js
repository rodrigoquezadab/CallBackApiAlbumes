//     Crear una función asíncrona que contenga la URL en una variable.
// ● Luego mediante el bloque de try/catch conectarse a la URL indicada anteriormente
// con el método fetch, utilizando a la vez await para que retorne directamente el valor
// de la promesa.
// ● Utilizando métodos para iterar arreglos, como por ejemplo el forEach, solamente
// mostrar los primeros 20 títulos de álbumes de acuerdo al número de id indicados por
// la URL.

// https://jsonplaceholder.typicode.com/photos
const getAlbumes = async (id) => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  try {
    const response = await fetch(url);
    const albumes = await response.json();

    const albumesSegunIdRecibidoComoParametro = albumes.filter(
      (a) => a.albumId == id
    );
    const primeroVeinteAlbumes = albumesSegunIdRecibidoComoParametro.slice(
      0,
      21
    );
    return primeroVeinteAlbumes;
  } catch (err) {
    console.log(err);
  }
};

const enviarInformacion = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Información enviada");
    }, 3000);
  });
};

// A través de una IIFE con async/await, imprimir por consola el resultado de la función enviarInformacion
(async () => {
  const respuestaPrimeraFuncion = await enviarInformacion();
  const respuestaSegundaFuncion = await getAlbumes(2);
  console.log(respuestaPrimeraFuncion);
  console.log(respuestaSegundaFuncion);

  const tabla = document.querySelector(".tabla");
  console.log(tabla);

  tabla.innerHTML = "";

  respuestaSegundaFuncion.forEach((element) => {
    tabla.innerHTML += `
      <p>ID: ${element.id} / Album: ${element.title}</p>
      `;
  });
})();
