fetch('pessoas.json')
    .then(response => response.json())
    .then(json => loadElements(json));

function loadElements(json) {
    const table = document.createElement('table');

    let th = document.createElement('th');
    th.innerText = 'Nome';
    table.appendChild(th);

    th = document.createElement('th');
    th.innerText = 'Idade';
    table.appendChild(th);

    th = document.createElement('th');
    th.innerText = 'E-mail';
    table.appendChild(th);
    
    for (const pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.email;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const result = document.querySelector('.result');
    result.appendChild(table);
}