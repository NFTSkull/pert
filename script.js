// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 20) {
        header.classList.remove('bg-white/90');
        header.classList.add('bg-white/95', 'shadow-md');
    } else {
        header.classList.remove('bg-white/95', 'shadow-md');
        header.classList.add('bg-white/90');
    }
    
    // Parallax effect for hero background (video)
    // Nota: Para videos, solo mantenemos la animación CSS de zoom para mejor rendimiento
    // El parallax se desactiva para videos ya que puede causar problemas de rendimiento
    const hero = document.getElementById('inicio');
    if (hero) {
        const heroBackground = hero.querySelector('.hero-background');
        // Si es un video, no aplicamos parallax adicional (solo la animación CSS)
        if (heroBackground && heroBackground.tagName !== 'VIDEO') {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                heroBackground.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrolled * 0.0005})`;
            }
        }
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value,
            mensaje: document.getElementById('mensaje').value
        };

        // Aquí puedes agregar la lógica para enviar el formulario
        // Por ejemplo, usando fetch para enviar a un endpoint
        console.log('Formulario enviado:', formData);
        
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        
        // Reset form
        contactForm.reset();
    });
}

// Set current year in footer
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Manejar carga del video hero para evitar mostrar imagen fallback
const heroVideo = document.getElementById('hero-video');
if (heroVideo) {
    // Ocultar video inicialmente
    heroVideo.style.opacity = '0';
    
    // Cuando el video puede empezar a reproducirse
    heroVideo.addEventListener('canplaythrough', function() {
        this.style.opacity = '1';
        this.setAttribute('data-loaded', 'true');
    }, { once: true });
    
    // Fallback: mostrar video después de un tiempo si no se carga
    setTimeout(function() {
        if (heroVideo.style.opacity === '0') {
            heroVideo.style.opacity = '1';
            heroVideo.setAttribute('data-loaded', 'true');
        }
    }, 1000);
    
    // Forzar carga del video
    heroVideo.load();
}

