function mainFunction() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.resultado');

    const pessoas = [];    

    function recebeEventoForm () {
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({ 
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        
        const spaceSeparated = function () { return [nome.value, sobrenome.value, peso.value, altura.value].join(' ') };

        console.log(pessoas);
        result.innerHTML += `<p>${spaceSeparated()}</p>`;
    }

    form.addEventListener('submit', event => event.preventDefault());
    form.addEventListener('submit', recebeEventoForm);
}

mainFunction();