const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(obj.method, obj.url, true);
        xhr.send(null);
    
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                });
            }
        });
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

async function loadElement(el) {
    const href = el.getAttribute('href');
    
    const objConfig = {
        method: 'GET',
        url: href
    };

    try {    
        const response = await request(objConfig);
        loadResult(response);   
    } catch (error) {
        console.log(`ERROR: ${error.code}, MESSAGE: ${error.msg}`);
    }
}

function loadResult(response) {
    const resultElement = document.querySelector('.result');

    resultElement.innerHTML = response;
}