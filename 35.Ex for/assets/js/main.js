function mainFunction () {
    
    const elements = [
        { tag: 'p', text: 'Frase 1' },
        { tag: 'div', text: 'Frase 2' },
        { tag: 'footer', text: 'Frase 3' },
        { tag: 'section', text: 'Frase 4' },
    ]

    const mainDiv = document.createElement('div');

    for (let i = 0; i < elements.length; i++) {        
        const { tag, text } = elements[i];

        const child = document.createElement(tag);
        child.innerText = text;
        mainDiv.appendChild(child);
    }

    document.querySelector('.container').appendChild(mainDiv);    

}

mainFunction();

