/*!
 * Version Preference Handler
 * Restores user's version preference (mobile vs web) from localStorage
 * Must be included in ALL pages to maintain preference across navigation
 */

(function() {
    'use strict';

    // Detectar si es un dispositivo móvil real (no cambia con viewport)
    function isActualMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               (window.innerWidth <= 767);
    }

    function disableResponsiveCss() {
        const responsiveCss = document.querySelector('link[href*="responsive.css"]');
        if (responsiveCss) {
            responsiveCss.disabled = true;
        }
    }

    function enableResponsiveCss() {
        const responsiveCss = document.querySelector('link[href*="responsive.css"]');
        if (responsiveCss) {
            responsiveCss.disabled = false;
        }
    }

    function showWebVersionToggle() {
        // Limpiar cualquier botón existente para evitar duplicados
        const existingButton = document.getElementById('floating-version-toggle');
        if (existingButton) {
            existingButton.remove();
        }

        // Scroll al top cuando se muestra versión web
        window.scrollTo(0, 0);

        // Ajustar altura del contenedor escalado
        function adjustScaledHeight() {
            const contenedor = document.getElementById('contenedor');
            if (contenedor) {
                // Obtener la altura real del contenedor SIN el efecto del scale
                const realHeight = contenedor.scrollHeight;
                const scale = 0.38;

                // Calcular la altura escalada
                const scaledHeight = realHeight * scale;

                // Aplicar la altura al body para eliminar espacio en blanco
                document.body.style.minHeight = scaledHeight + 'px';
                document.body.style.height = 'auto';
                document.body.style.overflow = 'visible';
                document.documentElement.style.minHeight = scaledHeight + 'px';
                document.documentElement.style.height = 'auto';
                document.documentElement.style.overflow = 'visible';

                // Forzar que el contenedor no genere espacio extra
                contenedor.style.marginBottom = '0';
                contenedor.style.paddingBottom = '0';
            }
        }

        // Esperar a que las imágenes y todo el contenido cargue
        window.addEventListener('load', function() {
            setTimeout(adjustScaledHeight, 100);
            setTimeout(adjustScaledHeight, 500);
        });

        // Ajustar inmediatamente también
        setTimeout(adjustScaledHeight, 100);

        // Crear botón flotante (los estilos están en version-toggle.css que NO se desactiva)
        const toggleButton = document.createElement('button');
        toggleButton.id = 'floating-version-toggle';
        toggleButton.textContent = 'Ver Versión Móvil';
        document.body.appendChild(toggleButton);

        toggleButton.addEventListener('click', function(e) {
            // Limpiar preferencia
            localStorage.removeItem('preferWebVersion');
            document.body.classList.remove('prefer-web-version');

            // Esperar un momento para asegurar que se guardó el cambio
            setTimeout(function() {
                location.reload();
            }, 50);
        });
    }

    function init() {
        const preferWebVersion = localStorage.getItem('preferWebVersion');
        const actuallyMobile = isActualMobileDevice();

        // Si NO hay preferencia de versión web, habilitar responsive.css
        if (preferWebVersion !== 'true') {
            enableResponsiveCss();
        }

        // Restaurar preferencia de versión desde localStorage
        if (preferWebVersion === 'true' && actuallyMobile) {
            document.body.classList.add('prefer-web-version');

            // DESACTIVAR responsive.css para versión web
            disableResponsiveCss();

            // Esperar a que el DOM esté listo antes de crear el botón
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    showWebVersionToggle();
                });
            } else {
                // DOM ya está listo
                showWebVersionToggle();
            }
        }
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
