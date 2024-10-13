function getResponse() {
    const userInput = document.getElementById('userInput').value;
    const responseDiv = document.getElementById('response');
    
    // Aquí puedes agregar lógica para procesar la entrada del usuario
    // Por ahora, simplemente devolveremos un mensaje genérico.
    responseDiv.innerHTML = `<p>Has preguntado: "${userInput}". Esta es una respuesta genérica de Epsilon AI.</p>`;
}
