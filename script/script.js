document.addEventListener('DOMContentLoaded', function () {
    // ======================= ICONS =======================
    feather.replace();

    // ======================= MOBILE NAVIGATION =======================
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        // Change icon to 'x' when menu is open
        const icon = menuToggle.querySelector('i');
        if (mainNav.classList.contains('active')) {
            icon.setAttribute('data-feather', 'x');
        } else {
            icon.setAttribute('data-feather', 'menu');
        }
        feather.replace();
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.querySelector('i').setAttribute('data-feather', 'menu');
                feather.replace();
            }
        });
    });

    // ======================= ACTIVE NAV LINK ON SCROLL =======================
    document.addEventListener('DOMContentLoaded', function () {
        // 1. Renderiza os ícones do Feather ao carregar a página
        feather.replace();

        // 2. Lógica para o menu mobile (hambúrguer)
        const menuToggle = document.querySelector('.menu-toggle');
        const mainNav = document.querySelector('.main-nav');
        const navLinks = document.querySelectorAll('.main-nav a');

        if (menuToggle && mainNav) {
            menuToggle.addEventListener('click', () => {
                mainNav.classList.toggle('active');
                const icon = menuToggle.querySelector('i');
                icon.setAttribute('data-feather', mainNav.classList.contains('active') ? 'x' : 'menu');
                feather.replace(); // Atualiza o ícone
            });
        }

        // 3. Lógica para o comportamento dos links do menu
        navLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                // Fecha o menu mobile se estiver aberto
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    if (menuToggle) {
                        const icon = menuToggle.querySelector('i');
                        icon.setAttribute('data-feather', 'menu');
                        feather.replace();
                    }
                }

                // NOVA LÓGICA: Remove 'active' de todos os links
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                // Adiciona 'active' APENAS ao link que foi clicado
                this.classList.add('active');
            });
        });

        // 4. Lógica para destacar o link ativo no menu durante o SCROLL manual
        const sections = document.querySelectorAll('section');
        window.addEventListener('scroll', () => {
            // Encontra a seção que está visível no topo da página
            let currentSectionId = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                // O valor 61 é um pequeno offset para compensar a altura do header fixo
                if (pageYOffset >= sectionTop - 61) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            // Atualiza a classe 'active' nos links com base na seção visível
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentSectionId) {
                    link.classList.add('active');
                }
            });
        });
    });

    // ======================= SCROLL FADE-IN ANIMATION =======================
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.2, // trigger when 20% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // ======================= CONTACT FORM =======================
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;

        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            contactForm.reset();
            submitButton.textContent = 'Mensagem Enviada!';

            setTimeout(() => {
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }, 3000);
        }, 1500);
    });
});