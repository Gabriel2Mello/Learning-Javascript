axios('pessoas.json')
    .then(response => loadElements(response.data));

function loadElements(json) {
    const table = document.createElement('table');
    createHeader(table);
    
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

function createHeader(ref) {    
    let th = document.createElement('th');
    th.innerText = 'Nome';
    ref.appendChild(th);

    th = document.createElement('th');
    th.innerText = 'Idade';
    ref.appendChild(th);

    th = document.createElement('th');
    th.innerText = 'E-mail';
    ref.appendChild(th);   
}