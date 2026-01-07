/*!
 * Unified Content Management System for Kriya Yoga de Babaji
 * Version: 1.0.0
 * Single source of truth for ALL content across mobile/desktop versions
 *
 * ADMIN: Edit this file to update content in ALL 4 versions:
 * - Mobile new (responsive)
 * - Mobile old (scaled desktop)
 * - Desktop new (grid layout)
 * - Desktop old (original layout)
 */

(function() {
  'use strict';

  // ==========================================
  // METADATA
  // ==========================================
  const _meta = {
    version: '1.0.0',
    lastUpdated: '2025-01-15T10:30:00Z',
    author: 'Nityananda',
    environment: 'production'
  };

  // ==========================================
  // CONTENT DATA
  // ==========================================
  const kriyaContent = {

    // Meta info
    _meta: _meta,

    // ==========================================
    // CITA DEL DÍA
    // ==========================================
    citaDelDia: [
      "Si los seres humanos pudieran tan sólo entrever los goces infinitos que nos esperan en las zonas que nuestra evolución animal no ha conquistado todavía, lo dejarían todo y no cejarían hasta que hubieran obtenido esos tesoros – Sri Aurobindo",
      "Un sentimiento adecuado se convierte en la piedra filosofal para cambiar lo normal en yóguico – La voz de Babaji",
      "Todas tus acciones pueden ser ofrecidas para que sean transformadas en el fuego divino del Yoga – Kriya Yoga: inspiraciones en el sendero",
      "Es a través de tu vida como llegas a conocer la Verdad de ti mismo. Tu sadhana está contenida dentro de las experiencias de tu vida – Kriya Yoga: inspiraciones en el sendero",
      "El Eterno no puede ser conocido a través del intelecto. No puede ser realizado argumentando o razonando. Él sólo puede ser entendido por la experiencia directa intuitiva – La voz de Babaji",
      "Cuando las personas cumplen su servicio como sacrificio, cualquiera que sea su trabajo o actividad, el universo se eleva y se vuelve sublime – Bhagavad Gita",
      "El trabajo realizado con la actitud mental correcta se vuelve sacrificio. El servicio lo es. La vida se vuelva sagrada gracias a ello – Bhagavad Gita",
      "Nunca te dirijas a nada sino como a una manifestación de Dios, de otro modo, lanzarás un velo de ilusión sobre aquello a lo que mires, y luego verás el mal – La voz de Babaji",
      "Como practicante de Kriya Yoga incrementa gradualmente el tiempo que dedicas a las prácticas espirituales, porque ellas son un método seguro que integrará la consciencia en tu vida de todos los días – Kriya Yoga: inspiraciones en el sendero",
      "En cada momento en que estamos presentes hay una oportunidad de progresar – Kriya Yoga: inspiraciones en el sendero"
    ],

    // ==========================================
    // TÍTULO KRIYA YOGA (solo mobile)
    // ==========================================
    tituloKriyaYoga: {
      titulo: 'Kriya Yoga',
      imagenPortada: 'imagenes/PortadaMobile.jpg',
      mantra: 'Om Kriya Babaji Nama Aum',
      descripcion: [
        'El Kriya Yoga de Babaji es un sistema completo de Yoga que incluye posturas, respiraciones, meditaciones, mantras y devoción. Un programa diario de práctica para mejorar tu vida y la vida de los que te rodean.',
        'El Kriya Yoga se enseña en tres seminarios, siendo el primer seminario el más importante de todos y la base de este camino.'
      ]
    },

    // ==========================================
    // SEMINARIOS
    // ==========================================
    seminarios: {
      title: 'Próximos seminarios',
      items: [
        {
          tipo: 'Primera Iniciación',
          ubicacion: 'Valencia',
          fecha: '24-25 enero 2026',
          imagen: 'imagenes/PRIMERA-FACEBOOK0recortado.jpg',
          imageAlt: 'Primera iniciación',
          descripcion: ''
        }
      ],
      infoAdicional: 'Más información:',
      contacto: {
        email: 'info@kriyayogadebabaji.net',
        telefono: '+34649145057',
        whatsapp: '34649145057'
      }
    },

    // ==========================================
    // TERAPIAS
    // ==========================================
    terapias: {
      title: 'Terapias',
      introduccion: 'Basándome en la experiencia de más de 20 años enseñando el Yoga, ofrezco dos terapias muy útiles para ayudar a los estudiantes en su avance:',
      items: [
        {
          titulo: 'Sesión de activación de chakras',
          descripcion: 'descubre el estado de tus chakras, liberando posibles bloqueos.',
          imagen: 'imagenes/chakras_terapias.jpg',
          imageAlt: 'Sesión de activación de chakras'
        },
        {
          titulo: 'Sesión de respiración',
          descripcion: 'aprende a integrar emociones conflictivas usando la respiración.',
          imagen: 'imagenes/respiracion_slide.jpg',
          imageAlt: 'Sesión de respiración'
        }
      ],
      nota: 'Las sesiones son sólo presenciales.',
      notaContacto: 'Más información:',
      contacto: {
        email: 'info@kriyayogadebabaji.net',
        telefono: '+34649145057',
        whatsapp: '34649145057'
      }
    },

    // ==========================================
    // LIBROS Y ARTÍCULOS
    // ==========================================
    libros: {
      title: 'Libros y artículos',
      introduccion: {
        texto: 'En mi página puedes descargarte gratis muchos textos y artículos sobre Kriya Yoga y espiritualidad:',
        enlace: 'https://www.kriyayogadebabaji.net/articulos.htm'
      },
      subtitulo: 'He publicado diferentes libros para inspirarte y guiarte en la práctica del Kriya Yoga:',
      items: [
        {
          titulo: 'Inspiración para el Yoga',
          descripcion: 'mensajes breves de inspiración y guía para la práctica del Yoga.',
          imagen: 'imagenes/inspiracionP.jpg',
          enlace: 'https://www.amazon.com/NachoAlbalat/dp/B0CKWYKSYL?ref_=ast_author_dp',
          imageAlt: 'Inspiración para el Yoga'
        },
        {
          titulo: 'Recobrando el Ser',
          descripcion: 'una visión general sobre el sendero del Kriya Yoga de Babaji: su origen, en qué consiste, y sus diferentes aspectos.',
          imagen: 'imagenes/PortadaESP.jpg',
          enlace: 'https://www.amazon.com/dp/B088YB64CK/ref=cm_sw_em_r_mt_dp_U_4muZEbC7H8XVW',
          imageAlt: 'Recobrando el Ser'
        },
        {
          titulo: 'Avanzando en el Yoga',
          descripcion: 'guía avanzada para el desarrollo de Kundalini y los chakras en el Kriya Yoga.',
          imagen: 'imagenes/avanzandoPEQ.jpg',
          enlace: 'https://www.amazon.com/dp/B087CQM7ZN/ref=cm_sw_em_r_mt_dp_U_AkuZEbQF3S20F',
          imageAlt: 'Avanzando en el Yoga'
        },
        {
          titulo: 'Avanzando en la luz',
          descripcion: 'un estudio sobre la transmutación del cuerpo físico, el logro último de los Siddhas o maestros inmortales.',
          imagen: 'imagenes/aluzP.jpg',
          enlace: 'https://www.amazon.es/dp/B0DP9TB792',
          imageAlt: 'Avanzando en la luz'
        },
        {
          titulo: 'La luz de los Siddhas',
          descripcion: 'meditaciones y guía de los Siddhas del Kriya Yoga.',
          imagen: 'imagenes/LibroSiddhas.jpg',
          enlace: 'https://www.kriyayogadebabaji.net/lista10Libro.htm',
          imageAlt: 'La luz de los Siddhas'
        },
        {
          titulo: 'El Yoga de Jesús',
          descripcion: 'una exposición de las enseñanzas místicas de Jesús, comparándolas con textos esenciales de la tradición yóguica.',
          imagen: 'imagenes/LibroJesus.jpg',
          enlace: 'https://www.kriyayogadebabaji.net/je/',
          imageAlt: 'El Yoga de Jesús'
        }
      ],
      nota: {
        texto: 'Los libros también están disponibles en versión ebook. Puedes ver estos libros y más en este enlace:',
        enlace: 'https://www.kriyayogadebabaji.net/libros.htm'
      }
    },

    // ==========================================
    // MÚSICA
    // ==========================================
    musica: {
      title: 'Música',
      introduccion: 'Con la ayuda de la IA he puesto música a los poemas de los Siddhas (maestros inmortales del sur de la India), traducidos por primera vez al castellano/español. También hay musicados mantras y textos de Kriya Yoga y versos de la Mística universal, que puedes oír para tu inspiración diaria:',
      items: [
        {
          titulo: 'Voces 2',
          imagen: 'imagenes/Voces2.jpg',
          enlace: 'https://music.youtube.com/playlist?list=OLAK5uy_lnCCnorkLPnuIx496ZOEzW9p7SQeaU4Yk&si=nHM1fst6D_5msMM8',
          imageAlt: 'Voces 2 - Música de Kriya Yoga'
        },
        {
          titulo: 'Voces 1',
          imagen: 'imagenes/Voces1.jpg',
          enlace: 'https://music.youtube.com/playlist?list=OLAK5uy_kXUbcQOZy_b8fpKQU9KZISkZoUaNquUkk&si=EagObieo4uJcyXF_',
          imageAlt: 'Voces 1 - Música de Kriya Yoga'
        },
        {
          titulo: 'Guru Mantra',
          imagen: 'imagenes/GuruMantra.jpg',
          enlace: 'https://music.youtube.com/playlist?list=OLAK5uy_mDEmmgbpW8RjOoWMawIC6yocIvF-QorAg&si=WF8q8Jhe7wwPNT2B',
          imageAlt: 'Guru Mantra - Música de Kriya Yoga'
        },
        {
          titulo: 'Canciones de los Siddhas',
          imagen: 'imagenes/CancionesSiddhas.jpg',
          enlace: 'https://music.youtube.com/playlist?list=OLAK5uy_kgEEdnx_4iQJa7KkV6qDRZN-eTNPlpzVA&si=h5gI8Mirl92KDsfD',
          imageAlt: 'Canciones de los Siddhas - Música de Kriya Yoga'
        }
      ],
      nota: 'Disponibles en Spotify y demás aplicaciones de música.'
    },

    // ==========================================
    // LINAJE
    // ==========================================
    linaje: {
      title: 'Linaje de Kriya Yoga',
      introduccion: 'Nuestro sistema de 144 Kriyas o técnicas yóguicas fue entregado por Babaji Nagaraj a Yogui Ramaiah en 1954 en Badrinath, en los Himalayas.',
      items: [
        {
          nombre: 'Badrinath',
          imagen: 'imagenes/linaje1.jpg',
          imageAlt: 'Badrinath'
        },
        {
          nombre: 'Kriya Babaji Nagaraj',
          imagen: 'imagenes/linaje2.jpg',
          imageAlt: 'Kriya Babaji Nagaraj'
        },
        {
          nombre: 'Yogui Ramaiah (Yogiar)',
          imagen: 'imagenes/linaje3.jpg',
          imageAlt: 'Yogui Ramaiah (Yogiar)'
        },
        {
          nombre: 'M.Govindan',
          nombreSegundaLinea: 'Satchidananda',
          imagen: 'imagenes/linaje4.jpg',
          imageAlt: 'M.Govindan Satchidananda'
        }
      ],
      conclusion: {
        texto: 'Govindan Satchidananda, estudiante de Yogui Ramaiah y mi profesor, ha seguido enseñando el Kriya Yoga de Babaji a miles de personas. En 2010 fui autorizado por él a dar el tercer nivel de Kriya Yoga de Babaji, pudiendo dar así los tres seminarios de iniciación.',
        imagen: 'imagenes/NityanandaMarshall.jpg',
        imageAlt: 'Nityananda y Marshall Govindan'
      }
    },

    // ==========================================
    // CONTACTO
    // ==========================================
    contacto: {
      title: 'Nityananda - Contacto',
      imagen: 'imagenes/Nityananda.jpg',
      imageAlt: 'Nityananda',
      parrafos: [
        'Me llamo Nacho Albalat, Nityananda. Vivo en Valencia, España, donde enseño Kriya Yoga de Babaji. Para cualquier consulta sobre Kriya Yoga puedes escribirme al correo ',
        'info@kriyayogadebabaji.net',
        '.'
      ],
      firma: {
        mantra: 'Om Kriya Babaji Nama Aum,',
        nombre: 'Nityananda'
      },
      telefono: '+34649145057',
      whatsapp: '34649145057',
      email: 'info@kriyayogadebabaji.net'
    },

    // ==========================================
    // REDES SOCIALES
    // ==========================================
    redesSociales: {
      facebook: {
        texto: 'Síguenos en Facebook:',
        enlace: 'https://www.facebook.com/nityananda.kriyayoga'
      },
      instagram: {
        texto: 'Síguenos en Instagram:',
        enlace: 'https://www.instagram.com/nityanandakriya/'
      }
    },

    // ==========================================
    // COPYRIGHT
    // ==========================================
    copyright: {
      texto: 'Esta web fue creada y es mantenida por Nacho Albalat, Nityananda: info@kriyayogadebabaji.net. Copyright 2025©. Se permite la libre reproducción siempre que se cite la fuente. Desarrollo web: ',
      desarrollador: {
        nombre: 'Conexos',
        enlace: 'https://conexos.es'
      }
    },

    // ==========================================
    // ARTÍCULOS DESTACADOS
    // ==========================================
    iniciaciones: {
      title: 'Iniciaciones en el Kriya Yoga de Babaji',
      texto: 'La iniciación en Kriya Yoga es recibir las técnicas yóguicas preservando la integridad y las bendiciones del linaje. Periódicamente se dan Iniciaciones de Kriya Yoga de Babaji en España y en otros países, puedes ver las más cercanas en Seminarios. Puedes leer sobre el origen de este sistema aquí: Kriya Yoga. Para asistir a las Iniciaciones no hace falta experiencia previa en Yoga, ni condiciones físicas especiales.',
      enlaceSeminarios: 'seminarios.htm',
      enlaceKriyaYoga: 'kriya.htm',
      imagen: 'imagenes/babaji2.png',
      imageAlt: 'Babaji'
    },

    shaktiKundalini: {
      etiqueta: '+ Nuevo artículo:',
      title: 'Shakti Kundalini',
      texto: 'La Shakti divina, la misma que da forma y belleza a la creación, está también dentro de cada uno, esperando que se le devuelva todo su esplendor. La práctica del Kriya Yoga produce su manifestación.',
      enlace: 't-kundalini3.htm',
      imagen: 'imagenes/kundalini3P.jpg',
      imageAlt: 'Shakti Kundalini'
    },

    // ==========================================
    // NAVEGACIÓN SIDEBAR
    // ==========================================
    navegacion: {
      sidebar: [
        { texto: 'Inicio', enlace: 'index.htm' },
        { texto: 'Música', enlace: 'descargas.htm' },
        { texto: 'La tradición de los 18 Siddhas', enlace: '18siddhas.htm' },
        { texto: 'Historias de Kriya Babaji', enlace: 'kriyababaji.htm' },
        { texto: 'Babaji', enlace: 'babaji.htm' },
        { texto: '¿Cómo empezar?', enlace: 'empezar.htm' },
        { texto: '18 posturas', enlace: '18posturas.htm' },
        { texto: 'Viajes India', enlace: 'viaje_norte.htm' },
        { texto: 'Grupos de estudiantes', enlace: 'satsang.htm' },
        { texto: 'Enlaces', enlace: 'enlaces.htm' }
      ]
    },

    // ==========================================
    // BUSCADOR
    // ==========================================
    buscador: {
      titulo: 'Buscar en la página',
      action: 'https://www.google.com/search',
      sitesearch: 'www.kriyayogadebabaji.net',
      placeholder: 'Buscar...',
      boton: 'Buscar'
    }

  };

  // ==========================================
  // HELPER FUNCTIONS
  // ==========================================
  const kriyaHelpers = {

    // ------------------------------------------
    // Helper: Obtener cita aleatoria del día
    // ------------------------------------------
    getCitaDelDia: function() {
      const frases = kriyaContent.citaDelDia;
      let numero = Math.random() * frases.length;
      numero = numero * 0.5;
      numero = Math.round(numero);
      return frases[numero] || frases[0];
    },

    // ------------------------------------------
    // Helper: Generar botones de contacto
    // ------------------------------------------
    buildContactButtons: function(contacto, context) {
      // context puede ser 'mobile', 'desktop-old', 'desktop-new'
      const baseClass = context === 'mobile' ? 'contact-button' : 'contact-button';

      return `
        <div class="mobile-contact-buttons">
          <a href="tel:${contacto.telefono}" class="${baseClass} phone-button">
            <span>Llamar</span>
          </a>
          <a href="https://wa.me/${contacto.whatsapp}" class="${baseClass} whatsapp-button" target="_blank">
            <span>Enviar Whatsapp</span>
          </a>
        </div>
      `;
    },

    // ------------------------------------------
    // Helper: Renderizar sección layout viejo
    // (Para desktop-old)
    // ------------------------------------------
    renderOldLayoutSection: function(fotoId, textoId, data) {
      const fotoDiv = document.getElementById(fotoId);
      const textoDiv = document.getElementById(textoId);

      if (!fotoDiv || !textoDiv) {
        console.warn(`⚠️ Old layout containers not found: ${fotoId}, ${textoId}`);
        return;
      }

      // Llenar foto
      if (data.imagen) {
        fotoDiv.innerHTML = `
          <img src="${data.imagen}"
               alt="${data.imageAlt || ''}"
               width="230"
               height="230" />
        `;
      }

      // Llenar texto
      let textoHTML = '';
      if (data.titulo) {
        textoHTML += `<h2>${data.titulo}</h2>`;
      }
      if (data.contenido) {
        textoHTML += data.contenido;
      }

      textoDiv.innerHTML = textoHTML;
    },

    // ------------------------------------------
    // Helper: Escapar HTML (seguridad)
    // ------------------------------------------
    escapeHtml: function(text) {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return text.replace(/[&<>"']/g, m => map[m]);
    },

    // ------------------------------------------
    // Helper: Format fecha (futuro)
    // ------------------------------------------
    formatDate: function(dateStr) {
      // Por ahora devolver tal cual
      // Futuro: implementar formato localizado
      return dateStr;
    }

  };

  // ==========================================
  // EXPORT TO GLOBAL SCOPE
  // ==========================================
  window.kriyaContent = kriyaContent;
  window.kriyaHelpers = kriyaHelpers;

  // ==========================================
  // DEBUG INFO
  // ==========================================
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('%c✅ Kriya Content System Loaded', 'color: green; font-weight: bold; font-size: 14px;');
    console.log('%cVersion: ' + _meta.version, 'color: blue;');
    console.log('%cLast Updated: ' + _meta.lastUpdated, 'color: blue;');
    console.log('%cContent sections:', 'color: blue;', Object.keys(kriyaContent).filter(k => k !== '_meta'));
  }

})();
