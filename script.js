const user = document.querySelector('#name')
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')
const passConf = document.querySelector('#passConf')
const cell = document.querySelector('#cell')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (event) => {
    event.preventDefault();
    validateName();
    validateEmail();
    validatePass();
    validetAll();
})

function validateName() {
    if (user.value == '') {
        user.style.border = '2px solid red';
        user.nextElementSibling.innerText = 'Campo obrigatorio*'
        user.classList.remove('verify')
    }
    else {
        user.style.border = '2px solid green';
        user.nextElementSibling.innerText = ''
        user.classList.add('verify')
    }
}

function validateEmail() {
    if (email.value == '') {
        email.style.border = '2px solid red';
        email.nextElementSibling.innerText = 'Campo obrigatorio*'
        email.classList.remove('verify')
    }
    else if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || (email.value.indexOf('.') - email.value.indexOf('@') == 1)) {
        email.style.border = '2px solid red';
        email.nextElementSibling.innerText = 'Use um email válido*'
        email.classList.remove('verify')
    }
    else {
        email.style.border = '2px solid green';
        email.nextElementSibling.innerText = ''
        email.classList.add('verify')
    }
}

function validatePass() {
    if (pass.value.length < 6) {
        pass.style.border = '2px solid red';
        pass.nextElementSibling.innerText = 'Min de 6 caracteres*'
        pass.classList.remove('verify');
    }
    else if (pass.value !== passConf.value) {
        pass.style.border = '2px solid green';
        pass.nextElementSibling.innerText = ''
        pass.classList.remove('verify');
        passConf.nextElementSibling.innerText = 'Senha diferente*'
        passConf.style.border = '2px solid red';
    }
    else {
        pass.style.border = '2px solid green';
        pass.classList.add('verify');
        passConf.style.border = '2px solid green';
        passConf.nextElementSibling.innerText = ''
        
    }
}

function validetAll() {
   let userVerify = user.classList.contains('verify');
   let emailVerify = email.classList.contains('verify');
   let passVerify = pass.classList.contains('verify');

   if (userVerify && emailVerify && passVerify) {
       const h2 = document.querySelector('.sub-title');
       h2.innerText = 'Usuário Cadastrado'
   }
}

cell.addEventListener('keyup', mask)

function mask() {
    if (cell.value.length == 1) {
        let firstNumber = cell.value;
        cell.value = '(';
        cell.value += firstNumber;
    }
    if(cell.value.length == 3) {
        cell.value += ') ';
    }
    if(cell.value.length == 10) {
        cell.value += '-';
    }
};
