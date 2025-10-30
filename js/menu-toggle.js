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

        // Integrate header links into burger menu (TOP - orden inverso)
        integrateHeaderLinks();

        // Integrate lateral menu into burger menu (BOTTOM)
        integrateLateralMenu();

        // Setup event listeners
        setupEventListeners();

        console.log('Mobile menu initialized');
    }

    function addLogoToNavbar() {
        // Find the original logo
        const originalLogo = document.querySelector('#cabeceraIndex img[name="logo"]');
        if (!originalLogo) return;

        // Check if logo already added to navbar
        if (menu.querySelector('.navbar-logo')) return;

        // Create logo container
        const logoContainer = document.createElement('div');
        logoContainer.className = 'navbar-logo';
        logoContainer.style.cssText = 'padding: 10px; text-align: center; background: white;';

        // Clone the logo
        const logo = document.createElement('img');
        logo.src = originalLogo.src;
        logo.alt = originalLogo.alt || 'Kriya Yoga de Babaji';
        logo.style.cssText = 'max-width: 100%; height: auto; display: block; margin: 0 auto;';

        logoContainer.appendChild(logo);

        // Insert logo at the beginning of menu
        menu.insertBefore(logoContainer, menu.firstChild);
    }

    function integrateHeaderLinks() {
        // Find header links (#cabecera)
        const cabecera = document.getElementById('cabecera');
        if (!cabecera) return;

        // Get the menu UL element
        const menuUl = menu.querySelector('ul');
        if (!menuUl) return;

        // Check if header items already added
        if (menuUl.querySelector('.header-menu-item')) return;

        // Find all links in cabecera
        const headerLinks = cabecera.querySelectorAll('a');
        if (headerLinks.length === 0) return;

        // Add header links at the TOP (orden inverso como pidió el usuario)
        // Los agregamos en orden: Devotional music, Articles in English, Clases y sesiones
        const linksArray = Array.from(headerLinks).reverse();

        linksArray.forEach(function(link) {
            const li = document.createElement('li');
            li.className = 'header-menu-item';
            const newLink = link.cloneNode(true);
            li.appendChild(newLink);
            // Insertar al principio del menú
            menuUl.insertBefore(li, menuUl.firstChild);
        });

        // Add separator after header items
        const separator = document.createElement('li');
        separator.className = 'header-menu-separator';
        separator.style.cssText = 'border-bottom: 1px solid #ddd; margin: 10px 0; padding: 0;';
        // Insertar después de los header items
        const firstNonHeaderItem = menuUl.querySelector('li:not(.header-menu-item)');
        if (firstNonHeaderItem) {
            menuUl.insertBefore(separator, firstNonHeaderItem);
        }
    }

    function integrateLateralMenu() {
        // Find lateral sidebar menu
        const lateral2 = document.getElementById('lateral2');

        if (!lateral2) return;

        // Get the menu UL element
        const menuUl = menu.querySelector('ul');
        if (!menuUl) return;

        // Check if lateral items already added
        if (menuUl.querySelector('.lateral-menu-item')) return;

        // Add a separator before lateral items
        const separator = document.createElement('li');
        separator.className = 'lateral-menu-separator';
        separator.style.cssText = 'border-top: 1px solid #ddd; margin: 10px 0; padding: 0;';
        menuUl.appendChild(separator);

        // Clone and add lateral menu items at the BOTTOM
        const lateralItems = lateral2.querySelectorAll('li > a');
        lateralItems.forEach(function(link) {
            const li = document.createElement('li');
            li.className = 'lateral-menu-item';
            const newLink = link.cloneNode(true);
            li.appendChild(newLink);
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