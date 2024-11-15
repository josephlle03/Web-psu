function verificarPrimos() {
    const numeros = document.getElementById('numero').value.split(',').map(Number);
    const respuesta = numeros.map(num => esPrimo(num) ? `${num} es primo` : `${num} no es primo`).join(', ');
    document.getElementById('resp').textContent = respuesta;
}

function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
