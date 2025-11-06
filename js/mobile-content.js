/*!
 * Mobile Content Replacement for Kriya Yoga de Babaji
 * Replaces main content ONLY on mobile (<768px)
 * Desktop content remains untouched
 */

(function() {
    'use strict';

    // Solo ejecutar en mobile
    function isMobile() {
        return window.innerWidth <= 767;
    }

    // Detectar si es un dispositivo móvil real (no cambia con viewport)
    function isActualMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               (window.innerWidth <= 767);
    }

    // Función para generar cita del día (adaptada de frasedeldia)
    function getCitaDelDia() {
        const frases = [
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
        ];

        let numero = Math.random() * frases.length;
        numero = numero * 0.5;
        numero = Math.round(numero);

        return frases[numero] || frases[0];
    }

    // Contenido mobile organizado por secciones
    const mobileContent = {
        citaDelDia: {
            title: 'Cita del día',
            content: `
                <div class="mobile-cita-container">
                    <div class="mobile-cita">
                        <div class="cita-titulo">Cita del día</div>
                        <div class="cita-icon">✦</div>
                        <div class="cita-texto" id="cita-texto-mobile">
                            <!-- Se llenará con JavaScript -->
                        </div>
                    </div>
                </div>
            `
        },

        tituloKriyaYoga: {
            title: 'Título Kriya Yoga',
            content: `
                <div class="mobile-titulo-kriya">
                    <h1>Kriya Yoga</h1>
                </div>
            `
        },

        portada: {
            title: 'Portada',
            content: `
                <div class="mobile-portada">
                    <img src="imagenes/PortadaMobile.jpg" alt="Kriya Yoga de Babaji" />
                </div>
            `
        },

        kriyaYoga: {
            title: 'Contenido Kriya Yoga',
            content: `
                <div class="mobile-section" id="mobile-kriya-yoga">
                    <p class="mantra-centrado">Om Kriya Babaji Nama Aum</p>
                    <p>El Kriya Yoga de Babaji es un sistema completo de Yoga que incluye posturas, respiraciones, meditaciones, mantras y devoción. Un programa diario de práctica para mejorar tu vida y la vida de los que te rodean.</p>
                    <p>El Kriya Yoga se enseña en tres seminarios, siendo el primer seminario el más importante de todos y la base de este camino.</p>
                </div>
            `
        },

        seminarios: {
            title: 'Próximos seminarios',
            content: `
                <div class="mobile-section" id="mobile-seminarios">
                    <h2>Próximos seminarios</h2>
                    <p>Suelo dar un seminario de primera iniciación el último fin de semana de cada mes, en Valencia, donde vivo. Más información: <a href="mailto:info@kriyayogadebabaji.net">info@kriyayogadebabaji.net</a></p>
                    <div class="mobile-contact-buttons">
                        <a href="tel:+34649145057" class="contact-button phone-button">
                            <span>Llamar</span>
                        </a>
                        <a href="https://wa.me/34649145057" class="contact-button whatsapp-button" target="_blank">
                            <span>Enviar Whatsapp</span>
                        </a>
                    </div>
                </div>
            `
        },

        terapias: {
            title: 'Terapias',
            content: `
                <div class="mobile-section" id="mobile-terapias">
                    <h2>Terapias</h2>

                    <p>Basándome en la experiencia de más de 20 años enseñando el Yoga, ofrezco dos terapias muy útiles para ayudar a los estudiantes en su avance:</p>

                    <div class="terapias-slider-container">
                        <div class="terapias-slider">
                            <div class="terapias-slide">
                                <img src="imagenes/terapias1.jpg" alt="Sesión de activación de chakras" />
                                <p class="terapia-description"><strong>Sesión de activación de chakras:</strong> descubre el estado de tus chakras, liberando posibles bloqueos.</p>
                            </div>
                            <div class="terapias-slide">
                                <img src="imagenes/terapias2.jpg" alt="Sesión de respiración" />
                                <p class="terapia-description"><strong>Sesión de respiración:</strong> aprende a integrar emociones conflictivas usando la respiración.</p>
                            </div>
                        </div>
                        <div class="slider-dots terapias-dots">
                            <button class="slider-dot active" data-slide="0" aria-label="Slide 1"></button>
                            <button class="slider-dot" data-slide="1" aria-label="Slide 2"></button>
                        </div>
                    </div>

                    <p>Las sesiones son sólo presenciales.<br>Más información: <a href="mailto:info@kriyayogadebabaji.net">info@kriyayogadebabaji.net</a>.</p>
                    <div class="mobile-contact-buttons">
                        <a href="tel:+34649145057" class="contact-button phone-button">
                            <span>Llamar</span>
                        </a>
                        <a href="https://wa.me/34649145057" class="contact-button whatsapp-button" target="_blank">
                            <span>Enviar Whatsapp</span>
                        </a>
                    </div>
                </div>
            `
        },

        libros: {
            title: 'Libros y artículos',
            content: `
                <div class="mobile-section" id="mobile-libros">
                    <h2>Libros y artículos</h2>
                    <p>En mi página puedes descargarte gratis muchos textos y artículos sobre Kriya Yoga y espiritualidad:<br>
                    <a href="https://www.kriyayogadebabaji.net/articulos.htm">https://www.kriyayogadebabaji.net/articulos.htm</a></p>

                    <p>He publicado diferentes libros para inspirarte y guiarte en la práctica del Kriya Yoga:</p>

                    <div class="libros-slider-container">
                        <div class="libros-slider">
                            <div class="libros-slide">
                                <a href="https://www.amazon.com/NachoAlbalat/dp/B0CKWYKSYL?ref_=ast_author_dp" target="_blank">
                                    <img src="imagenes/inspiracionP.jpg" alt="Inspiración para el Yoga" />
                                </a>
                                <p class="libro-description"><strong>Inspiración para el Yoga:</strong> mensajes breves de inspiración y guía para la práctica del Yoga.</p>
                            </div>
                            <div class="libros-slide">
                                <a href="https://www.amazon.com/dp/B088YB64CK/ref=cm_sw_em_r_mt_dp_U_4muZEbC7H8XVW" target="_blank">
                                    <img src="imagenes/recobrandoP.jpg" alt="Recobrando el Ser" />
                                </a>
                                <p class="libro-description"><strong>Recobrando el Ser:</strong> una visión general sobre el sendero del Kriya Yoga de Babaji: su origen, en qué consiste, y sus diferentes aspectos.</p>
                            </div>
                            <div class="libros-slide">
                                <a href="https://www.amazon.com/dp/B087CQM7ZN/ref=cm_sw_em_r_mt_dp_U_AkuZEbQF3S20F" target="_blank">
                                    <img src="imagenes/avanzandoPEQ.jpg" alt="Avanzando en el Yoga" />
                                </a>
                                <p class="libro-description"><strong>Avanzando en el Yoga:</strong> guía avanzada para el desarrollo de Kundalini y los chakras en el Kriya Yoga.</p>
                            </div>
                            <div class="libros-slide">
                                <a href="https://www.amazon.es/dp/B0DP9TB792" target="_blank">
                                    <img src="imagenes/aluzP.jpg" alt="Avanzando en la luz" />
                                </a>
                                <p class="libro-description"><strong>Avanzando en la luz:</strong> un estudio sobre la transmutación del cuerpo físico, el logro último de los Siddhas o maestros inmortales.</p>
                            </div>
                            <div class="libros-slide">
                                <a href="https://www.kriyayogadebabaji.net/lista10Libro.htm" target="_blank">
                                    <img src="imagenes/LibroSiddhas.jpg" alt="La luz de los Siddhas" />
                                </a>
                                <p class="libro-description"><strong>La luz de los Siddhas:</strong> meditaciones y guía de los Siddhas del Kriya Yoga.</p>
                            </div>
                            <div class="libros-slide">
                                <a href="https://www.kriyayogadebabaji.net/je/" target="_blank">
                                    <img src="imagenes/LibroJesus.jpg" alt="El Yoga de Jesús" />
                                </a>
                                <p class="libro-description"><strong>El Yoga de Jesús:</strong> una exposición de las enseñanzas místicas de Jesús, comparándolas con textos esenciales de la tradición yóguica.</p>
                            </div>
                        </div>
                        <div class="slider-dots libros-dots">
                            <button class="slider-dot active" data-slide="0" aria-label="Slide 1"></button>
                            <button class="slider-dot" data-slide="1" aria-label="Slide 2"></button>
                            <button class="slider-dot" data-slide="2" aria-label="Slide 3"></button>
                            <button class="slider-dot" data-slide="3" aria-label="Slide 4"></button>
                            <button class="slider-dot" data-slide="4" aria-label="Slide 5"></button>
                            <button class="slider-dot" data-slide="5" aria-label="Slide 6"></button>
                        </div>
                    </div>

                    <p>Los libros también están disponibles en versión ebook. Puedes ver estos libros y más en este enlace:<br>
                    <a href="https://www.kriyayogadebabaji.net/libros.htm">https://www.kriyayogadebabaji.net/libros.htm</a></p>
                </div>
            `
        },

        musica: {
            title: 'Música',
            content: `
                <div class="mobile-section" id="mobile-musica">
                    <h2>Música</h2>
                    <p>Con la ayuda de la IA he puesto música a los poemas de los Siddhas (maestros inmortales del sur de la India), traducidos por primera vez al castellano/español. También hay musicados mantras y textos de Kriya Yoga y versos de la Mística universal, que puedes oír para tu inspiración diaria:</p>

                    <div class="music-slider-container">
                        <div class="music-slider">
                            <div class="music-slide">
                                <a href="https://music.youtube.com/playlist?list=OLAK5uy_lnCCnorkLPnuIx496ZOEzW9p7SQeaU4Yk&si=nHM1fst6D_5msMM8" target="_blank">
                                    <img src="imagenes/Voces2.jpg" alt="Voces 2 - Música de Kriya Yoga" />
                                </a>
                            </div>
                            <div class="music-slide">
                                <a href="https://music.youtube.com/playlist?list=OLAK5uy_kXUbcQOZy_b8fpKQU9KZISkZoUaNquUkk&si=EagObieo4uJcyXF_" target="_blank">
                                    <img src="imagenes/Voces1.jpg" alt="Voces 1 - Música de Kriya Yoga" />
                                </a>
                            </div>
                            <div class="music-slide">
                                <a href="https://music.youtube.com/playlist?list=OLAK5uy_mDEmmgbpW8RjOoWMawIC6yocIvF-QorAg&si=WF8q8Jhe7wwPNT2B" target="_blank">
                                    <img src="imagenes/GuruMantra.jpg" alt="Guru Mantra - Música de Kriya Yoga" />
                                </a>
                            </div>
                            <div class="music-slide">
                                <a href="https://music.youtube.com/playlist?list=OLAK5uy_kgEEdnx_4iQJa7KkV6qDRZN-eTNPlpzVA&si=h5gI8Mirl92KDsfD" target="_blank">
                                    <img src="imagenes/CancionesSiddhas.jpg" alt="Canciones de los Siddhas - Música de Kriya Yoga" />
                                </a>
                            </div>
                        </div>
                        <div class="slider-dots">
                            <button class="slider-dot active" data-slide="0" aria-label="Slide 1"></button>
                            <button class="slider-dot" data-slide="1" aria-label="Slide 2"></button>
                            <button class="slider-dot" data-slide="2" aria-label="Slide 3"></button>
                            <button class="slider-dot" data-slide="3" aria-label="Slide 4"></button>
                        </div>
                    </div>

                    <p>Disponibles en Spotify y demás aplicaciones de música.</p>
                </div>
            `
        },

        linaje: {
            title: 'Linaje de Kriya Yoga',
            content: `
                <div class="mobile-section" id="mobile-linaje">
                    <h2>Linaje de Kriya Yoga</h2>

                    <p>Nuestro sistema de 144 Kriyas o técnicas yóguicas fue entregado por Babaji Nagaraj a Yogui Ramaiah en 1954 en Badrinath, en los Himalayas.</p>

                    <div class="linaje-slider-container">
                        <div class="linaje-slider">
                            <div class="linaje-slide">
                                <img src="imagenes/linaje1.jpg" alt="Badrinath" />
                                <p class="linaje-description">Badrinath</p>
                            </div>
                            <div class="linaje-slide">
                                <img src="imagenes/linaje2.jpg" alt="Kriya Babaji Nagaraj" />
                                <p class="linaje-description">Kriya Babaji Nagaraj</p>
                            </div>
                            <div class="linaje-slide">
                                <img src="imagenes/linaje3.jpg" alt="Yogui Ramaiah (Yogiar)" />
                                <p class="linaje-description">Yogui Ramaiah (Yogiar)</p>
                            </div>
                            <div class="linaje-slide">
                                <img src="imagenes/linaje4.jpg" alt="M.Govindan Satchidananda" />
                                <p class="linaje-description">M.Govindan Satchidananda</p>
                            </div>
                        </div>
                        <div class="slider-dots linaje-dots">
                            <button class="slider-dot active" data-slide="0" aria-label="Slide 1"></button>
                            <button class="slider-dot" data-slide="1" aria-label="Slide 2"></button>
                            <button class="slider-dot" data-slide="2" aria-label="Slide 3"></button>
                            <button class="slider-dot" data-slide="3" aria-label="Slide 4"></button>
                        </div>
                    </div>

                    <p>Govindan Satchidananda, estudiante de Yogui Ramaiah y mi profesor, ha seguido enseñando el Kriya Yoga de Babaji a miles de personas.<br>
                    En 2010 fui autorizado por Govindan Satchidananda a dar el tercer nivel de Kriya Yoga de Babaji, pudiendo dar así los tres seminarios de iniciación.</p>

                    <div class="mobile-linaje-image">
                        <img src="imagenes/NityanandaMarshall.jpg" alt="Nityananda y Marshall Govindan" />
                    </div>
                </div>
            `
        },

        contacto: {
            title: 'Nityananda - Contacto',
            content: `
                <div class="mobile-section" id="mobile-contacto">
                    <h2>Nityananda - Contacto</h2>

                    <div class="mobile-contacto-image">
                        <img src="imagenes/Nityananda.jpg" alt="Nityananda" />
                    </div>

                    <p>Me llamo Nacho Albalat, Nityananda. Vivo en Valencia, España, donde enseño Kriya Yoga de Babaji. Para cualquier consulta sobre Kriya Yoga puedes escribirme al correo <a href="mailto:info@kriyayogadebabaji.net">info@kriyayogadebabaji.net</a>.</p>
                    <p><em>Om Kriya Babaji Nama Aum,</em></p>
                    <p><strong>Nityananda</strong></p>

                    <div class="mobile-contact-buttons">
                        <a href="tel:+34649145057" class="contact-button phone-button">
                            <span>Llamar</span>
                        </a>
                        <a href="https://wa.me/34649145057" class="contact-button whatsapp-button" target="_blank">
                            <span>Enviar Whatsapp</span>
                        </a>
                    </div>
                </div>
<div class="mobile-section" id="mc_embed_signup">
<form action="https://kriyayogadebabaji.us12.list-manage.com/subscribe/post?u=55bacb022f217b1910d18333c&amp;id=afecdc6ca1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Suscríbete a nuestra lista de correo</h2>
<p>Suscríbete si deseas recibir emails con citas de Babaji y los Siddhas, información actualizada sobre seminarios, textos sobre Kriya Yoga, etc. <span class="privacy-link">(<a href="https://www.kriyayogadebabaji.net/docs/PoliticaPrivacidad.pdf">Lee aquí nuestra política de privacidad de datos</a>).</span></p>
<div class="indicates-required"><span class="asterisk">*</span> requerido</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email  <span class="asterisk">*</span>
</label>
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
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_55bacb022f217b1910d18333c_afecdc6ca1" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Suscribir" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<div class="mobile-social-links">
    <p><strong>Síguenos en Facebook:</strong> <a href="https://www.facebook.com/nityananda.kriyayoga">https://www.facebook.com/nityananda.kriyayoga</a></p>
    <p><strong>Síguenos en Instagram:</strong> <a href="https://www.instagram.com/nityanandakriya/">https://www.instagram.com/nityanandakriya/</a></p>
</div>
<div class="mobile-version-toggle">
    <button class="version-web-button" id="toggle-version-button">Ver Versión Web</button>
</div>
<div class="mobile-copyright">
    <p>Copyright 2025©. Se permite la libre reproducción siempre que se cite la fuente</p>
</div>
            `
        }
    };

    function replaceContentOnMobile() {
        if (!isMobile()) {
            return; // No hacer nada en desktop
        }

        const mobileNoticiasDiv = document.getElementById('mobile-noticias');
        if (!mobileNoticiasDiv) {
            console.warn('Content div #mobile-noticias not found');
            return;
        }

        // Construir nuevo contenido mobile
        let newContent = '<div class="mobile-content-wrapper">';

        // Agregar todas las secciones en orden (cita del día, título, portada, contenido)
        newContent += mobileContent.citaDelDia.content;
        newContent += mobileContent.tituloKriyaYoga.content;
        newContent += mobileContent.portada.content;
        newContent += mobileContent.kriyaYoga.content;
        newContent += mobileContent.seminarios.content;
        newContent += mobileContent.terapias.content;
        newContent += mobileContent.libros.content;
        newContent += mobileContent.musica.content;
        newContent += mobileContent.linaje.content;
        newContent += mobileContent.contacto.content;

        newContent += '</div>';

        // Reemplazar contenido
        mobileNoticiasDiv.innerHTML = newContent;

        // Insertar cita del día
        const citaTextoEl = document.getElementById('cita-texto-mobile');
        if (citaTextoEl) {
            citaTextoEl.textContent = getCitaDelDia();
        }

        // Inicializar sliders
        initTerapiasSlider();
        initLibrosSlider();
        initMusicSlider();
        initLinajeSlider();

        // Inicializar botón de cambio de versión
        initVersionToggle();

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
        // Verificar si ya existe el botón
        if (document.getElementById('floating-version-toggle')) {
            return;
        }

        // Ajustar altura del body para eliminar espacio blanco
        setTimeout(function() {
            const contenedor = document.getElementById('contenedor');
            if (contenedor) {
                const realHeight = contenedor.scrollHeight;
                const scale = 0.38;
                const extraMargin = 50; // Margen extra para incluir todo el contenido
                const scaledHeight = (realHeight * scale) + extraMargin;

                document.body.style.height = scaledHeight + 'px';
                document.body.style.overflow = 'hidden';
                document.documentElement.style.height = scaledHeight + 'px';
                document.documentElement.style.overflow = 'auto';
            }
        }, 500);

        // Crear botón flotante (los estilos están en version-toggle.css que NO se desactiva)
        const toggleButton = document.createElement('div');
        toggleButton.id = 'floating-version-toggle';
        toggleButton.textContent = 'Ver Versión Mobile';
        document.body.appendChild(toggleButton);

        toggleButton.addEventListener('click', function() {
            document.body.classList.remove('prefer-web-version');
            localStorage.removeItem('preferWebVersion');
            enableResponsiveCss();

            // Restaurar altura del body
            document.body.style.height = '';
            document.body.style.overflow = '';
            document.documentElement.style.height = '';
            document.documentElement.style.overflow = '';

            toggleButton.remove();
            location.reload();
        });
    }

    function initVersionToggle() {
        const toggleButton = document.getElementById('toggle-version-button');
        if (toggleButton) {
            toggleButton.addEventListener('click', function() {
                document.body.classList.add('prefer-web-version');
                localStorage.setItem('preferWebVersion', 'true');
                disableResponsiveCss();

                location.reload();
            });
        }
    }

    function initMusicSlider() {
        const slider = document.querySelector('.music-slider');
        const dots = document.querySelectorAll('.music-slider-container .slider-dot');

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

    function initTerapiasSlider() {
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

    function initLibrosSlider() {
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

    function initLinajeSlider() {
        const slider = document.querySelector('.linaje-slider');
        const dots = document.querySelectorAll('.linaje-dots .slider-dot');

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

    function init() {
        const preferWebVersion = localStorage.getItem('preferWebVersion');
        const actuallyMobile = isActualMobileDevice();

        // Restaurar preferencia de versión desde localStorage
        if (preferWebVersion === 'true' && actuallyMobile) {
            document.body.classList.add('prefer-web-version');

            // DESACTIVAR responsive.css inmediatamente para evitar flash de contenido mobile
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
        } else if (isMobile()) {
            replaceContentOnMobile();
        }
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Re-evaluar en resize (por si el usuario rota el dispositivo)
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Si cambia de desktop a mobile o viceversa, recargar la página
            const wasMobile = document.getElementById('mobile-noticias').querySelector('.mobile-content-wrapper') !== null;
            const nowMobile = isMobile();

            if (wasMobile !== nowMobile) {
                location.reload();
            }
        }, 250);
    });

})();
