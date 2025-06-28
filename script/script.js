document.addEventListener('DOMContentLoaded', function() {
    // ======================= ICONS =======================
    // Garante que os ícones do Feather sejam renderizados
    feather.replace();

    // ======================= MOBILE NAVIGATION =======================
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        const navLinks = mainNav.querySelectorAll('a');

        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Altera o ícone para 'x' quando o menu está aberto
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
        
        // Fecha o menu quando um link é clicado (útil em mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.querySelector('i').setAttribute('data-feather', 'menu');
                    feather.replace();
                }
            });
        });
    }

    // ======================= ACTIVE NAV LINK HIGHLIGHT =======================
    // Pega o nome do arquivo da URL atual (ex: "about.html")
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        // Pega o nome do arquivo do link (ex: "about.html")
        const linkPage = link.getAttribute('href').split('/').pop();

        // Se a página do link for a mesma da URL, adiciona a classe 'active'
        // Trata o caso de "index.html" e a raiz "/" serem a mesma página
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // ======================= CONTACT FORM (se existir na página) =======================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            // Simula o envio do formulário
            setTimeout(() => {
                contactForm.reset();
                submitButton.textContent = 'Mensagem Enviada!';
                
                setTimeout(() => {
                     submitButton.textContent = originalButtonText;
                     submitButton.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
