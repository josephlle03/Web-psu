function ejercicio_u4() {
    const numbersInput = document.getElementById("numero");
    const numbersArray = numbersInput.value.split(",").map(Number);
    let msg = "";
  
    for (let num of numbersArray) {
      let sum = 0;
      for (let i = 1; i < num; i++) {
        if (num % i === 0) {
          sum += i;
        }
      }
  
      if (sum === num) {
        msg += "El número " + num + " es perfecto.<br>";
      } else {
        msg += "El número " + num + " no es perfecto.<br>";
      }
    }
  
    const resultDiv = document.getElementById("resp");
    resultDiv.innerHTML = msg;
  }