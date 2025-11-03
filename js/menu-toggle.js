/*!
 * Simple Menu Toggle for existing #menu structure
 * Works with current HTML without changes
 */

(function() {
    'use strict';
    
    let menuToggle = null;
    let menu = null;
    let menuIsOpen = false;
    
    function init() {
        // Only run on mobile devices
        if (window.innerWidth > 767) {
            return;
        }

        // Find the existing menu
        menu = document.getElementById('menu');
        if (!menu) {
            console.warn('Menu element #menu not found');
            return;
        }

        // Create hamburger button if it doesn't exist
        createHamburgerButton();

        // Add logo to navbar
        addLogoToNavbar();

        // Build custom mobile menu with only the 7 specified links
        buildCustomMobileMenu();

        // Setup event listeners
        setupEventListeners();

        console.log('Mobile menu initialized');
    }

    function addLogoToNavbar() {
        // Check if logo already added to navbar
        if (menu.querySelector('.navbar-logo')) return;

        // Create logo container
        const logoContainer = document.createElement('div');
        logoContainer.className = 'navbar-logo';
        logoContainer.style.cssText = 'padding: 10px; text-align: center; background: white;';

        // Create logo element with custom image
        const logo = document.createElement('img');
        logo.src = 'imagenes/KriyaYogaLogo.jpg';
        logo.alt = 'Kriya Yoga de Babaji';
        logo.style.cssText = 'max-width: 100%; height: auto; display: block; margin: 0 auto;';

        logoContainer.appendChild(logo);

        // Insert logo at the beginning of menu
        menu.insertBefore(logoContainer, menu.firstChild);
    }

    function buildCustomMobileMenu() {
        // Get the menu UL element
        const menuUl = menu.querySelector('ul');
        if (!menuUl) return;

        // Check if custom menu already built
        if (menuUl.querySelector('.mobile-menu-item')) return;

        // Clear existing menu items (keep only what we need for mobile)
        // We'll hide the original items and add our custom ones
        const originalItems = menuUl.querySelectorAll('li');
        originalItems.forEach(function(item) {
            item.classList.add('desktop-only-menu-item');
        });

        // Define the 7 custom menu items for mobile
        const mobileMenuItems = [
            { text: 'Kriya Yoga', href: 'kriya.htm', title: 'Kriya Yoga' },
            { text: 'Próximos seminarios', href: 'seminarios.htm', title: 'Seminarios' },
            { text: 'Terapias', href: 'clases.htm', title: 'Terapias' },
            { text: 'Libros y artículos', href: 'articulos.htm', title: 'Libros y artículos' },
            { text: 'Música', href: 'descargas.htm', title: 'Música' },
            { text: 'Linaje de Kriya Yoga', href: '18siddhas.htm', title: 'La tradición de los 18 Siddhas' },
            { text: 'Nityananda - Contacto', href: 'contacto.htm', title: 'Contacto' }
        ];

        // Add custom mobile menu items
        mobileMenuItems.forEach(function(item) {
            const li = document.createElement('li');
            li.className = 'mobile-menu-item';

            const link = document.createElement('a');
            link.href = item.href;
            link.title = item.title;
            link.textContent = item.text;

            li.appendChild(link);
            menuUl.appendChild(li);
        });
    }
    
    function createHamburgerButton() {
        // Check if button already exists
        if (document.querySelector('.menu-toggle')) {
            menuToggle = document.querySelector('.menu-toggle');
            return;
        }
        
        // Create hamburger button
        menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.setAttribute('aria-label', 'Toggle menu');
        menuToggle.innerHTML = '<span></span><span></span><span></span>';
        
        // Insert the button into the menu
        menu.insertBefore(menuToggle, menu.firstChild);
    }
    
    function setupEventListeners() {
        // Toggle button click
        if (menuToggle) {
            menuToggle.addEventListener('click', handleToggleClick);
        }
        
        // Close on window resize
        window.addEventListener('resize', handleResize);
        
        // Close when clicking outside
        document.addEventListener('click', handleOutsideClick);
    }
    
    function handleToggleClick(event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (menuIsOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    function handleResize() {
        if (window.innerWidth > 767 && menuIsOpen) {
            closeMenu();
        } else if (window.innerWidth <= 767) {
            // Reinitialize if needed
            if (!menuToggle) {
                init();
            }
        }
    }
    
    function handleOutsideClick(event) {
        if (!menuIsOpen) return;
        
        if (menu && !menu.contains(event.target)) {
            closeMenu();
        }
    }
    
    function openMenu() {
        if (menuIsOpen || !menu) return;
        
        menu.classList.add('menu-active');
        menuToggle.classList.add('active');
        menuIsOpen = true;
    }
    
    function closeMenu() {
        if (!menuIsOpen || !menu) return;
        
        menu.classList.remove('menu-active');
        menuToggle.classList.remove('active');
        menuIsOpen = false;
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Re-initialize on resize for responsive behavior
    window.addEventListener('resize', function() {
        setTimeout(init, 100);
    });
    
})();