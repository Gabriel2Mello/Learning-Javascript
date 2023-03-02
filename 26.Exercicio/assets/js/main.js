function mainFunction () {
    const form = document.querySelector('.form');    

    function eventForm () {
        const peso = Number(form.querySelector('#peso').value);
        const altura = Number(form.querySelector('#altura').value);

        const IMC = () => (peso / altura ** 2).toFixed(2);

        if (isNaN(peso) || peso <= 1) {
            return setResult('Peso inválido', false);
        }

        if (isNaN(altura) || altura <=1) {
            return setResult('Altura inválida', false);
        }

        return setResult(IMC(), true);
    }

    function setResult (message, isValid) {
        const result = document.querySelector('.resultado');
        result.innerHTML = '';

        const p = document.createElement('p');
        p.classList.add('p-result');

        if (isValid)
            p.classList.add('green');
        else
            p.classList.add('red');
        
        p.innerHTML = message;
        result.appendChild(p);
    }

    form.addEventListener('submit', event => event.preventDefault());
    form.addEventListener('submit', eventForm)
}

mainFunction();