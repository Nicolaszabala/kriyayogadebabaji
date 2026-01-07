/*!
 * Desktop Toggle Button for Kriya Yoga de Babaji
 * Version: 1.0.0
 * Manages floating toggle button for desktop version switching
 */

(function() {
  'use strict';

  // ==========================================
  // DETECTION
  // ==========================================

  function isDesktop() {
    return window.innerWidth >= 768;
  }

  function isOldDesktopPreferred() {
    return localStorage.getItem('preferOldDesktop') === 'true';
  }

  // ==========================================
  // BUTTON CREATION
  // ==========================================

  function createToggleButton() {
    // Verificar si ya existe
    let btn = document.getElementById('desktop-version-toggle');
    if (btn) {
      updateButtonText(btn);
      return btn;
    }

    // Crear botón flotante
    btn = document.createElement('button');
    btn.id = 'desktop-version-toggle';
    btn.className = 'desktop-floating-toggle';

    // Texto según estado actual
    updateButtonText(btn);

    // Agregar al body
    document.body.appendChild(btn);

    // Event listener
    btn.addEventListener('click', handleToggle);

    console.log('✅ Desktop toggle button created');

    return btn;
  }

  function updateButtonText(btn) {
    const isOld = isOldDesktopPreferred();
    btn.textContent = isOld ? 'Ver Versión Nueva' : 'Ver Versión Antigua';
    btn.setAttribute('aria-label', isOld ? 'Cambiar a versión nueva' : 'Cambiar a versión antigua');
  }

  // ==========================================
  // TOGGLE HANDLER
  // ==========================================

  function handleToggle(e) {
    e.preventDefault();

    const currentlyOld = isOldDesktopPreferred();

    console.log(`🔄 Toggling desktop version: ${currentlyOld ? 'OLD → NEW' : 'NEW → OLD'}`);

    if (currentlyOld) {
      // Cambiar a versión NUEVA
      localStorage.removeItem('preferOldDesktop');
      console.log('✨ Switching to NEW desktop layout');
    } else {
      // Cambiar a versión ANTIGUA
      localStorage.setItem('preferOldDesktop', 'true');
      console.log('📜 Switching to OLD desktop layout');
    }

    // Scroll al top antes de recargar
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });

    // Pequeño delay para mejor UX
    setTimeout(function() {
      location.reload();
    }, 100);
  }

  // ==========================================
  // INITIALIZATION
  // ==========================================

  function init() {
    if (!isDesktop()) {
      console.log('📱 Mobile device, skipping desktop toggle button');
      return;
    }

    console.log('🖥️ Desktop detected, creating toggle button');
    createToggleButton();
  }

  // Ejecutar al cargar DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Actualizar en resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      const btn = document.getElementById('desktop-version-toggle');

      if (isDesktop()) {
        if (!btn) {
          createToggleButton();
        }
      } else {
        if (btn) {
          btn.remove();
        }
      }
    }, 250);
  });

})();
