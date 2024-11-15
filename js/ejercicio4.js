const universidad = {
    ejercicio_u4: function() {
        const input = document.getElementById('numero').value;
        const resultDiv = document.getElementById('resp');

        if (/^[01]+$/.test(input)) {
            
            const decimal = parseInt(input, 2);
            resultDiv.textContent = `Decimal: ${decimal}`;
        } else if (/^\d+$/.test(input)) {
         
            const binary = parseInt(input, 10).toString(2);
            resultDiv.textContent = `Binario: ${binary}`;
        } else {
            resultDiv.textContent = 'Por favor, ingrese un número válido.';
        }
    }
};
