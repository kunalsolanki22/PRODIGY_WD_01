document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('#navbar ul');

    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });

    // Highlight clicked menu item
    document.querySelectorAll('#navbar ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navUl.querySelectorAll('a').forEach(item => {
                item.classList.remove('active');
            });

            // Add active class to clicked link
            this.classList.add('active');

            // Scroll to section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const offsetTop = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('#navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Change Navbar Background Color on Scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Highlight active section link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar ul li a');

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const top = rect.top + window.scrollY;
            const bottom = rect.bottom + window.scrollY;
            const sectionId = section.getAttribute('id');

            if (window.scrollY >= top - 350 && window.scrollY < bottom ) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});


