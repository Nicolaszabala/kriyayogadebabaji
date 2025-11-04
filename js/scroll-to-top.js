/*!
 * Scroll to Top Button
 * Only active on mobile (<768px)
 */

(function() {
    'use strict';

    // Solo ejecutar en mobile
    function isMobile() {
        return window.innerWidth <= 767;
    }

    if (!isMobile()) {
        return;
    }

    // Crear botón
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scroll-to-top';
    scrollButton.innerHTML = '↑';
    scrollButton.setAttribute('aria-label', 'Volver arriba');
    scrollButton.style.display = 'none';

    // Agregar al body cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.appendChild(scrollButton);
        });
    } else {
        document.body.appendChild(scrollButton);
    }

    // Mostrar/ocultar botón al hacer scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);

        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Scroll suave al hacer click
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Ocultar botón si se redimensiona a desktop
    window.addEventListener('resize', function() {
        if (!isMobile()) {
            scrollButton.style.display = 'none';
        }
    });

})();
