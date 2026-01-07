/**
 * LOGS DE DEPURACIÓN PARA SISTEMA DE TOGGLE MOBILE/WEB
 *
 * Este archivo contiene todos los console.logs que se pueden agregar
 * temporalmente a mobile-content.js para debugging.
 *
 * Para usar: copiar y pegar los logs relevantes en las funciones correspondientes.
 */

// ============================================
// FUNCIÓN: enableResponsiveCss()
// ============================================
console.log('enableResponsiveCss() ejecutado - CSS encontrado:', !!responsiveCss, 'disabled antes:', responsiveCss?.disabled);
console.log('CSS disabled después:', responsiveCss.disabled);

// ============================================
// FUNCIÓN: showWebVersionToggle() - Inicio
// ============================================
console.log('showWebVersionToggle() ejecutado');
console.log('Botón existente encontrado, eliminándolo para recrearlo correctamente');
console.log('Botón "Ver Versión Móvil" creado y añadido al DOM');

// ============================================
// FUNCIÓN: showWebVersionToggle() - Click Handler
// ============================================
console.log('=== CLICK EN "VER VERSIÓN MÓVIL" ===');
console.log('localStorage ANTES:', localStorage.getItem('preferWebVersion'));
console.log('body.classList ANTES:', document.body.classList.contains('prefer-web-version'));
console.log('localStorage DESPUÉS:', localStorage.getItem('preferWebVersion'));
console.log('body.classList DESPUÉS:', document.body.classList.contains('prefer-web-version'));
console.log('Ejecutando location.reload()...');

// ============================================
// FUNCIÓN: init()
// ============================================
console.log('=== INIT() EJECUTADO ===');
console.log('preferWebVersion:', preferWebVersion);
console.log('actuallyMobile:', actuallyMobile);
console.log('window.innerWidth:', currentWidth);
console.log('isMobile():', isMobile());
console.log('NO hay preferWebVersion, habilitando responsive.css...');
console.log('SÍ hay preferWebVersion, deshabilitando responsive.css...');
console.log('Activando modo VERSIÓN WEB escalada...');
console.log('Activando modo MOBILE responsive...');
console.log('Modo DESKTOP normal (no hacer nada)');

// ============================================
// DIAGNÓSTICO COMPLETO (Para ejecutar en Console)
// ============================================
console.log('=== DIAGNÓSTICO ===');
console.log('window.innerWidth:', window.innerWidth);
console.log('localStorage preferWebVersion:', localStorage.getItem('preferWebVersion'));
console.log('body.className:', document.body.className);
console.log('responsive.css disabled:', document.querySelector('link[href*="responsive.css"]')?.disabled);
console.log('isMobile() function:', window.innerWidth <= 767);
console.log('=================');

// ============================================
// TEST MANUAL DE HABILITACIÓN CSS (Para Console)
// ============================================
const css = document.querySelector('link[href*="responsive.css"]');
console.log('CSS antes:', css.disabled);
css.disabled = false;
console.log('CSS después:', css.disabled);

// ============================================
// TEST DE BOTÓN (Para Console)
// ============================================
const btn = document.getElementById('floating-version-toggle');
console.log('Botón existe?', !!btn);
console.log('Botón:', btn);
console.log('Listeners:', getEventListeners(btn));

// ============================================
// VERIFICAR ESTADO POST-CLICK (Para Console)
// ============================================
console.log('body styles:', document.body.style.cssText);
console.log('contenedor styles:', document.getElementById('contenedor')?.style.cssText);
console.log('body className:', document.body.className);
console.log('responsive.css disabled:', document.querySelector('link[href*="responsive.css"]')?.disabled);
