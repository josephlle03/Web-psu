function calcularPromedioYModa() {
    const numbersInput = document.getElementById("numero");
    const numbersArray = numbersInput.value.split(",").map(Number);
    let sum = 0;
    let moda = null;
    let frecuenciaMax = 0;
    let frecuencias = {};
  
    for (let num of numbersArray) {
      sum += num;
      if (!frecuencias[num]) {
        frecuencias[num] = 1;
      } else {
        frecuencias[num]++;
      }
      if (frecuencias[num] > frecuenciaMax) {
        frecuenciaMax = frecuencias[num];
        moda = num;
      }
    }
  
    const promedio = sum / numbersArray.length;
    const respuesta = `Promedio: ${promedio}<br>Moda: ${moda}`;
    const resultDiv = document.getElementById("resp");
    resultDiv.innerHTML = respuesta;
}