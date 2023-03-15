let adivinanza = [
  {id: 1, pregunta: "¿De qué país es originario el queso brie?", respuesta: "Francia"},
  {id: 2, pregunta: "¿Cuál es la moneda de México?", respuesta: "Peso mexicano"},
  {id: 3, pregunta: "¿De qué colores es la bandera de Japón?", respuesta: "Blanca y roja"},
  {id: 4, pregunta: "¿En qué ciudad se celebró la primera Semana de la Moda?", respuesta: "Nueva York"},
  {id: 5, pregunta: "¿Qué fruto seco lleva en su interior un Ferrero Rocher?", respuesta: "Avellana"},
  {id: 6, pregunta: "¿Cuántas válvulas tiene un corazón humano?", respuesta: "Cuatro"},
  {id: 7, pregunta: "¿Cuántos elementos forman la Tabla Periódica? (RTA Solo Numeros)", respuesta: "118"},
  {id: 8, pregunta: "En una cerveza ¿qué significa el acrónimo IPA?", respuesta: "Indian Pale Ale"},
  {id: 9, pregunta: "¿Quién pintó la Mona Lisa?", respuesta: "Leonardo da Vinci"},
  {id: 10, pregunta: "¿Qué planeta es el que se encuentra más cerca del Sol?", respuesta: "Mercurio"},
  {id: 11, pregunta: "¿A cuántos kilómetros equivale una milla? (RTA Solo Numeros y punto)", respuesta: "1.6"},
  {id: 12, pregunta: "¿Quién es el líder espiritual del Tibet?", respuesta: "El Dalai Lama"},
  {id: 13, pregunta: "¿A qué mes pertenece el signo de Sagitario?", respuesta: "Diciembre"},
  {id: 14, pregunta: "¿De dónde es originario el mojito?", respuesta: "Cuba"},
  {id: 15, pregunta: "¿De dónde sale el aceite de oliva?", respuesta: "Aceitunas"},
  {id: 16, pregunta: "¿Dónde nació la pizza?", respuesta: "Napoles"},
  {id: 17, pregunta: "¿Cuál es la capital de Kenia?", respuesta: "Nairobi"},
  {id: 18, pregunta: "¿Dónde está el David de Miguel Ángel?", respuesta: "Italia"},
  {id: 19, pregunta: "¿Cristóbal Balenciaga era español o francés?", respuesta: "Español"},
  {id: 20, pregunta: "¿A qué país pertenece la Isla de Pascua?", respuesta: "Chile"},
  {id: 21, pregunta: "¿Cuál es el animal más grande del mundo?", respuesta: "Ballena azul"},
  {id: 22, pregunta: "¿Cuál es el país más grande del mundo?", respuesta: "Rusia"},
  {id: 23, pregunta: "¿Cuál es el lugar más frío de la tierra?", respuesta: "Antartida"},
  {id: 24, pregunta: "¿Cuál es el río más largo del planeta?", respuesta: "Amazonas"},
  {id: 25, pregunta: "¿Dónde se encuentra el museo de Louvre?", respuesta: "En Paris"},
]



  

  let numero_secreto = Math.floor(Math.random() * 24) + 1;
  let pregunta = document.getElementById("pregunta")
  
  
  for (let i = 0; i < adivinanza.length; i++) {
    if (i === numero_secreto) {
      let question = document.createElement("div");
      question.className = "pregunta"
      question.innerHTML = `${adivinanza[i].pregunta}`
      pregunta.append(question);
    }
  }
  
  let enviar = document.getElementById("enviar");
  enviar.addEventListener("click", function() {
  
    let rta = document.getElementById("adivinanza").value;
  
    for (let i = 0; i < adivinanza.length; i++) {
      if ( i === numero_secreto) {
        if (rta === adivinanza[i].respuesta) {
          document.getElementById("resultado").innerHTML = "¡Felicitaciones! Adivinaste🎉🎉🎉"
          enviar.disabled = true;
        } else {
          document.getElementById("resultado").innerHTML = `Incorrecta...😥 Respuesta correcta ${adivinanza[i].respuesta}`;
        }
      }
    }
  });
  

  
  


