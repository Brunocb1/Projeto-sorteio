const resultValue = document.getElementById('button');

function toSpin() {
    const enterInput = document.querySelector('.input-enter');
    const thisInput = document.querySelector('.input-this');

    // Verifica se ambos os números foram adicionados
    if (!enterInput.value || !thisInput.value) {
        alert("Please add both numbers.");
        return; // Retorna imediatamente se a condição não for atendida
    }
    
    const enter = Math.ceil(parseInt(document.querySelector('.input-enter').value));
    const andThis = Math.floor(parseInt(document.querySelector('.input-this').value));

    if (enter >= andThis) {
        alert("The first number must be less than the second number.");
        return; // Retorna imediatamente se a condição não for atendida
    }

    let countdown = 10;

    function updateCountdown() {
        resultValue.innerHTML = countdown;

        // Verifica se a contagem ainda não chegou a zero
        if (countdown > 0) {
            // Decrementa o tempo restante após 1 segundo
            setTimeout(function () {
                countdown--;
                updateCountdown();
            }, 1000);
        } else {
            // Gera e exibe o resultado aleatório
            const result = Math.floor(Math.random() * (andThis - enter + 1)) + enter;
            resultValue.innerHTML = `<span style="color: gold; font-weight: bold;">${result}</span>`;

            // Muda a cor do texto para o dourado quando o resultado aparecer
            resultValue.style.color = 'white';

            setTimeout(function () {
                // Exibe automaticamente um alerta "PARABÉNS" com o resultado
                alert(`CONGRATULATIONS!`);
            }, 500);
        }
        
    }

    // Inicia a contagem regressiva quando a função é chamada
    updateCountdown();
}

// Adiciona um event listener para o clique no botão
document.getElementById('button').addEventListener('click', toSpin);