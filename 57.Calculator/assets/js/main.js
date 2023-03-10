(function() {
    const display = document.querySelector('.display');    
    
    catchButton();
    catchKeyDown();
    catchDisplayKeyUp();

    function addToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function deleteOne() {
        display.value = display.value.slice(0, -1);
    }    
    
    function doMath() {
        try {
            let displayText = display.value.trim();            
            displayText = eval(displayText);

            if (!displayText) {                
                throw new Error('Invalid operators!');
            }

            display.value = String(displayText);
        } catch (error) {
            alert('Invalid operators!');
            clearDisplay();
            return;
        }
    }

    function catchButton() {
        document.addEventListener('click', function(e) {
            const element = e.target;
            const classList = element.classList;
            if (classList.contains('btn-display')) {
                addToDisplay(element.innerText);
            }

            if (classList.contains('btn-clear')) {
                clearDisplay();
            }

            if (classList.contains('btn-delete')) {
                deleteOne();
            }

            if (classList.contains('btn-equal')) {
                doMath();
            }
        });
    };    

    function catchKeyDown() {
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace') {
                deleteOne();
            }            
        })
    }
    
    function catchDisplayKeyUp() {
        display.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                doMath();
            }    
        })
    }    

})();