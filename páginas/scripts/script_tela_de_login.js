const themeToggleBtn = document.getElementById('theme-toggle');
            const body = document.body;

            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light-theme') { 
                body.classList.add('light-theme'); 
                body.classList.remove('dark-theme'); 
                updateButtonText('light-theme');
            } else { 
                body.classList.add('dark-theme'); 
                body.classList.remove('light-theme'); 
                localStorage.setItem('theme', 'dark-theme'); 
                updateButtonText('dark-theme');
            }

            function updateButtonText(theme) {
                if (theme === 'light-theme') {
                    themeToggleBtn.textContent = 'Modo Escuro'; 
                } else {
                    themeToggleBtn.textContent = 'Modo Claro';  
                }
            }

            themeToggleBtn.addEventListener('click', () => {
                if (body.classList.contains('light-theme')) {
                    body.classList.remove('light-theme');
                    body.classList.add('dark-theme'); 
                    localStorage.setItem('theme', 'dark-theme');
                    updateButtonText('dark-theme');
                } else {
                    body.classList.remove('dark-theme');
                    body.classList.add('light-theme'); 
                    localStorage.setItem('theme', 'light-theme');
                    updateButtonText('light-theme');
                }
            });

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
                    document.getElementById('loginForm').reset();
                }
            });