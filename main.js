const form = document.getElementById('form-deposito');
const numeroConta = document.getElementById('numero-conta');
let formEValido = false;

function validaNumeros() {
    const numeroConta = document.getElementById('numero-conta').value;
    const valorDeposito = document.getElementById('valor-deposito').value;
    
    if (numeroConta >= valorDeposito) {
    return false;
    }
    return true; 
}

function validaErrors() {
    const error = document.get.getElementById('error').value;
    if(!error) {
        document.getElementById('error').style.display = "block";
    } else {
        numeroConta.style.border = '1px solid black';
        document.getElementById('error').style.display = "none";
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Deposito feito com sucesso`

    formEValido = validaNumeros(valorDeposito.value)
    if(formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        numeroConta.style.border = 'none';
    } else {
        numeroConta.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

numeroConta.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNumeros(e.target.value);

    if(!formEValido) {
        numeroConta.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numeroConta.style.border = '';
        document.querySelector('.success-message').style.display = 'none';
    }
});

