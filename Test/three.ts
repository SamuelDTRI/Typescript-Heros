// Aserciones de tipos
// Anotacion tener en cuenta que typescript no siempre sabe de html y tenemos que decirle que va a recibir

const canvas = document.getElementById("canvas")  //aca bien podemos tener canvas o cualquier otro tipo de etiqueta

if (canvas instanceof HTMLCanvasElement) {  //Typescript deduce que canvas es un HTMLCanvasElement con esta instancia
  const ctx = canvas.getContext("2d");
}
