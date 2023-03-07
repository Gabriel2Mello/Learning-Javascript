function mainFunction() {
    const mainDiv = document.querySelector('.main-div');
    const paragraths = mainDiv.querySelectorAll('p');

    const stylesBody = getComputedStyle(document.body);
    const backGroudColorBody = stylesBody.backgroundColor;
    
    for (const p of paragraths) {
        p.style.backgroundColor = backGroudColorBody;
        p.style.color = '#FFF';
    }
}

mainFunction();