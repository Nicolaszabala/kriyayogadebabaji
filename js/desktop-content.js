/*!
 * Desktop Content Manager for Kriya Yoga de Babaji
 * Version: 1.0.0
 * Manages BOTH old and new desktop layouts using unified-content.js
 *
 * OLD LAYOUT: Maintains original 2-column structure
 * NEW LAYOUT: Modern grid-based responsive design
 */

(function() {
  'use strict';

  // ==========================================
  // DETECTION FUNCTIONS
  // ==========================================

  function isDesktop() {
    return window.innerWidth >= 768;
  }

  function shouldShowOldDesktop() {
    return localStorage.getItem('preferOldDesktop') === 'true';
  }

  // ==========================================
  // OLD DESKTOP LAYOUT INJECTION
  // ==========================================

  function injectOldDesktopContent() {
    const content = window.kriyaContent;
    const helpers = window.kriyaHelpers;

    if (!content || !helpers) {
      console.error('❌ unified-content.js not loaded!');
      return;
    }

    console.log('📄 Injecting OLD desktop content...');

    // CITA DEL DÍA
    injectCitaDelDia();

    // TEXTO BIENVENIDOS (Om Kriya Babaji Nama Aum)
    injectTextoBienvenidos();

    // SEMINARIOS
    injectSeminariosOld();

    // TERAPIAS
    injectTerapiasOld();

    // LIBROS
    injectLibrosOld();

    // MÚSICA
    injectMusicaOld();

    // LINAJE
    injectLinajeOld();

    // CONTACTO
    injectContactoOld();

    // REDES SOCIALES
    injectRedesSocialesOld();

    // COPYRIGHT
    injectCopyrightOld();

    console.log('✅ Old desktop content injected successfully');
  }

  // ------------------------------------------
  // Cita del día (desktop old)
  // ------------------------------------------
  function injectCitaDelDia() {
    const citaDiv = document.getElementById('cita-texto-desktop');
    if (!citaDiv) return;

    const cita = window.kriyaHelpers.getCitaDelDia();
    citaDiv.innerHTML = `<p style="font-style: italic; text-align: center; color: #444;">${cita}</p>`;
  }

  // ------------------------------------------
  // Texto bienvenidos (desktop old)
  // ------------------------------------------
  function injectTextoBienvenidos() {
    const textoDiv = document.getElementById('texto-bienvenidos');
    if (!textoDiv) return;

    textoDiv.textContent = window.kriyaContent.tituloKriyaYoga.mantra;
  }

  // ------------------------------------------
  // Seminarios (desktop old)
  // ------------------------------------------
  function injectSeminariosOld() {
    const content = window.kriyaContent.seminarios;
    const helpers = window.kriyaHelpers;

    const fotoDiv = document.getElementById('fotoSeminarios');
    const textoDiv = document.getElementById('textoSeminarios');

    if (!fotoDiv || !textoDiv) return;

    // Foto
    fotoDiv.innerHTML = `
      <img src="${content.items[0].imagen}"
           alt="${content.items[0].imageAlt}"
           width="230"
           height="230" />
    `;

    // Texto
    textoDiv.innerHTML = `
      <h2>${content.title}</h2>
      <p><b>${content.items[0].tipo}</b> en ${content.items[0].ubicacion}: ${content.items[0].fecha}.</p>
      <p>Más información: <a href="mailto:${content.contacto.email}">${content.contacto.email}</a></p>
      ${buildSimpleContactButtons(content.contacto)}
    `;
  }

  // ------------------------------------------
  // Terapias (desktop old)
  // ------------------------------------------
  function injectTerapiasOld() {
    const content = window.kriyaContent.terapias;

    const fotoDiv = document.getElementById('fotoTerapias');
    const textoDiv = document.getElementById('textoTerapias');

    if (!fotoDiv || !textoDiv) return;

    // Foto (primera terapia como representativa)
    fotoDiv.innerHTML = `
      <img src="${content.items[0].imagen}"
           alt="${content.items[0].imageAlt}"
           width="230"
           height="300" />
    `;

    // Texto
    let terapiasHTML = `<h2>${content.title}</h2>`;
    terapiasHTML += `<p>${content.introduccion}</p>`;

    content.items.forEach(item => {
      terapiasHTML += `<p><strong>${item.titulo}:</strong> ${item.descripcion}</p>`;
    });

    terapiasHTML += `<p>${content.nota}<br>${content.notaContacto} <a href="mailto:${content.contacto.email}">${content.contacto.email}</a>.</p>`;
    terapiasHTML += buildSimpleContactButtons(content.contacto);

    textoDiv.innerHTML = terapiasHTML;
  }

  // ------------------------------------------
  // Libros (desktop old)
  // ------------------------------------------
  function injectLibrosOld() {
    const content = window.kriyaContent.libros;

    const fotoDiv = document.getElementById('fotoLibros');
    const textoDiv = document.getElementById('textoLibros');

    if (!fotoDiv || !textoDiv) return;

    // Foto (primer libro como representativo)
    fotoDiv.innerHTML = `
      <a href="${content.items[0].enlace}" target="_blank">
        <img src="${content.items[0].imagen}"
             alt="${content.items[0].imageAlt}"
             width="230"
             height="300" />
      </a>
    `;

    // Texto con lista de libros
    let librosHTML = `<h2>${content.title}</h2>`;
    librosHTML += `<p>${content.introduccion.texto} <a href="${content.introduccion.enlace}" target="_blank">${content.introduccion.enlace}</a></p>`;
    librosHTML += `<p>${content.subtitulo}</p>`;
    librosHTML += '<ul style="list-style: none; padding-left: 0;">';

    content.items.forEach(item => {
      librosHTML += `
        <li style="margin-bottom: 15px;">
          <strong><a href="${item.enlace}" target="_blank">${item.titulo}</a>:</strong> ${item.descripcion}
        </li>
      `;
    });

    librosHTML += '</ul>';
    librosHTML += `<p>${content.nota.texto} <a href="${content.nota.enlace}" target="_blank">${content.nota.enlace}</a></p>`;

    textoDiv.innerHTML = librosHTML;
  }

  // ------------------------------------------
  // Música (desktop old)
  // ------------------------------------------
  function injectMusicaOld() {
    const content = window.kriyaContent.musica;

    const fotoDiv = document.getElementById('fotoMusica');
    const textoDiv = document.getElementById('textoMusica');

    if (!fotoDiv || !textoDiv) return;

    // Foto (primer álbum)
    fotoDiv.innerHTML = `
      <a href="${content.items[0].enlace}" target="_blank">
        <img src="${content.items[0].imagen}"
             alt="${content.items[0].imageAlt}"
             width="230"
             height="230" />
      </a>
    `;

    // Texto con lista de álbumes
    let musicaHTML = `<h2>${content.title}</h2>`;
    musicaHTML += `<p>${content.introduccion}</p>`;
    musicaHTML += '<ul style="list-style: none; padding-left: 0;">';

    content.items.forEach(item => {
      musicaHTML += `
        <li style="margin-bottom: 10px;">
          <strong><a href="${item.enlace}" target="_blank">${item.titulo}</a></strong>
        </li>
      `;
    });

    musicaHTML += '</ul>';
    musicaHTML += `<p>${content.nota}</p>`;

    textoDiv.innerHTML = musicaHTML;
  }

  // ------------------------------------------
  // Linaje (desktop old)
  // ------------------------------------------
  function injectLinajeOld() {
    const content = window.kriyaContent.linaje;

    const fotoDiv = document.getElementById('fotoLinaje');
    const textoDiv = document.getElementById('textoLinaje');

    if (!fotoDiv || !textoDiv) return;

    // Foto (segundo maestro - Babaji)
    fotoDiv.innerHTML = `
      <img src="${content.items[1].imagen}"
           alt="${content.items[1].imageAlt}"
           width="230"
           height="300" />
    `;

    // Texto con todos los maestros
    let linajeHTML = `<h2>${content.title}</h2>`;
    linajeHTML += `<p>${content.introduccion}</p>`;
    linajeHTML += '<p><strong>Linaje:</strong></p>';
    linajeHTML += '<ul style="list-style: none; padding-left: 20px;">';

    content.items.forEach(item => {
      linajeHTML += `<li>• ${item.nombre}${item.nombreSegundaLinea ? ' ' + item.nombreSegundaLinea : ''}</li>`;
    });

    linajeHTML += '</ul>';
    linajeHTML += `<p>${content.conclusion.texto}</p>`;
    linajeHTML += `<p style="text-align: center;"><img src="${content.conclusion.imagen}" alt="${content.conclusion.imageAlt}" style="max-width: 100%; height: auto;" /></p>`;

    textoDiv.innerHTML = linajeHTML;
  }

  // ------------------------------------------
  // Contacto (desktop old)
  // ------------------------------------------
  function injectContactoOld() {
    const content = window.kriyaContent.contacto;

    const fotoDiv = document.getElementById('fotoContacto');
    const textoDiv = document.getElementById('textoContacto');

    if (!fotoDiv || !textoDiv) return;

    // Foto
    fotoDiv.innerHTML = `
      <img src="${content.imagen}"
           alt="${content.imageAlt}"
           width="230"
           height="300" />
    `;

    // Texto
    let contactoHTML = `<h2>${content.title}</h2>`;
    contactoHTML += `<p>${content.parrafos[0]}<a href="mailto:${content.parrafos[1]}">${content.parrafos[1]}</a>${content.parrafos[2]}</p>`;
    contactoHTML += `<p><em>${content.firma.mantra}</em></p>`;
    contactoHTML += `<p><strong>${content.firma.nombre}</strong></p>`;
    contactoHTML += buildSimpleContactButtons({
      telefono: content.telefono,
      whatsapp: content.whatsapp
    });

    textoDiv.innerHTML = contactoHTML;
  }

  // ------------------------------------------
  // Redes sociales (desktop old)
  // ------------------------------------------
  function injectRedesSocialesOld() {
    const content = window.kriyaContent.redesSociales;
    const container = document.getElementById('redes-sociales-desktop');

    if (!container) return;

    container.innerHTML = `
      <div style="padding: 20px 0; text-align: center;">
        <p><strong>${content.facebook.texto}</strong> <a href="${content.facebook.enlace}" target="_blank">${content.facebook.enlace}</a></p>
        <p><strong>${content.instagram.texto}</strong> <a href="${content.instagram.enlace}" target="_blank">${content.instagram.enlace}</a></p>
      </div>
    `;
  }

  // ------------------------------------------
  // Copyright (desktop old)
  // ------------------------------------------
  function injectCopyrightOld() {
    const content = window.kriyaContent.copyright;
    const container = document.getElementById('copyright-desktop');

    if (!container) return;

    container.innerHTML = `
      <div style="padding: 20px 0; text-align: center; font-size: 14px; color: #666;">
        <p>${content.texto}<a href="${content.desarrollador.enlace}" target="_blank">${content.desarrollador.nombre}</a></p>
      </div>
    `;
  }

  // ------------------------------------------
  // Helper: Botones simples (desktop old style - usa misma estructura)
  // ------------------------------------------
  function buildSimpleContactButtons(contacto) {
    return `
      <div class="mobile-contact-buttons">
        <a href="tel:${contacto.telefono}" class="contact-button phone-button">
          <span>Llamar</span>
        </a>
        <a href="https://wa.me/${contacto.whatsapp}" class="contact-button whatsapp-button" target="_blank">
          <span>Enviar Whatsapp</span>
        </a>
      </div>
    `;
  }

  // ==========================================
  // NEW DESKTOP LAYOUT INJECTION
  // ==========================================

  function injectNewDesktopContent() {
    const content = window.kriyaContent;
    const helpers = window.kriyaHelpers;

    if (!content || !helpers) {
      console.error('❌ unified-content.js not loaded!');
      return;
    }

    console.log('📄 Injecting NEW desktop content...');

    const container = document.getElementById('desktop-noticias-new');
    if (!container) {
      console.error('❌ Container #desktop-noticias-new not found!');
      return;
    }

    let html = '<div class="desktop-new-wrapper">';

    // TOGGLE BUTTON (parte superior derecha)
    html += buildSidebarToggleButton();

    // SIDEBAR (Navegación + Buscador)
    html += buildNewDesktopSidebar();

    // MAIN CONTENT
    html += '<div class="desktop-main-content">';

    // HEADER CON CITA
    html += buildNewDesktopHeader();

    // SEMINARIOS + TERAPIAS (Grid 2 col)
    html += buildNewDesktopSeminariosTerapias();

    // ARTÍCULOS DESTACADOS (Grid 2 col) - NUEVO
    html += buildNewDesktopArticulosDestacados();

    // LIBROS (Grid 3 col)
    html += buildNewDesktopLibros();

    // MÚSICA (Grid 4 col)
    html += buildNewDesktopMusica();

    // LINAJE (Timeline)
    html += buildNewDesktopLinaje();

    // CONTACTO + MAILCHIMP
    html += buildNewDesktopContacto();

    // FOOTER
    html += buildNewDesktopFooter();

    html += '</div>'; // Close desktop-main-content
    html += '</div>'; // Close desktop-new-wrapper

    container.innerHTML = html;

    // Inicializar sliders
    initDesktopTerapiasSlider();
    initDesktopLibrosSlider();

    // Inicializar scroll observer para sidebar
    initSidebarScrollObserver();

    console.log('✅ New desktop content injected successfully');
  }

  function buildNewDesktopHeader() {
    const cita = window.kriyaHelpers.getCitaDelDia();
    return `
      <div class="desktop-new-header">
        <!-- Logo -->
        <div style="text-align: center; padding: 20px 0;">
          <img src="imagenes/KriyaYoga.png" width="922" height="122" alt="Kriya Yoga de Babaji" style="max-width: 100%; height: auto;" />
        </div>

        <!-- Menú superior -->
        <div style="text-align: center; padding: 10px 0; font-size: 16px;">
          <a href="clases.htm" style="margin: 0 10px; color: #AC1429; text-decoration: none;"><b>Clases y sesiones personales</b></a>
          <a href="https://www.kriyayogadebabaji.net/EnglishTexts.htm" style="margin: 0 10px; color: #AC1429; text-decoration: none;">Articles in English</a>
          <a href="Englishdescargas.htm" style="margin: 0 10px; color: #AC1429; text-decoration: none;">Devotional music</a>
        </div>

        <!-- Cita del día -->
        <div class="desktop-cita">
          <div class="cita-icon">✦</div>
          <p class="cita-texto">${cita}</p>
        </div>

        <!-- Menú de navegación principal -->
        <div style="text-align: center; padding: 30px 0 20px 0; font-family: Lato, Helvetica, sans-serif;">
          <a href="kriya.htm" style="margin: 0 5px; color: #AC1429; text-decoration: none; font-size: 17px; font-weight: bold;">KRIYA YOGA</a>
          <span style="color: #AC1429;"> | </span>
          <a href="seminarios.htm" style="margin: 0 5px; color: #AC1429; text-decoration: none; font-size: 17px; font-weight: bold;">SEMINARIOS</a>
          <span style="color: #AC1429;"> | </span>
          <a href="clases.htm" style="margin: 0 5px; color: #AC1429; text-decoration: none; font-size: 17px; font-weight: bold;">CLASES Y SESIONES</a>
          <span style="color: #AC1429;"> | </span>
          <a href="articulos.htm" style="margin: 0 5px; color: #AC1429; text-decoration: none; font-size: 17px; font-weight: bold;">ARTÍCULOS</a>
          <span style="color: #AC1429;"> | </span>
          <a href="libros.htm" style="margin: 0 5px; color: #AC1429; text-decoration: none; font-size: 17px; font-weight: bold;">LIBROS</a>
          <span style="color: #AC1429;"> | </span>
          <a href="contacto.htm" style="margin: 0 5px; color: #AC1429; text-decoration: none; font-size: 17px; font-weight: bold;">CONTACTO</a>
        </div>
      </div>
    `;
  }

  function buildNewDesktopSeminariosTerapias() {
    const seminarios = window.kriyaContent.seminarios;
    const terapias = window.kriyaContent.terapias;

    return `
      <div class="desktop-section-grid-2">
        <!-- SEMINARIOS -->
        <div class="desktop-card">
          <h2>${seminarios.title}</h2>
          <img src="${seminarios.items[0].imagen}" alt="${seminarios.items[0].imageAlt}" style="width: 100%; height: auto; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center;"><strong>${seminarios.items[0].tipo}</strong> en ${seminarios.items[0].ubicacion}: ${seminarios.items[0].fecha}.</p>
          <p style="text-align: center;">Más información: <a href="mailto:${seminarios.contacto.email}">${seminarios.contacto.email}</a></p>
          ${buildNewContactButtons(seminarios.contacto)}
        </div>

        <!-- TERAPIAS -->
        <div class="desktop-card">
          <h2>${terapias.title}</h2>
          <p style="text-align: center;">${terapias.introduccion}</p>

          <!-- Slider de Terapias -->
          <div class="terapias-slider-container desktop-slider-container">
            <div class="terapias-slider desktop-slider">
              ${terapias.items.map(item => `
                <div class="terapias-slide desktop-slide">
                  <img src="${item.imagen}" alt="${item.imageAlt}" />
                  <p class="terapia-description"><strong>${item.titulo}:</strong> ${item.descripcion}</p>
                </div>
              `).join('')}
            </div>
            <div class="slider-dots terapias-dots">
              ${terapias.items.map((_, index) => `
                <button class="slider-dot ${index === 0 ? 'active' : ''}" data-slide="${index}" aria-label="Slide ${index + 1}"></button>
              `).join('')}
            </div>
          </div>

          <p style="text-align: center; margin-top: 20px;">${terapias.nota}<br>${terapias.notaContacto} <a href="mailto:${terapias.contacto.email}">${terapias.contacto.email}</a>.</p>
          ${buildNewContactButtons(terapias.contacto)}
        </div>
      </div>
    `;
  }

  function buildNewDesktopLibros() {
    const libros = window.kriyaContent.libros;

    return `
      <div class="desktop-section-full">
        <h2 style="text-align: center; color: #AC1429; font-size: 28px; margin-bottom: 30px;">${libros.title}</h2>
        <p style="text-align: center; margin-bottom: 20px;">${libros.introduccion.texto} <a href="${libros.introduccion.enlace}" target="_blank">${libros.introduccion.enlace}</a></p>
        <p style="text-align: center; margin-bottom: 40px;">${libros.subtitulo}</p>

        <!-- Slider de Libros -->
        <div class="libros-slider-container desktop-slider-container">
          <div class="libros-slider desktop-slider">
            ${libros.items.map(item => `
              <div class="libros-slide desktop-slide">
                <a href="${item.enlace}" target="_blank">
                  <img src="${item.imagen}" alt="${item.imageAlt}" />
                </a>
                <h3>${item.titulo}</h3>
                <p class="libro-description">${item.descripcion}</p>
              </div>
            `).join('')}
          </div>
          <div class="slider-dots libros-dots">
            ${libros.items.map((_, index) => `
              <button class="slider-dot ${index === 0 ? 'active' : ''}" data-slide="${index}" aria-label="Slide ${index + 1}"></button>
            `).join('')}
          </div>
        </div>

        <p style="text-align: center; margin-top: 30px;">${libros.nota.texto} <a href="${libros.nota.enlace}" target="_blank">${libros.nota.enlace}</a></p>
      </div>
    `;
  }

  function buildNewDesktopMusica() {
    const musica = window.kriyaContent.musica;

    return `
      <div class="desktop-section-full">
        <h2 style="text-align: center; color: #AC1429; font-size: 28px; margin-bottom: 20px;">${musica.title}</h2>
        <p style="text-align: center; margin-bottom: 40px;">${musica.introduccion}</p>

        <div class="desktop-items-grid-4">
          ${musica.items.map(item => `
            <div class="desktop-music-card">
              <a href="${item.enlace}" target="_blank">
                <img src="${item.imagen}" alt="${item.imageAlt}" style="width: 220px; height: 220px; object-fit: cover; border-radius: 12px; box-shadow: 0 6px 16px rgba(0,0,0,0.2); transition: transform 0.3s;" />
              </a>
              <p style="font-size: 16px; margin-top: 10px; text-align: center; font-weight: 600;">${item.titulo}</p>
            </div>
          `).join('')}
        </div>

        <p style="text-align: center; margin-top: 30px;">${musica.nota}</p>
      </div>
    `;
  }

  function buildNewDesktopLinaje() {
    const linaje = window.kriyaContent.linaje;

    return `
      <div class="desktop-section-full">
        <h2 style="text-align: center; color: #AC1429; font-size: 28px; margin-bottom: 20px;">${linaje.title}</h2>
        <p style="text-align: center; margin-bottom: 40px;">${linaje.introduccion}</p>

        <div class="desktop-items-grid-4">
          ${linaje.items.map(item => `
            <div class="desktop-linaje-card">
              <img src="${item.imagen}" alt="${item.imageAlt}" style="width: 220px; height: 300px; object-fit: contain; border-radius: 12px; box-shadow: 0 6px 16px rgba(0,0,0,0.2);" />
              <p style="font-size: 16px; margin-top: 10px; text-align: center; font-weight: 600;">${item.nombre}</p>
              ${item.nombreSegundaLinea ? `<p style="font-size: 16px; margin-top: -8px; text-align: center; font-weight: 600;">${item.nombreSegundaLinea}</p>` : ''}
            </div>
          `).join('')}
        </div>

        <p style="text-align: center; margin: 40px 0 20px;">${linaje.conclusion.texto}</p>
        <div style="text-align: center;">
          <img src="${linaje.conclusion.imagen}" alt="${linaje.conclusion.imageAlt}" style="max-width: 600px; width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
        </div>
      </div>
    `;
  }

  function buildNewDesktopContacto() {
    const contacto = window.kriyaContent.contacto;

    return `
      <div class="desktop-section-grid-2">
        <div class="desktop-card">
          <h2>${contacto.title}</h2>
          <img src="${contacto.imagen}" alt="${contacto.imageAlt}" style="width: 100%; max-width: 300px; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: block; margin: 20px auto;" />
          <p>${contacto.parrafos[0]}<a href="mailto:${contacto.parrafos[1]}">${contacto.parrafos[1]}</a>${contacto.parrafos[2]}</p>
          <p><em>${contacto.firma.mantra}</em></p>
          <p><strong>${contacto.firma.nombre}</strong></p>
          ${buildNewContactButtons({
            telefono: contacto.telefono,
            whatsapp: contacto.whatsapp
          })}
        </div>

        <div class="desktop-card">
          <h2>Suscríbete a nuestra lista de correo</h2>
          <div id="mc_embed_signup">
            <form action="https://kriyayogadebabaji.us12.list-manage.com/subscribe/post?u=55bacb022f217b1910d18333c&amp;id=afecdc6ca1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
                <div class="indicates-required"><span class="asterisk">*</span> requerido</div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL">Email  <span class="asterisk">*</span></label>
                  <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                </div>
                <div class="mc-field-group">
                  <label for="mce-FNAME">Nombre </label>
                  <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
                </div>
                <div class="mc-field-group">
                  <label for="mce-LNAME">Apellido </label>
                  <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
                </div>
                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input type="text" name="b_55bacb022f217b1910d18333c_afecdc6ca1" tabindex="-1" value="">
                </div>
                <div class="clear">
                  <input type="submit" value="Suscribir" name="subscribe" id="mc-embedded-subscribe" class="button">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  // Helper para botones de contacto en versión nueva (igual que mobile)
  function buildNewContactButtons(contacto) {
    return `
      <div class="mobile-contact-buttons">
        <a href="tel:${contacto.telefono}" class="contact-button phone-button">
          <span>Llamar</span>
        </a>
        <a href="https://wa.me/${contacto.whatsapp}" class="contact-button whatsapp-button" target="_blank">
          <span>Enviar Whatsapp</span>
        </a>
      </div>
    `;
  }

  function buildNewDesktopFooter() {
    const social = window.kriyaContent.redesSociales;
    const copyright = window.kriyaContent.copyright;

    return `
      <div class="desktop-new-footer">
        <div style="text-align: center; padding: 20px 0; border-top: 1px solid #E5E5E5; margin-top: 40px;">
          <p><strong>${social.facebook.texto}</strong> <a href="${social.facebook.enlace}" target="_blank">${social.facebook.enlace}</a></p>
          <p><strong>${social.instagram.texto}</strong> <a href="${social.instagram.enlace}" target="_blank">${social.instagram.enlace}</a></p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #E5E5E5;" />
          <p style="font-size: 14px; color: #666;">${copyright.texto}<a href="${copyright.desarrollador.enlace}" target="_blank">${copyright.desarrollador.nombre}</a></p>
        </div>
      </div>
    `;
  }

  // ==========================================
  // SIDEBAR TOGGLE BUTTON
  // ==========================================

  function buildSidebarToggleButton() {
    return `
      <button class="sidebar-toggle-btn" aria-label="Abrir/Cerrar menú lateral">
        <span class="toggle-icon">☰</span>
        <span class="toggle-text">Menú</span>
      </button>
    `;
  }

  // ==========================================
  // SIDEBAR - NAVEGACIÓN Y BUSCADOR
  // ==========================================

  function buildNewDesktopSidebar() {
    const nav = window.kriyaContent.navegacion;
    const buscador = window.kriyaContent.buscador;

    return `
      <aside class="desktop-sidebar">
        <!-- Navegación -->
        <nav class="sidebar-nav">
          <h3>Navegación</h3>
          <ul>
            ${nav.sidebar.map(item => `
              <li><a href="${item.enlace}">${item.texto}</a></li>
            `).join('')}
          </ul>
        </nav>

        <!-- Buscador -->
        <div class="sidebar-search">
          <h3>${buscador.titulo}</h3>
          <form method="GET" action="${buscador.action}">
            <input type="hidden" name="ie" value="UTF-8">
            <input type="hidden" name="oe" value="UTF-8">
            <input type="hidden" name="sitesearch" value="${buscador.sitesearch}">
            <input
              type="text"
              name="q"
              maxlength="255"
              placeholder="${buscador.placeholder}"
              class="search-input"
            />
            <button type="submit" class="search-button">${buscador.boton}</button>
          </form>
        </div>
      </aside>
    `;
  }

  // ==========================================
  // ARTÍCULOS DESTACADOS
  // ==========================================

  function buildNewDesktopArticulosDestacados() {
    const iniciaciones = window.kriyaContent.iniciaciones;
    const shakti = window.kriyaContent.shaktiKundalini;

    return `
      <div class="desktop-section-grid-2">
        <!-- INICIACIONES -->
        <div class="desktop-card">
          <h2>${iniciaciones.title}</h2>
          <a href="${iniciaciones.enlaceSeminarios}">
            <img src="${iniciaciones.imagen}" alt="${iniciaciones.imageAlt}" class="article-image" />
          </a>
          <p>${iniciaciones.texto.replace('Seminarios', `<a href="${iniciaciones.enlaceSeminarios}">Seminarios</a>`).replace('Kriya Yoga. Para', `<a href="${iniciaciones.enlaceKriyaYoga}">Kriya Yoga</a>. Para`)}</p>
        </div>

        <!-- SHAKTI KUNDALINI -->
        <div class="desktop-card">
          <p class="article-label">${shakti.etiqueta}</p>
          <h2><a href="${shakti.enlace}">${shakti.title}</a></h2>
          <a href="${shakti.enlace}">
            <img src="${shakti.imagen}" alt="${shakti.imageAlt}" class="article-image" />
          </a>
          <p>${shakti.texto}</p>
        </div>
      </div>
    `;
  }

  // ==========================================
  // SLIDER INITIALIZATION FUNCTIONS
  // ==========================================

  function initDesktopTerapiasSlider() {
    const slider = document.querySelector('.terapias-slider');
    const dots = document.querySelectorAll('.terapias-dots .slider-dot');

    if (!slider || dots.length === 0) {
      return;
    }

    let currentSlide = 0;
    const totalSlides = dots.length;
    let autoplayInterval;

    function goToSlide(index) {
      currentSlide = index;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;

      // Actualizar dots
      dots.forEach((dot, i) => {
        if (i === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      goToSlide(currentSlide);
    }

    // Click en dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoplay();
      });
    });

    // Autoplay cada 4 segundos
    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoplay() {
      clearInterval(autoplayInterval);
      startAutoplay();
    }

    // Swipe touch support
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      if (touchStartX - touchEndX > 50) {
        // Swipe left
        nextSlide();
        resetAutoplay();
      }
      if (touchEndX - touchStartX > 50) {
        // Swipe right
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
        resetAutoplay();
      }
    }

    startAutoplay();
  }

  function initDesktopLibrosSlider() {
    const slider = document.querySelector('.libros-slider');
    const dots = document.querySelectorAll('.libros-dots .slider-dot');

    if (!slider || dots.length === 0) {
      return;
    }

    let currentSlide = 0;
    const totalSlides = dots.length;
    let autoplayInterval;

    function goToSlide(index) {
      currentSlide = index;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;

      // Actualizar dots
      dots.forEach((dot, i) => {
        if (i === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      goToSlide(currentSlide);
    }

    // Click en dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoplay();
      });
    });

    // Autoplay cada 4 segundos
    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoplay() {
      clearInterval(autoplayInterval);
      startAutoplay();
    }

    // Swipe touch support
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      if (touchStartX - touchEndX > 50) {
        // Swipe left
        nextSlide();
        resetAutoplay();
      }
      if (touchEndX - touchStartX > 50) {
        // Swipe right
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
        resetAutoplay();
      }
    }

    startAutoplay();
  }

  // ==========================================
  // SIDEBAR SCROLL OBSERVER
  // ==========================================

  function initSidebarScrollObserver() {
    const sidebar = document.querySelector('.desktop-sidebar');
    const wrapper = document.querySelector('.desktop-new-wrapper');
    const toggleBtn = document.querySelector('.sidebar-toggle-btn');
    const seminarioSection = document.querySelector('.desktop-section-grid-2');

    if (!sidebar || !wrapper || !toggleBtn || !seminarioSection) {
      return;
    }

    let hasScrolled = false;
    let toggleAvailable = false; // Toggle disponible cuando llegas a Seminarios
    let sidebarOpen = false; // Sidebar cerrado por defecto
    let lastScrollTop = 0;

    // Función para abrir/cerrar sidebar
    function toggleSidebar() {
      sidebarOpen = !sidebarOpen;

      if (sidebarOpen) {
        sidebar.classList.add('visible');
        wrapper.classList.add('sidebar-active');
        toggleBtn.classList.add('active');
      } else {
        sidebar.classList.remove('visible');
        wrapper.classList.remove('sidebar-active');
        toggleBtn.classList.remove('active');
      }
    }

    // Event listener para el botón toggle
    toggleBtn.addEventListener('click', toggleSidebar);

    // Usar IntersectionObserver para detectar cuando Seminarios entra en viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollingDown = currentScrollTop > lastScrollTop;

        if (entry.isIntersecting && hasScrolled) {
          // Llegamos a Seminarios - mostrar toggle button
          toggleAvailable = true;
          toggleBtn.classList.add('visible');
        } else if (!entry.isIntersecting && !scrollingDown) {
          // Scrolling UP antes de Seminarios - ocultar toggle y cerrar sidebar
          toggleAvailable = false;
          toggleBtn.classList.remove('visible');
          if (sidebarOpen) {
            sidebarOpen = false;
            sidebar.classList.remove('visible');
            wrapper.classList.remove('sidebar-active');
            toggleBtn.classList.remove('active');
          }
        }

        lastScrollTop = currentScrollTop;
      });
    }, {
      // Activar cuando el 20% de la sección sea visible
      threshold: 0.2,
      // Margen para que se active al llegar a la sección
      rootMargin: '-50px 0px 0px 0px'
    });

    // Detectar primer scroll para activar el observador
    function handleFirstScroll() {
      if (!hasScrolled) {
        hasScrolled = true;
        observer.observe(seminarioSection);
      }
    }

    // Escuchar el evento de scroll
    window.addEventListener('scroll', handleFirstScroll, { passive: true });

    // NO observar inmediatamente - esperar a que el usuario haga scroll
  }

  // ==========================================
  // VISIBILITY MANAGEMENT
  // ==========================================

  function showOldDesktopContent() {
    const oldContainer = document.getElementById('desktop-noticias');
    const newContainer = document.getElementById('desktop-noticias-new');

    if (oldContainer) oldContainer.style.display = 'block';
    if (newContainer) newContainer.style.display = 'none';
  }

  function showNewDesktopContent() {
    const oldContainer = document.getElementById('desktop-noticias');
    const newContainer = document.getElementById('desktop-noticias-new');

    if (oldContainer) oldContainer.style.display = 'none';
    if (newContainer) newContainer.style.display = 'block';
  }

  // ==========================================
  // INITIALIZATION
  // ==========================================

  function init() {
    if (!isDesktop()) {
      console.log('📱 Mobile device detected, skipping desktop-content.js');
      return; // Solo ejecutar en desktop
    }

    console.log('🖥️ Desktop detected, initializing...');

    const preferOld = shouldShowOldDesktop();

    if (preferOld) {
      console.log('📜 User prefers OLD desktop layout');
      // Clases ya aplicadas por script inline en <head>, solo asegurar
      if (!document.body.classList.contains('prefer-old-desktop')) {
        document.body.classList.add('prefer-old-desktop');
      }
      document.body.classList.remove('prefer-new-desktop');

      injectOldDesktopContent();
      showOldDesktopContent();
    } else {
      console.log('✨ User prefers NEW desktop layout (default)');
      // Clases ya aplicadas por script inline en <head>, solo asegurar
      if (!document.body.classList.contains('prefer-new-desktop')) {
        document.body.classList.add('prefer-new-desktop');
      }
      document.body.classList.remove('prefer-old-desktop');

      injectNewDesktopContent();
      showNewDesktopContent();
    }
  }

  // Ejecutar al cargar DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-evaluar en resize (con debounce)
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      const wasMobile = !isDesktop();
      const nowMobile = !isDesktop();

      if (wasMobile !== nowMobile) {
        console.log('🔄 Viewport changed, reloading...');
        location.reload();
      }
    }, 250);
  });

})();
