// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 20) {
        header.style.backgroundColor = 'rgba(47, 46, 42, 0.95)';
        header.classList.add('shadow-lg');
    } else {
        header.style.backgroundColor = '#2F2E2A';
        header.classList.remove('shadow-lg');
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

// Manejar pantalla de carga y video hero
const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');
const heroVideo = document.getElementById('hero-video');

let videoReady = false;
let minLoadTime = 1500; // Tiempo mínimo de carga (1.5 segundos)
let loadStartTime = Date.now();

// Función para ocultar loader y mostrar contenido
function showContent() {
    const elapsedTime = Date.now() - loadStartTime;
    const remainingTime = Math.max(0, minLoadTime - elapsedTime);
    
    setTimeout(function() {
        if (loader) {
            loader.classList.add('hidden');
        }
        if (mainContent) {
            mainContent.classList.add('visible');
        }
        // Habilitar scroll
        document.body.style.overflow = '';
    }, remainingTime);
}

if (heroVideo) {
    // Ocultar video inicialmente
    heroVideo.style.opacity = '0';
    
    // Priorizar carga del video
    heroVideo.setAttribute('preload', 'auto');
    
    // Cuando el video puede empezar a reproducirse
    heroVideo.addEventListener('canplay', function() {
        if (!videoReady) {
            videoReady = true;
            this.style.opacity = '1';
            this.setAttribute('data-loaded', 'true');
            
            // Intentar reproducir
            this.play().catch(function(error) {
                console.log('Autoplay bloqueado:', error);
            });
            
            // Mostrar contenido cuando el video esté listo
            showContent();
        }
    }, { once: true });
    
    // Fallback: cuando el video tiene datos cargados
    heroVideo.addEventListener('loadeddata', function() {
        if (this.readyState >= 2 && !videoReady) { // HAVE_CURRENT_DATA
            setTimeout(() => {
                if (!videoReady) {
                    videoReady = true;
                    this.style.opacity = '1';
                    this.setAttribute('data-loaded', 'true');
                    showContent();
                }
            }, 500);
        }
    }, { once: true });
    
    // Fallback de seguridad: mostrar después de 3 segundos máximo
    setTimeout(function() {
        if (!videoReady && heroVideo) {
            videoReady = true;
            heroVideo.style.opacity = '1';
            heroVideo.setAttribute('data-loaded', 'true');
            showContent();
        }
    }, 3000);
    
    // Forzar carga inmediata del video
    heroVideo.load();
} else {
    // Si no hay video, mostrar contenido después del tiempo mínimo
    showContent();
}

// Prevenir scroll durante la carga
document.body.style.overflow = 'hidden';

