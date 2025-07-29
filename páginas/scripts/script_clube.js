const botao = document.querySelector('.botao-entrar');
botao.addEventListener('click', (e) => {
    e.preventDefault();
    botao.classList.add('clicado');
    botao.innerHTML = '<img src="../assets/checkmark.png" alt="" style="width: 20px; height: 20px;">';
});