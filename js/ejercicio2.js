const universidad = {
    ejercicio2: function() {
        const binary = document.getElementById('numero').value.trim();
        const hex = parseInt(binary, 2).toString(16).toUpperCase();
        document.getElementById('resp').textContent = `Hexadecimal: ${hex}`;
    },
    ejercicio2HexToBin: function() {
        const hex = document.getElementById('numero').value.trim();
        const binary = parseInt(hex, 16).toString(2);
        document.getElementById('resp').textContent = `Binario: ${binary}`;
    }
};
