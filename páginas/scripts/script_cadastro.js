/*área de cadastro*/
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
