import "./styles.css";

let resultado = document.getElementById("resultado");

//Boton
let btnEnv = document.getElementById("btnEnv");

//Escuchando click del Boton
btnEnv.addEventListener("click", () => {
  let nroDeseadoArreglo: number[] = new Array(3);
  let nro: number;
  let indice: number;

  //Toma los valores del prompt y los guarda en el array "nroDeseadoArreglo"
  for (indice = 0; indice < nroDeseadoArreglo.length; indice++) {
    nro = Number(prompt(`Indique el número que desea incorporar en la posición ${indice}: `));
    nroDeseadoArreglo[indice] = nro;
    // Mostrar al usuario el array y la posicion en la que se encuentra dentro del array
    resultado.innerHTML = `El listado de numeros es ${nroDeseadoArreglo}`;
    console.log(
      `El número en la posición ${indice} es ${nroDeseadoArreglo[indice]}`
    );
      }
      console.log(nroDeseadoArreglo[0])
});
