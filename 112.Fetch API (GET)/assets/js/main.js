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
    
    try {
        const response = await fetch(href);
        if (response.status > 300) {                
            throw new Error(`CODE: ${response.status}, MESSAGE: ${response.statusText}`);
        }
    
        const html = await response.text();
    
        loadResult(html);   
    } catch (error) {
        console.log(error);
    }    
}

function loadResult(response) {
    const resultElement = document.querySelector('.result');

    resultElement.innerHTML = response;
}

