/*!
 * Menu Toggle JavaScript
 * Hamburger menu functionality for Kriya Yoga de Babaji website
 */

(function() {
    'use strict';
    
    // Variables globales
    let navbarToggle = null;
    let navbarCollapse = null;
    let menuIsOpen = false;
    
    // Configuración
    const CONFIG = {
        toggleClass: 'active',
        bodyClass: 'menu-open',
        breakpoint: 768,
        animationDuration: 300,
        closeOnResize: true,
        closeOnOutsideClick: true,
        enableKeyboard: true
    };
    
    /**
     * Inicialización cuando el DOM está listo
     */
    function init() {
        // Buscar elementos del menú
        navbarToggle = document.querySelector('.navbar-toggle');
        navbarCollapse = document.querySelector('.navbar-collapse');
        
        // Verificar que los elementos existen
        if (!navbarToggle || !navbarCollapse) {
            console.warn('Menu elements not found. Hamburger menu disabled.');
            return;
        }
        
        // Configurar event listeners
        setupEventListeners();
        
        // Configurar estado inicial
        setupInitialState();
        
        console.log('Hamburger menu initialized successfully.');
    }
    
    /**
     * Configurar todos los event listeners
     */
    function setupEventListeners() {
        // Click en el botón hamburguesa
        navbarToggle.addEventListener('click', handleToggleClick);
        
        // Click fuera del menú (si está habilitado)
        if (CONFIG.closeOnOutsideClick) {
            document.addEventListener('click', handleOutsideClick);
        }
        
        // Redimensionar ventana (si está habilitado)
        if (CONFIG.closeOnResize) {
            window.addEventListener('resize', handleWindowResize);
        }
        
        // Soporte para teclado (si está habilitado)
        if (CONFIG.enableKeyboard) {
            document.addEventListener('keydown', handleKeyDown);
        }
        
        // Clicks en enlaces del menú
        const menuLinks = navbarCollapse.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', handleMenuLinkClick);
        });
    }
    
    /**
     * Configurar estado inicial
     */
    function setupInitialState() {
        // Asegurar que el menú esté cerrado al cargar
        closeMenu();
        
        // Marcar el enlace activo basado en la URL actual
        markActiveLink();
    }
    
    /**
     * Manejar click en el botón toggle
     */
    function handleToggleClick(event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (menuIsOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    /**
     * Manejar click fuera del menú
     */
    function handleOutsideClick(event) {
        if (!menuIsOpen) return;
        
        // Si el click fue en el toggle o dentro del menú, no hacer nada
        if (navbarToggle.contains(event.target) || 
            navbarCollapse.contains(event.target)) {
            return;
        }
        
        closeMenu();
    }
    
    /**
     * Manejar redimensionado de ventana
     */
    function handleWindowResize() {
        // Si la ventana es más ancha que el breakpoint, cerrar menú
        if (window.innerWidth > CONFIG.breakpoint && menuIsOpen) {
            closeMenu();
        }
    }
    
    /**
     * Manejar teclas (Escape para cerrar)
     */
    function handleKeyDown(event) {
        if (event.key === 'Escape' && menuIsOpen) {
            closeMenu();
            navbarToggle.focus(); // Devolver focus al botón
        }
    }
    
    /**
     * Manejar click en enlaces del menú
     */
    function handleMenuLinkClick(event) {
        // En móvil, cerrar el menú después de hacer click
        if (window.innerWidth <= CONFIG.breakpoint && menuIsOpen) {
            // Pequeño delay para que se vea la selección
            setTimeout(() => {
                closeMenu();
            }, 150);
        }
    }
    
    /**
     * Abrir el menú
     */
    function openMenu() {
        if (menuIsOpen) return;
        
        navbarToggle.classList.add(CONFIG.toggleClass);
        navbarCollapse.classList.add(CONFIG.toggleClass);
        document.body.classList.add(CONFIG.bodyClass);
        
        // Accesibilidad
        navbarToggle.setAttribute('aria-expanded', 'true');
        navbarCollapse.setAttribute('aria-hidden', 'false');
        
        menuIsOpen = true;
        
        // Focus management
        focusFirstMenuItem();
        
        // Dispatch custom event
        dispatchMenuEvent('menuOpen');
    }
    
    /**
     * Cerrar el menú
     */
    function closeMenu() {
        if (!menuIsOpen) return;
        
        navbarToggle.classList.remove(CONFIG.toggleClass);
        navbarCollapse.classList.remove(CONFIG.toggleClass);
        document.body.classList.remove(CONFIG.bodyClass);
        
        // Accesibilidad
        navbarToggle.setAttribute('aria-expanded', 'false');
        navbarCollapse.setAttribute('aria-hidden', 'true');
        
        menuIsOpen = false;
        
        // Dispatch custom event
        dispatchMenuEvent('menuClose');
    }
    
    /**
     * Enfocar el primer elemento del menú
     */
    function focusFirstMenuItem() {
        const firstLink = navbarCollapse.querySelector('a');
        if (firstLink && window.innerWidth <= CONFIG.breakpoint) {
            setTimeout(() => {
                firstLink.focus();
            }, CONFIG.animationDuration);
        }
    }
    
    /**
     * Marcar enlace activo basado en la URL
     */
    function markActiveLink() {
        const currentPath = window.location.pathname;
        const menuLinks = navbarCollapse.querySelectorAll('a');
        
        menuLinks.forEach(link => {
            link.classList.remove('active');
            
            const linkPath = link.getAttribute('href');
            if (linkPath && (currentPath === linkPath || 
                (currentPath === '/' && linkPath === 'index.htm') ||
                (currentPath.endsWith(linkPath)))) {
                link.classList.add('active');
            }
        });
    }
    
    /**
     * Dispatch custom menu events
     */
    function dispatchMenuEvent(eventType) {
        const event = new CustomEvent(eventType, {
            detail: {
                toggle: navbarToggle,
                menu: navbarCollapse,
                isOpen: menuIsOpen
            }
        });
        document.dispatchEvent(event);
    }
    
    /**
     * API público para control externo
     */
    window.HamburgerMenu = {
        open: openMenu,
        close: closeMenu,
        toggle: function() {
            if (menuIsOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        },
        isOpen: function() {
            return menuIsOpen;
        },
        destroy: function() {
            if (navbarToggle) {
                navbarToggle.removeEventListener('click', handleToggleClick);
            }
            document.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('resize', handleWindowResize);
            document.removeEventListener('keydown', handleKeyDown);
            
            closeMenu();
        }
    };
    
    /**
     * Inicialización automática
     */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Debugging en modo desarrollo
    if (window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1') {
        window.menuDebug = {
            config: CONFIG,
            elements: { navbarToggle, navbarCollapse },
            state: { menuIsOpen }
        };
    }
    
})();