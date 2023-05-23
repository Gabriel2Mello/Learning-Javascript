function random(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            if(typeof(msg) !== 'string') {
                reject('Bad value');
                return;
            }

            resolve(msg.toUpperCase() + ' - pass');
            return;
        }, time);
    });
}

// wait('Fase 1', random())
//     .then(value => {
//         console.log(value);
//         return wait('Fase 2', random());
//     })
//     .then(fase => {
//         console.log(fase);
//         return wait('Fase 3', random());
//     })
//     .then(fase => {
//         console.log(fase);
//     })
//     .catch(e => console.log(e));

async function execute() {
    try {
        const fase1 = await wait('Fase 1', random());
        console.log(fase1);
    
        const fase2 = await wait('Fase 2', random());
        //const fase2 = await wait(1, random());
        console.log(fase2);
    
        const fase3 = await wait('Fase 3', random());
        console.log(fase3);
    
        console.log('Done');
    } catch (e) {
        console.log(e);
    }
}

execute();

// Pending, fulfilled, rejected