class Secundaria{
    ejercicio1(opcion) {
        let resp,msg=""
        resp = document.getElementById("resp")
        if ( opcion ==="1"){
            msg += "Respuesta correcta:😉" +  "<br>"
            msg += opcion + " El numero 3 se repite una vez en la secuencia" + "<br>"
        }else{
            msg += "Respuesta incorrecta:" + "<br>"
            msg += opcion + " Intente otra vez por favor :D" + "<br>"
        }
        resp.innerHTML = msg
    }
    ejercicio2(){
        let num,resp,msg="",i,suma=0
        num = document.getElementById("numero").value
        resp = document.getElementById("resp")

        if (num > 0) {
            for (i = 1; i <= num; i++) {
                suma = suma + i
                if (i === 1) {
                    msg += "Explicacion del ejercicio" + "<br>"
                    msg += i
                } else {
                    msg += " + " + i
                }
            }
            msg += " = " + suma + "<br>"
            msg += "La suma de todos los números naturales hasta es: " + suma + "<br>"
        } else {
            msg += "Por favor, ingresa un número entero positivo."
        }
        resp.innerHTML=msg
    }
    ejercicio3(){
        let num,resp,msg="",i,factorial = 1
        num = document.getElementById("numero").value
        resp = document.getElementById("resp")

        if (num > 0) {
            for (i = 1; i <= num; i++) {
                factorial = factorial * i
                if (i === 1) {
                    msg += "Explicacion del ejercicio" + "<br>"
                    msg += i
                } else {
                    msg += " * " + i
                }
            }
            msg += " = " + factorial + "<br>"
            msg += "El factorial de " + num + " es: " + factorial
        } else {
            msg += "Por favor, ingresa un número entero positivo mayor que 0."
        }
        resp.innerHTML=msg
    }
    ejercicio4() {
        let num1, num2,resp,msg="",i,pares = "",impares = ""
        num1 = document.getElementById("numero1").value
        num1 = parseInt(num1)
        num2 = document.getElementById("numero2").value
        num2 = parseInt(num2)
        resp = document.getElementById("resp")

        for (i = num1; i <= num2; i++) {
            if (i % 2 === 0) {
                pares += i + " "
            } else {
               impares += i + " "
            }
        }
        msg += "Pares: " + pares + "<br>"
        msg += "Impares: " + impares + "<br>"
        msg += "Muestra los numeros pares y impares desde: " + num1 + " hasta :" + num2 + "<br>"
        msg += "Ejemplo: 3 y 9 muestra los numeros pares 4,6,8 y impares 3,5,7,9 hasta el 9 "+ "<br>"
        resp.innerHTML = msg
    }
    ejercicio5(){
        let num,resp,msg="",i
        num = document.getElementById("numero").value
        num = parseInt(num)
        resp = document.getElementById("resp")
            for (i = 1; i <= 10; i++) {
                msg += num + " * " + i + " = " + (num * i) + "<br>"
            }
            msg +="El usuario ingresa cualquier numero y automaticamente el programa muestra la tabla del numero que ingreso hasta el 10"

        resp.innerHTML = msg;
    }
    ejercicio6(){
        let num, resp, msg = "", a = 0, b = 1, resul
            num = document.getElementById("numero").value
            resp = document.getElementById("resp")

            if (num > 0) {
                msg += "0"
                if (num > 1) {
                    msg += ", 1"
                }
                for (let i = 2; i < num; i++) {
                    resul = a + b
                    a = b
                    b = resul
                    msg += ", " + resul
                }
                msg = "Los primeros " + num + " números de la secuencia de Fibonacci son: " + msg
            } else {
                msg = "Por favor, ingresa un número entero positivo."
            }
            resp.innerHTML = msg
    }
    ejercicio7() {
        let nums = document.getElementById("numero").value.split(",");
        let resp = document.getElementById("resp");
        let msg = "";

        nums.forEach(numStr => {
            let num = parseInt(numStr.trim());
            if (isNaN(num)) {
                msg += numStr.trim() + " no es un número válido.<br>";
            } else if (num <= 1) {
                msg += "El número " + num + " no es primo.<br>";
            } else {
                let esPrimo = true;
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) {
                        esPrimo = false;
                        break;
                    }
                }
                if (esPrimo) {
                    msg += "El número " + num + " es primo.<br>";
                } else {
                    msg += "El número " + num + " no es primo.<br>";
                }
            }
        });

        msg += "Los números primos son aquellos que solo son divisibles por ellos mismos.<br>";
        msg += "Si se intenta dividir por otro número nunca dará una cifra exacta salvo que se divida por 1 o por sí mismo.<br>";

        resp.innerHTML = msg;
    }

    ejercicio8(){
        let numeros,num, resp, msg = "", i, j, sumaDivisores=0
        numeros = document.getElementById("numero").value.split(',')
        resp = document.getElementById("resp");

        for ( num of numeros) {
            num = parseInt(num)
            

            if (num > 0) {
                for (i = 1; i < num; i++) {
                    if (num % i === 0) {
                        sumaDivisores += i;
                    }
                }

                if (sumaDivisores === num) {
                    msg += "El número " + num + " es un número perfecto." + "<br>";
                } else {
                    msg += "El número " + num + " no es un número perfecto." + "<br>";
                }
            } else {
                msg += "Por favor, ingresa un número entero positivo mayor que 0 para " + num + ".<br>";
            }
        }

        msg += "Los números perfectos son aquellos iguales a la suma de sus divisores: " + "<br>";
        msg += "Ejemplo: 6 se puede dividir por 1, 2 y 3, y cuando sumas esos números, el resultado es 6." + "<br>";

        resp.innerHTML = msg
    }
        ejercicio9() {
            const palabras = ["javascript", "programacion", "computadora", "desarrollo", "web"];
            let palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
            let intentosMaximos = 3;
            let intentos = 0;
            let letrasUtilizadas = [];
            let palabraOculta = '_'.repeat(palabraSeleccionada.length);
            const letrasAbecedario = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
            const palabraDiv = document.getElementById('palabra');
            const intentosDiv = document.getElementById('intentos-restantes');
            const letrasDiv = document.getElementById('letras');
            const resultadoDiv = document.getElementById('resultado');
            const botonesDiv = document.getElementById('botones');
    
            palabraDiv.textContent = palabraOculta;
            intentosDiv.textContent = intentosMaximos - intentos;
            letrasDiv.textContent = letrasUtilizadas.join(', ');
    
            letrasAbecedario.forEach(letra => {
                const button = document.createElement('button');
                button.textContent = letra.toUpperCase();
                button.addEventListener('click', function () {
                    if (intentos < intentosMaximos && palabraOculta !== palabraSeleccionada) {
                        if (!letrasUtilizadas.includes(letra)) {
                            letrasUtilizadas.push(letra);
                            letrasDiv.textContent = letrasUtilizadas.join(', ');
    
                            if (palabraSeleccionada.includes(letra)) {
                                let nuevaPalabraOculta = '';
                                for (let i = 0; i < palabraSeleccionada.length; i++) {
                                    if (palabraSeleccionada[i] === letra) {
                                        nuevaPalabraOculta += letra;
                                    } else {
                                        nuevaPalabraOculta += palabraOculta[i];
                                    }
                                }
                                palabraOculta = nuevaPalabraOculta;
                                palabraDiv.textContent = palabraOculta;
    
                                if (palabraOculta === palabraSeleccionada) {
                                    resultadoDiv.textContent = `¡Felicidades! ¡Has adivinado la palabra '${palabraSeleccionada}' correctamente!`;
                                }
                            } else {
                                intentos++;
                                intentosDiv.textContent = intentosMaximos - intentos;
    
                                if (intentos >= intentosMaximos) {
                                    resultadoDiv.textContent = `¡Oh no! Has agotado tus intentos. La palabra era '${palabraSeleccionada}'.`;
                                }
                            }
                        }
                    }
                });
                botonesDiv.appendChild(button);
            });
        }
}
let secundaria = new Secundaria()