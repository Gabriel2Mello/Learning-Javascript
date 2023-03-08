function mainFunction () {
    const clock = document.querySelector('.clock');
    const startButton = document.querySelector('.start');
    const stopButton = document.querySelector('.stop');
    const resetButton = document.querySelector('.reset');

    const setTime = (time) => {
        const timeClock = new Date(time * 1000);
        return timeClock.toLocaleTimeString('pt-BR', 
        {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    let pastTime = 0;
    let timeClock;

    function startClock () {      
        clearInterval(timeClock);  
        timeClock = setInterval(function () {  
            pastTime++;
            clock.innerText = setTime(pastTime);            
        }, 1000);
    }

    startButton.addEventListener('click', function(event) {
        startClock();
        startAction();        
    });

    stopButton.addEventListener('click', function(event) {
        clearInterval(timeClock);
        stopAction();        
    });

    resetButton.addEventListener('click', function(event) {
        clearInterval(timeClock);        
        resetAction();
        resetClock();
    });

    function resetClock() {
        pastTime = 0;
        clock.innerText = '00:00:00'
    }

    const startAction = function () {
        clock.classList.add('green');
        clock.classList.remove('red');
        startButton.disabled = true;
        resetButton.disabled = false;
        stopButton.disabled = false;
    }

    const stopAction = function () {
        clock.classList.add('red');
        clock.classList.remove('green');
        startButton.disabled = false;
        resetButton.disabled = false;
        stopButton.disabled = true;
    }

    const resetAction = function () {     
        clock.classList.remove('red');
        clock.classList.remove('green');           
        startButton.disabled = false;
        resetButton.disabled = true;
        stopButton.disabled = true;
    }
}

mainFunction();