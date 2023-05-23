function random(min = 1, max = 3) {
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

const promises = [
    //'Value',
    wait('Promise 1', 3000),
    wait('Promise 2', 500),
    wait('Promise 3', 1000),
    //wait(1000, 1000),
    //'Another value'
];

Promise.all(promises)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });

Promise.race(promises)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });

function downloadPage() {
    const onCache = true;

    if(onCache) {
        return Promise.resolve('Page on cache');
        //return Promise.reject('Page on cache');
    } else {
        return wait('Downloaded page', 2000)
    }
}

downloadPage()
    .then((pageContent) => {
        console.log(pageContent);
    })
    .catch((e) => console.log('ERROR:', e));