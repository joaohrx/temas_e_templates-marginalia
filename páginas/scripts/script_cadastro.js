document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const data_de_nascimento = document.getElementById('data_de_nascimento').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
        nome === '' ||
        email === '' ||
        senha === '' ||
        telefone === '' ||
        endereco === '' ||
        data_de_nascimento === ''
    ) {
        alert('Por favor, preencha todos os campos.');
    } else if (!emailPattern.test(email)) {
        alert('Por favor, insira um email válido.');
    } else {
        alert('Cadastro realizado com sucesso!');
        this.reset();
        window.location.href = 'area_login.html';
    }
});