class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const camposValidos = this.isValid();
        const senhasValidas = this.senhasValidas();        
        if (camposValidos && senhasValidas) {
            alert('Formulário enviado.');            
            console.log(this.formulario);
            this.formulario.submit();
        }        
    }

    senhasValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const confirmaSenha = this.formulario.querySelector('.confirma-senha');

        if (senha.value !== confirmaSenha.value) {
            valid = false;
            this.createError(confirmaSenha, 'Senhas diferentes');
        }

        if (senha.value.length < 6 || senha.value.length > 12){
            this.createError(senha, 'Senha deve ter entre 6 e 12 caracteres');
            valid = false;
        }

        return valid;
    }

    isValid() {
        let valid = true;        

        for (const errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let field of this.formulario.querySelectorAll('.valid')) {
            const label = field.previousElementSibling.innerText;
            if (!field.value) {
                this.createError(field, `Campo "${label.replace(':', '')}" não informado`);
                valid = false;
            }

            if (field.classList.contains('cpf')) {
                if (!this.validaCPF(field)) valid = false;
            }

            if (field.classList.contains('usuario')) {
                if (!this.validaUsuario(field)) valid = false;
            }
        };

        return valid;
    }

    validaUsuario(field) {
        const value = field.value;
        let valid = true;        

        if (value.length < 3 || value.length > 12){
            this.createError(field, 'Usuário deve ter entre 3 e 12 letras/números');
            valid = false;
        }

        if(!value.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'Apenas letras e/ou números');
            valid = false;
        }

        return valid;
    }

    validaCPF(field) {
        const validaCpf = new ValidaCPF(field.value);

        if (!validaCpf.valido()) {
            this.createError(field, 'CPF inválido');
            return false;
        }

        return true;
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');

        field.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();