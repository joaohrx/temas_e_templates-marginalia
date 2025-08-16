document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nome === '' || email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
    } else if (!emailPattern.test(email)) {
        alert('Por favor, insira um email válido.');
    } else {
        alert('Formulário enviado com sucesso!');
        this.reset();
        window.location.href = "conta_usuario.html";
}
});