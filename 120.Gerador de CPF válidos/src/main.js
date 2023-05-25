// npm run dev
import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function() {        
    const geraCPf = new GeraCPF();

    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = geraCPf.geraNovoCpf();

    const copy = document.querySelector('.copy');
    copy.addEventListener('click', () => {
        navigator.clipboard.writeText(cpfGerado.innerHTML);        
        alert('Copied the text: ' + cpfGerado.innerHTML);
    });

    const buttonGerar = document.querySelector('.gerar');
    buttonGerar.addEventListener('click', () => {
        cpfGerado.innerHTML = geraCPf.geraNovoCpf();
    });
})();