const resultValue = document.getElementById('button');

function toSpin() {
    const enter = Math.ceil(parseInt(document.querySelector('.input-enter').value));
    const andThis = Math.floor(parseInt(document.querySelector('.input-this').value));

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

            // Muda a cor do texto para verde quando o resultado aparecer
            resultValue.style.color = 'Blue';
        }
    }

    // Inicia a contagem regressiva quando a função é chamada
    updateCountdown();
}

// Adiciona um event listener para o clique no botão
document.getElementById('button').addEventListener('click', toSpin);