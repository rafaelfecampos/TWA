const nome = document.getElementById('name');
const senha = document.getElementById('senha');
const cadastro = document.getElementById('cadastro');

cadastro.addEventListener('submit', event => {
    event.preventDefault();
    const psw = senha.value;
    if(psw.length < 6 ){
        alert(`${nome.value}, a senha deve ter 6 digitos!`);
    }else{
        cadastro.submit();
    }
    // console.log(nome.value, senha.value);
})