class Universidad{
    ejercicio1(opcion){
        let num1, num2, resp, msg = ""
        num1 = document.getElementById("numero1").value
        num1 = parseInt(num1)
        num2 = document.getElementById("numero2").value
        num2 = parseInt(num2)
        resp = document.getElementById("resp")
        if (opcion === "Sumar") {
            msg += "La suma es: "+ (num1 + num2)+ "<br>"
            msg += "explicacion: " + num1 + " + " + num2 + " = " + (num1 + num2) + "<br>"
        } 
        if (opcion === "Restar") {
            msg += "La resta es: "+ (num1 - num2)+ "<br>" 
            msg += "explicacion: " + num1 + " - " + num2 + "=" + (num1 - num2) + "<br>"   
        }
        if (opcion === "Multiplicar") {
            msg += "La multiplicacion es: "+ (num1 * num2) + "<br>"
            msg += "explicacion: " + num1 + " * " + num2 + "=" + (num1 * num2) + "<br>"
        } 
        if (opcion === "Dividir") {
            if (num2 !== 0) {
                msg += "La division es: "+ (num1 / num2) + "<br>"
                msg += "explicacion: " + num1 + " / " + num2 + "=" + (num1 / num2) + "<br>"

            } else {
                msg += "No se puede dividir por cero" + "<br>"
            }
        }
        resp.innerHTML = msg
    }
    ejercicio2(){
        let num1, resp, msg = ""
        num1 = document.getElementById("numero").value
        num1 = parseInt(num1)
        resp = document.getElementById("resp")
        if(num1>0){
            for(i<1; i<num1; i++){
                if(i%2==0){
                    msg+=i
            }
            }

        }
        resp.innerHTML = msg
    }
    ejercicio_u1() {
        let text = document.getElementById("text").value.toLowerCase();
        let characters = text.length;
        let vowels = new Set(text.match(/[aeiou]/gi) || []).size;
        let consonants = new Set(text.match(/[bcdfghjklmnñpqrstvwxyz]/gi) || []).size;
        let spaces = (text.match(/\s/g) || []).length;
        let words = (text.match(/\b\w+\b/g) || []).length;
        let digits = (text.match(/\d/g) || []).length;

        document.getElementById("txtCharacters").value = characters;
        document.getElementById("txtVowels").value = vowels;
        document.getElementById("txtConsonants").value = consonants;
        document.getElementById("txtSpaces").value = spaces;
        document.getElementById("txtWords").value = words;
        document.getElementById("txtDigits").value = digits;

        console.log("Characters: ", characters);
        console.log("Vowels: ", vowels);
        console.log("Consonants: ", consonants);
        console.log("Spaces: ", spaces);
        console.log("Words: ", words);
        console.log("Digits: ", digits);
    }
    ejercicio_u2() {
        let text = document.getElementById("text_2").value;
        let inverted = text.split("").reverse().join("");
        document.getElementById("txtInverted").value = inverted;
    }
    ejercicio_u3() {
        let phrase1 = document.getElementById("phrase1").value.trim();
        let phrase2 = document.getElementById("phrase2").value.trim();
        let words1 = phrase1.split(/\s+/).filter(word => word).length;
        let words2 = phrase2.split(/\s+/).filter(word => word).length;
        let largestPhrase = "";
        if (words1 > words2) {
            largestPhrase = phrase1;
        } else if (words2 > words1) {
            largestPhrase = phrase2;
        } else {
            largestPhrase = "Ambas frases tienen la misma cantidad de palabras";
        }
        document.getElementById("phrase_largest").value = largestPhrase;
        console.log("Frase 1 palabras: ", words1);
        console.log("Frase 2 palabras: ", words2);
        console.log("Frase más larga: ", largestPhrase);
    }


    ejercicio_u4() {
            const numbersInput = document.getElementById("numero");
            const numbersArray = numbersInput.value.split(",").map(Number);
            const perfectNumbers = [];
            for (let num of numbersArray) {
              let sum = 0;
              for (let i = 1; i < num; i++) {
                if (num % i === 0) {
                  sum += i;
                }
              }
              if (sum === num) {
                perfectNumbers.push(num);
              }
            }
            const resultDiv = document.getElementById("resp");
            resultDiv.innerHTML = `Números perfectos: ${perfectNumbers.join(", ")}`;
          }
}


let universidad = new Universidad