let preguntasRespuestas = [];

// Cargar datos desde data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    preguntasRespuestas = data;
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

function getResponse() {
  const userInput = document.getElementById('userInput').value;
  const responseDiv = document.getElementById('response');

  // Buscar la respuesta correspondiente
  const resultado = preguntasRespuestas.find(item => item.pregunta.toLowerCase() === userInput.toLowerCase());

  if (resultado) {
    responseDiv.innerHTML = `<p>Has preguntado: "${userInput}". Respuesta: "${resultado.respuesta}".</p>`;
  } else {
    responseDiv.innerHTML = `<p>Lo siento, no tengo una respuesta para: "${userInput}".</p>`;
  }
}
