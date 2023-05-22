class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        if(this.volume >= 10) return;
        if(this.volume === 9) {
            this.volume++;
            return;
        }
        this.volume += 2;
    }

    diminuirVolume() {
        if(this.volume === 0) return;
        this.volume--;
    }

    static trocaPilha() {
        console.log('Pilha trocada.');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

controle1.diminuirVolume();
controle1.aumentarVolume();

console.log(controle1);

ControleRemoto.trocaPilha();