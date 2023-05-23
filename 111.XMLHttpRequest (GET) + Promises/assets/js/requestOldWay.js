const request = obj => {
    const xhr = new XMLHttpRequest();

    xhr.open(obj.method, obj.url, true);
    xhr.send(null);

    xhr.addEventListener('load', () => {
        const errorTest = false;
        if (xhr.status >= 200 && xhr.status < 300 && errorTest === false) {
            obj.success(xhr.responseText);
        } else {
            obj.error({
                code: xhr.status,
                msg: xhr.statusText
            });
        }
    });
}; 

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        loadElement(el);
    }
});

function loadElement(el) {
    const href = el.getAttribute('href');
    
    request({
        method: 'GET',
        url: href,
        success(response) {
            loadResult(response);
        },
        error(objError) {
            console.log(`Code: ${objError.code}, mensage: ${objError.msg}`);
        }
    });
}

function loadResult(response) {
    const resultElement = document.querySelector('.result');

    resultElement.innerHTML = response;
}