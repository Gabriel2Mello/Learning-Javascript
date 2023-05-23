function random(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof(msg) !== 'string') reject('Bad value');

        setTimeout(() => {            
            resolve(msg);
        }, time);
    });
}

wait('0', 500)
wait('1', random())
    .then(answer => {
        console.log(answer);
        return wait(2, random());
    })
    .then(answer => {
        console.log(answer);
        return wait('3', random());
    })
    .then(answer => {
        console.log(answer);
    })
    .then(() => {
        console.log('Last one');
    })
    .catch(e => {
        console.log('ERRO:', e);
    });

//wait('3', random());
