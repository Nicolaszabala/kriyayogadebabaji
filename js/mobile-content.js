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

    // Contenido mobile organizado por secciones
    const mobileContent = {
        portada: {
            title: 'Portada',
            content: `
                <div class="mobile-portada">
                    <img src="imagenes/PortadaMobile.jpg" alt="Kriya Yoga de Babaji" />
                </div>
            `
        },

        kriyaYoga: {
            title: 'Kriya Yoga',
            content: `
                <div class="mobile-section" id="mobile-kriya-yoga">
                    <h2>Kriya Yoga</h2>
                    <p>El Kriya Yoga de Babaji es un sistema completo de Yoga que incluye posturas, respiraciones, meditaciones, mantras y devoción. Un programa diario de práctica para mejorar tu vida y a vida de los que te rodean.</p>
                    <p>La base de este sendero es la respiración espinal, que activa niveles superiores de consciencia y energía.</p>
                    <p>Cualquier persona puede practicarlo, con o sin experiencia previa en Yoga.</p>
                    <p>El Kriya Yoga se enseña en tres seminarios, siendo el primer seminario el más importante de todos y la base de este camino.</p>
                </div>
            `
        },

        seminarios: {
            title: 'Próximos seminarios',
            content: `
                <div class="mobile-section" id="mobile-seminarios">
                    <h2>Próximos seminarios</h2>
                    <p>Suelo dar un seminario de primera iniciación el último fin de semana de cada mes, en Valencia, donde vivo. El próximo será el fin de semana del 18-19 de octubre.</p>
                    <p>Daré en Valencia un seminario de segunda iniciación el fin de semana del 28-30 de noviembre 2025. Más información: <a href="https://www.kriyayogadebabaji.net/SegundaValencia2.htm">https://www.kriyayogadebabaji.net/SegundaValencia2.htm</a></p>
                    <p>Escríbeme (Whatsapp) o llámame al <strong>649145057</strong> para más información.</p>
                    <p>También por correo electrónico: <a href="mailto:info@kriyayogadebabaji.net">info@kriyayogadebabaji.net</a>.</p>
                </div>
            `
        },

        terapias: {
            title: 'Terapias',
            content: `
                <div class="mobile-section" id="mobile-terapias">
                    <h2>Terapias</h2>

                    <div class="mobile-terapia-image">
                        <img src="imagenes/Chakras.jpg" alt="Chakras - Terapias de Kriya Yoga" />
                    </div>

                    <p>Basándome en la experiencia de más de 20 años enseñando el Yoga, ofrezco dos terapias muy útiles para ayudar a los estudiantes en su avance:</p>
                    <ul>
                        <li><strong>Sesión de activación de chakras:</strong> una toma de consciencia del estado de los chakras del estudiante, liberando posibles bloqueos.</li>
                        <li><strong>Sesión de respiración:</strong> una respiración consciente guiada para liberar emociones conflictivas profundas que necesitan ser integradas.</li>
                    </ul>
                    <p>Las sesiones son sólo presenciales. Más información: <strong>649145057</strong> (también Whatsapp)</p>
                </div>
            `
        },

        libros: {
            title: 'Libros y artículos',
            content: `
                <div class="mobile-section" id="mobile-libros">
                    <h2>Libros y artículos</h2>
                    <p>Si quieres empezar a conocer el Kriya Yoga de Babaji en mi página puedes descargarte gratis muchos textos y artículos:</p>
                    <p><a href="https://www.kriyayogadebabaji.net/articulos.htm">https://www.kriyayogadebabaji.net/articulos.htm</a></p>

                    <p>He publicado diferentes libros para inspirarte y guiarte en la práctica del Kriya Yoga:</p>

                    <div class="mobile-book">
                        <a href="https://www.amazon.com/NachoAlbalat/dp/B0CKWYKSYL?ref_=ast_author_dp" target="_blank">
                            <img src="imagenes/inspiracionP.jpg" alt="Inspiración para el Yoga" />
                        </a>
                        <p><strong>Inspiración para el Yoga:</strong> mensajes breves de inspiración y guía para la práctica del Yoga.</p>
                    </div>

                    <div class="mobile-book">
                        <a href="https://www.amazon.com/dp/B088YB64CK/ref=cm_sw_em_r_mt_dp_U_4muZEbC7H8XVW" target="_blank">
                            <img src="imagenes/recobrandoP.jpg" alt="Recobrando el Ser" />
                        </a>
                        <p><strong>Recobrando el Ser:</strong> una visión general sobre el sendero del Kriya Yoga de Babaji: su origen, en qué consiste, y sus diferentes aspectos.</p>
                    </div>

                    <div class="mobile-book">
                        <a href="https://www.amazon.com/dp/B087CQM7ZN/ref=cm_sw_em_r_mt_dp_U_AkuZEbQF3S20F" target="_blank">
                            <img src="imagenes/avanzandoPEQ.jpg" alt="Avanzando en el Yoga" />
                        </a>
                        <p><strong>Avanzando en el Yoga:</strong> guía avanzada para el desarrollo de Kundalini y los chakras en el Kriya Yoga.</p>
                    </div>

                    <div class="mobile-book">
                        <a href="https://www.amazon.es/dp/B0DP9TB792" target="_blank">
                            <img src="imagenes/aluzP.jpg" alt="Avanzando en la luz" />
                        </a>
                        <p><strong>Avanzando en la luz:</strong> un estudio sobre la transmutación del cuerpo físico, el logro último de los Siddhas o maestros inmortales.</p>
                    </div>

                    <div class="mobile-book">
                        <a href="https://www.kriyayogadebabaji.net/lista10Libro.htm" target="_blank">
                            <img src="imagenes/LibroSiddhas.jpg" alt="La luz de los Siddhas" />
                        </a>
                        <p><strong>La luz de los Siddhas:</strong> meditaciones y guía de los Siddhas del Kriya Yoga.</p>
                    </div>

                    <div class="mobile-book">
                        <a href="https://www.kriyayogadebabaji.net/je/" target="_blank">
                            <img src="imagenes/LibroJesus.jpg" alt="El Yoga de Jesús" />
                        </a>
                        <p><strong>El Yoga de Jesús:</strong> una exposición de las enseñanzas místicas de Jesús, comparándolas con textos esenciales de la tradición yóguica.</p>
                    </div>

                    <p>Los libros también están disponibles en versión ebook. Puedes ver estos libros y más en este enlace:</p>
                    <p><a href="https://www.kriyayogadebabaji.net/libros.htm">https://www.kriyayogadebabaji.net/libros.htm</a></p>
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

                    <p>Disponibles en Spotify y de más aplicaciones de música.</p>
                </div>
            `
        },

        linaje: {
            title: 'Linaje de Kriya Yoga',
            content: `
                <div class="mobile-section" id="mobile-linaje">
                    <h2>Linaje de Kriya Yoga</h2>

                    <div class="mobile-linaje-image">
                        <img src="imagenes/linaje.jpg" alt="Linaje de Kriya Yoga" />
                    </div>

                    <p>Nuestro sistema de 144 Kriyas o técnicas yóguicas fue entregado por Babaji Nagaraj a Yogui Ramaiah en 1954 en Badrinath, en los Himalayas. Estas técnicas incluyen posturas, respiraciones, meditaciones, mantras y otra prácticas.</p>
                    <p>Govindan Satchidananda, estudiante de Yogui Ramaiah y mi profesor, ha seguido enseñando el Kriya Yoga de Babaji, formando a numerosos instructores de todo el mundo para poder enseñarlo de forma íntegra, preservando su pureza original.</p>
                    <p>En el año 2010, en su última visita a España, fui autorizado por Govindan Satchidananda a dar también el seminario de tercer nivel de Kriya Yoga de Babaji, pudiendo dar así los tres seminarios de iniciación.</p>

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

                    <p>Me llamo Nacho Albalat, mi nombre de profesor de Kriya Yoga es Nityananda. Soy licenciado en Ciencias de la Información, y he publicado 9 libros y traducido casi todos los libros de Kriya Yoga de Babaji disponibles. Ésta es mi página de Kriya Yoga.</p>
                    <p>Tras practicar Kriya Yoga de Babaji durante años, mi profesor, Govindan Satchidananda, me sugirió que lo enseñara a los demás. Mi trabajo como profesor de Kriya Yoga tiene que ver bastante con el periodismo, en la medida en que intento transmitir, de la mejor manera posible e impecable, una información y un conocimiento que no son míos.</p>
                    <p>Disfruto compartiendo este conocimiento en los seminarios y en las conferencias. Si estás interesado en el Kriya Yoga de Babaji y quieres saber más, estaré encantado de atenderte. Mi email es <a href="mailto:info@kriyayogadebabaji.net">info@kriyayogadebabaji.net</a>.</p>
                    <p>Mi móvil es el <strong>649145057</strong>.</p>
                    <p><em>Om Kriya Babaji Nama Aum,</em><br><strong>Nityananda</strong></p>
                </div>
<div class="mobile-section" id="mc_embed_signup">
<form action="https://kriyayogadebabaji.us12.list-manage.com/subscribe/post?u=55bacb022f217b1910d18333c&amp;id=afecdc6ca1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Suscríbete a nuestra lista de correo</h2>
<p>+ Puedes leer más textos en el blog <a href="http://kriyayogayvida.blogspot.com/">Kriya Yoga y Vida.</a> </p>
<p>+ Síguenos en <a href="https://www.facebook.com/nityananda.kriyayoga/"><img src="imagenes/facebook.jpg" alt="Facebook" style="width: 24px; height: 24px; vertical-align: middle;"/></a></p>
<p>+ Lista de correo: Suscríbete si deseas recibir emails con citas de Babaji y los Siddhas, información actualizada sobre seminarios, textos sobre Kriya Yoga, etc. (<a href="https://www.kriyayogadebabaji.net/docs/PoliticaPrivacidad.pdf">Lee aquí nuestra política de privacidad de datos</a>). ¿Un ejemplo? Haz clic <a href="https://www.kriyayogadebabaji.net/lista0.htm">>aquí</a>.</p>
<p>Esta web es mantenida por Nacho Albalat, Nityananda: info@kriyayogadebabaji.net.</p>
<p>Copyright 2025©. Se permite la libre reproducción siempre que se cite la fuente</p>
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

        // Agregar todas las secciones en orden (portada primero)
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

        // Inicializar slider de música
        initMusicSlider();

        console.log('Mobile content loaded successfully');
    }

    function initMusicSlider() {
        const slider = document.querySelector('.music-slider');
        const dots = document.querySelectorAll('.slider-dot');

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
        if (isMobile()) {
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
