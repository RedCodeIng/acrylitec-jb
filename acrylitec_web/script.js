/**
 * ============================================================================
 * ACRYLITEC - MOTOR INTERACTIVO Y LÓGICA DE NEGOCIO EN EL FRONTEND (V2.2)
 * Versión: 2.2.0 | Compatible con Cloudflare Pages Edge Runtime
 * Módulos: Galería Spotlight Interactiva, Cotizador en Vivo con Enlace Directo,
 *          Gestor de Temas, Menú Móvil, Lightbox y Persistencia Local.
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ------------------------------------------------------------------------
    // 1. SISTEMA DE GESTIÓN DE TEMA (CLARO / OSCURO)
    // ------------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const htmlElement = document.documentElement;

    function inicializarTema() {
        const temaGuardado = localStorage.getItem('acrylitec_theme');
        const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

        let temaFinal = 'dark';
        if (temaGuardado) {
            temaFinal = temaGuardado;
        } else if (!prefiereOscuro) {
            temaFinal = 'light';
        }

        aplicarTema(temaFinal);
    }

    function aplicarTema(tema) {
        htmlElement.setAttribute('data-theme', tema);
        localStorage.setItem('acrylitec_theme', tema);

        if (themeToggleBtn) {
            if (tema === 'light') {
                themeToggleBtn.innerHTML = '🌙';
                themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo oscuro');
                themeToggleBtn.setAttribute('title', 'Activar modo oscuro');
            } else {
                themeToggleBtn.innerHTML = '☀️';
                themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo claro');
                themeToggleBtn.setAttribute('title', 'Activar modo claro');
            }
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const temaActual = htmlElement.getAttribute('data-theme') || 'dark';
            const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';
            aplicarTema(nuevoTema);
            mostrarToast(nuevoTema === 'dark' ? 'Modo Oscuro activado' : 'Modo Claro activado');
        });
    }

    inicializarTema();

    // ------------------------------------------------------------------------
    // 2. NAVEGACIÓN MÓVIL Y MENÚ HAMBURGUESA
    // ------------------------------------------------------------------------
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileDrawer = document.getElementById('mobileNavDrawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    function toggleMenuMovil() {
        if (!hamburgerBtn || !mobileDrawer) return;
        const estaAbierto = mobileDrawer.classList.contains('open');

        if (estaAbierto) {
            mobileDrawer.classList.remove('open');
            hamburgerBtn.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        } else {
            mobileDrawer.classList.add('open');
            hamburgerBtn.classList.add('active');
            hamburgerBtn.setAttribute('aria-expanded', 'true');
        }
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMenuMovil);
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileDrawer && mobileDrawer.classList.contains('open')) {
                toggleMenuMovil();
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (mobileDrawer && mobileDrawer.classList.contains('open')) {
            if (!mobileDrawer.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                toggleMenuMovil();
            }
        }
    });

    // ------------------------------------------------------------------------
    // 3. BARRA DE PROGRESO DE LECTURA (SCROLL PROGRESS)
    // ------------------------------------------------------------------------
    const progressBar = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        if (!progressBar) return;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            progressBar.style.width = `${progress}%`;
        }
    }, { passive: true });

    // ------------------------------------------------------------------------
    // 4. ANIMACIÓN DE ENTRADA SCROLL REVEAL (INTERSECTION OBSERVER)
    // ------------------------------------------------------------------------
    const elementosAnimables = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.10,
            rootMargin: '0px 0px -30px 0px'
        });

        elementosAnimables.forEach(el => revealObserver.observe(el));
    } else {
        elementosAnimables.forEach(el => el.classList.add('active'));
    }

    // ------------------------------------------------------------------------
    // 5. CONTROL DE SKELETONS Y CARGA ELEGANTE DE IMÁGENES
    // ------------------------------------------------------------------------
    const imageWrappers = document.querySelectorAll('.skeleton-box');

    imageWrappers.forEach(wrapper => {
        const img = wrapper.querySelector('img');
        if (!img) return;

        function finalizarCarga() {
            wrapper.classList.add('image-loaded');
            img.style.opacity = '1';
        }

        if (img.complete && img.naturalWidth !== 0) {
            finalizarCarga();
        } else {
            img.addEventListener('load', finalizarCarga);
            img.addEventListener('error', () => {
                wrapper.classList.add('image-loaded');
            });
        }
    });

    // ------------------------------------------------------------------------
    // 6. NUEVA GALERÍA SPOTLIGHT INTERACTIVA Y CARRUSEL DE MINIATURAS
    // ------------------------------------------------------------------------
    const catalogoProyectos = [
        {
            id: 1,
            categoriaFiltro: 'decoracion',
            categoriaTag: 'Arquitectura & Decoración',
            titulo: 'Mapas Geográficos de Lujo',
            descripcion: 'Cuadros artísticos en acrílico transparente de 6mm con pernos separadores de acero inoxidable y grabado láser milimétrico. Diseñados como piezas focales en recepciones ejecutivas, notarías o residencias.',
            specs: [
                'Acrílico cristal de 6mm de pureza óptica',
                'Corte y grabado láser de ultra-definición (±0.1 mm)',
                'Juego de 4 pernos separadores de acero inoxidable'
            ],
            fotoWebp: 'fotos/img1.webp',
            fotoJpg: 'fotos/img1.jpg',
            alt: 'Mapa en Acrílico con Pernos de Acero',
            tipoCotizador: '350',
            tamanoCotizador: '1.5'
        },
        {
            id: 2,
            categoriaFiltro: 'comercial',
            categoriaTag: 'Puntos de Venta & Retail',
            titulo: 'Exhibidores Comerciales de Alta Gama',
            descripcion: 'Estructuras modulares y vitrinas robustas con terminaciones pulidas a fuego. Diseñadas para resaltar productos premium en joyerías, ópticas, tiendas departamentales y stands de exhibición.',
            specs: [
                'Acrílico transparente de 4mm a 8mm de alta densidad',
                'Cantos biselados y pulidos a diamante',
                'Alta durabilidad y resistencia al desgaste diario'
            ],
            fotoWebp: 'fotos/img2.webp',
            fotoJpg: 'fotos/img2.jpg',
            alt: 'Exhibidor Comercial en Acrílico Cristalino',
            tipoCotizador: '600',
            tamanoCotizador: '1.5'
        },
        {
            id: 3,
            categoriaFiltro: 'industrial',
            categoriaTag: 'Mobiliario & Seguridad',
            titulo: 'Lockers y Módulos de Custodia',
            descripcion: 'Sistemas apilables con bisagras integradas de acrílico reforzado, cerraduras de seguridad individuales y acabados translúcidos. Ideales para oficinas, gimnasios de lujo y áreas protegidas.',
            specs: [
                'Acrílico de alto impacto de 8mm',
                'Cerraduras con llave cromada individual',
                'Diseño modular escalable según el espacio'
            ],
            fotoWebp: 'fotos/img3.webp',
            fotoJpg: 'fotos/img3.jpg',
            alt: 'Lockers y Módulos de Acrílico de Alta Resistencia',
            tipoCotizador: '600',
            tamanoCotizador: '2.2'
        },
        {
            id: 4,
            categoriaFiltro: 'decoracion',
            categoriaTag: 'Hogar & Diseño Botánico',
            titulo: 'Decoración y Botánicos de Pared',
            descripcion: 'Esferas hidropónicas y macetas flotantes termoformadas que fusionan naturaleza y vanguardia arquitectónica. Perfectas para ambientar muros interiores en departamentos y hoteles boutique.',
            specs: [
                'Acrílico termoformado con sellado hermético',
                'Soporte de anclaje invisible a muro',
                'Resistencia a rayos UV y humedad continua'
            ],
            fotoWebp: 'fotos/img4.webp',
            fotoJpg: 'fotos/img4.jpg',
            alt: 'Decoración Botánica y Esferas de Pared en Acrílico',
            tipoCotizador: '250',
            tamanoCotizador: '1'
        },
        {
            id: 5,
            categoriaFiltro: 'comercial',
            categoriaTag: 'Institucional & Eventos',
            titulo: 'Urnas y Buzones Institucionales',
            descripcion: 'Estructuras cerradas para votaciones, quejas, sugerencias y recepciones ejecutivas. Fabricadas con uniones invisibles de alta resistencia y ranura superior biselada anti-atasco.',
            specs: [
                'Acrílico cristal de 4mm con cerrojo de seguridad',
                'Ranura superior de depósito continuo',
                'Base estabilizadora antiderrapante'
            ],
            fotoWebp: 'fotos/img5.webp',
            fotoJpg: 'fotos/img5.jpg',
            alt: 'Urna y Buzón Institucional de Acrílico',
            tipoCotizador: '250',
            tamanoCotizador: '1'
        },
        {
            id: 6,
            categoriaFiltro: 'industrial',
            categoriaTag: 'Ingeniería Industrial',
            titulo: 'Protección para Maquinaria y Equipos',
            descripcion: 'Cubiertas de seguridad y guardas industriales cortadas a la medida exacta para tableros eléctricos, controles de automatización y celdas robóticas, previniendo accidentes laborales.',
            specs: [
                'Polímero de acrílico grado ingeniería de alta resistencia',
                'Cumplimiento con normas de seguridad ocupacional',
                'Tolerancia de corte milimétrica con base en planos CAD'
            ],
            fotoWebp: 'fotos/img6.webp',
            fotoJpg: 'fotos/img6.jpg',
            alt: 'Protector Industrial de Acrílico para Maquinaria',
            tipoCotizador: '600',
            tamanoCotizador: '2.2'
        },
        {
            id: 7,
            categoriaFiltro: 'regalos',
            categoriaTag: 'Empaques de Lujo & Regalos',
            titulo: 'Cajas de Regalo Conmemorativas',
            descripcion: 'Empaques de alta gama con grabado de nombres propios, dedicatorias o logotipos corporativos. Diseñadas para botellas de colección, dulces finos, presentes de boda y aniversarios.',
            specs: [
                'Acrílico cristalino de 3mm con tapa deslizante',
                'Grabado láser de alta precisión personalizado',
                'Acabado tipo cristal de cuarzo en aristas'
            ],
            fotoWebp: 'fotos/img7.webp',
            fotoJpg: 'fotos/img7.jpg',
            alt: 'Caja de Regalo Conmemorativa con Grabado Láser',
            tipoCotizador: '450',
            tamanoCotizador: '1'
        },
        {
            id: 8,
            categoriaFiltro: 'comercial',
            categoriaTag: 'Identidad de Marca & Neón',
            titulo: 'Señalización e Identidad Iluminada',
            descripcion: 'Letreros circulares y volumétricos con corte láser continuo y tecnología de retroiluminación LED suave. La solución definitiva para destacar tu negocio en fachadas y muros interiores.',
            specs: [
                'Combinación de acrílico negro mate y blanco difusor',
                'Módulo LED de bajo consumo de luz cálida o blanca',
                'Kit completo de montaje y conexión inmediata'
            ],
            fotoWebp: 'fotos/img8.webp',
            fotoJpg: 'fotos/img8.jpg',
            alt: 'Letrero Iluminado Circular para Marca',
            tipoCotizador: '350',
            tamanoCotizador: '1.5'
        }
    ];

    let indiceActivo = 0;
    let proyectosVisibles = [...catalogoProyectos];

    // Elementos del DOM del Spotlight
    const spotlightCategory = document.getElementById('spotlightCategory');
    const spotlightTitle = document.getElementById('spotlightTitle');
    const spotlightDesc = document.getElementById('spotlightDesc');
    const spotlightSpecsList = document.getElementById('spotlightSpecsList');
    const spotlightPicSource = document.getElementById('spotlightPicSource');
    const spotlightImg = document.getElementById('spotlightImg');
    const spotlightCounter = document.getElementById('spotlightCounter');
    const spotlightBtnCotizar = document.getElementById('spotlightBtnCotizar');
    const spotlightMediaBox = document.getElementById('spotlightMediaBox');

    const btnSpotlightPrev = document.getElementById('btnSpotlightPrev');
    const btnSpotlightNext = document.getElementById('btnSpotlightNext');
    const thumbnailTrack = document.getElementById('thumbnailTrack');
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');

    function renderizarMiniaturas() {
        if (!thumbnailTrack) return;
        thumbnailTrack.innerHTML = '';

        proyectosVisibles.forEach((p, idx) => {
            const thumb = document.createElement('div');
            thumb.className = `thumb-card ${idx === indiceActivo ? 'active' : ''}`;
            thumb.setAttribute('data-index', idx);
            thumb.innerHTML = `
                <div class="thumb-img-box">
                    <img src="${p.fotoWebp}" alt="${p.alt}" loading="lazy">
                </div>
                <div class="thumb-info">
                    <h6>${p.titulo}</h6>
                </div>
            `;

            thumb.addEventListener('click', () => {
                mostrarProyecto(idx);
            });

            thumbnailTrack.appendChild(thumb);
        });
    }

    function mostrarProyecto(indice) {
        if (proyectosVisibles.length === 0) return;
        if (indice < 0) indice = proyectosVisibles.length - 1;
        if (indice >= proyectosVisibles.length) indice = 0;

        indiceActivo = indice;
        const p = proyectosVisibles[indiceActivo];

        // Actualizar textos y contenido
        if (spotlightCategory) spotlightCategory.textContent = p.categoriaTag;
        if (spotlightTitle) spotlightTitle.textContent = p.titulo;
        if (spotlightDesc) spotlightDesc.textContent = p.descripcion;

        if (spotlightSpecsList) {
            spotlightSpecsList.innerHTML = p.specs.map(spec => `<li>${spec}</li>`).join('');
        }

        if (spotlightPicSource) spotlightPicSource.srcset = p.fotoWebp;
        if (spotlightImg) {
            spotlightImg.src = p.fotoJpg;
            spotlightImg.alt = p.alt;
        }

        if (spotlightCounter) {
            spotlightCounter.innerHTML = `<span>${String(indiceActivo + 1).padStart(2, '0')}</span> / ${String(proyectosVisibles.length).padStart(2, '0')}`;
        }

        if (spotlightBtnCotizar) {
            spotlightBtnCotizar.textContent = `Cotizar "${p.titulo}" →`;
            spotlightBtnCotizar.onclick = (e) => {
                e.preventDefault();
                cotizarDesdeGaleria(p.tipoCotizador, p.tamanoCotizador);
            };
        }

        // Actualizar estado activo en miniaturas
        const thumbs = thumbnailTrack ? thumbnailTrack.querySelectorAll('.thumb-card') : [];
        thumbs.forEach((t, i) => {
            if (i === indiceActivo) {
                t.classList.add('active');
                t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                t.classList.remove('active');
            }
        });
    }

    if (btnSpotlightPrev) {
        btnSpotlightPrev.addEventListener('click', () => mostrarProyecto(indiceActivo - 1));
    }

    if (btnSpotlightNext) {
        btnSpotlightNext.addEventListener('click', () => mostrarProyecto(indiceActivo + 1));
    }

    // Filtrado interactivo de categorías
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const categoria = btn.getAttribute('data-category');
            if (categoria === 'todos') {
                proyectosVisibles = [...catalogoProyectos];
            } else {
                proyectosVisibles = catalogoProyectos.filter(p => p.categoriaFiltro === categoria);
            }

            indiceActivo = 0;
            renderizarMiniaturas();
            mostrarProyecto(0);
        });
    });

    renderizarMiniaturas();
    mostrarProyecto(0);

    // Conexión directa desde la Galería al Cotizador
    window.cotizarDesdeGaleria = function (tipo, tamano) {
        const selectProducto = document.getElementById('tipoProducto');
        const selectTamano = document.getElementById('tamano');
        const cotizadorSec = document.getElementById('cotizador');

        if (selectProducto && tipo) selectProducto.value = tipo;
        if (selectTamano && tamano) selectTamano.value = tamano;

        recalcularCotizador();

        if (cotizadorSec) {
            cotizadorSec.scrollIntoView({ behavior: 'smooth' });
            cotizadorSec.style.transition = 'box-shadow 0.4s';
            cotizadorSec.style.boxShadow = '0 0 35px rgba(212, 175, 55, 0.5)';
            setTimeout(() => {
                cotizadorSec.style.boxShadow = '';
            }, 1200);
        }

        mostrarToast('¡Especificaciones cargadas en el cotizador!');
    };

    // Apertura del Lightbox al hacer clic en la fotografía principal del Spotlight
    if (spotlightMediaBox) {
        spotlightMediaBox.addEventListener('click', () => {
            const p = proyectosVisibles[indiceActivo];
            abrirLightboxManual(p.fotoJpg || p.fotoWebp, p.titulo, p.descripcion);
        });
    }

    // ------------------------------------------------------------------------
    // 7. COTIZADOR AUTOMÁTICO EN VIVO (MODELO MATEMÁTICO APLICADO)
    // ------------------------------------------------------------------------
    const selectProducto = document.getElementById('tipoProducto');
    const selectTamano = document.getElementById('tamano');
    const inputCantidad = document.getElementById('cantidad');
    const elementoPrecio = document.getElementById('precioTotal');
    const badgeDescuento = document.getElementById('badgeDescuento');
    const btnWhatsApp = document.getElementById('btnWhatsAppCotizacion');
    const btnCopiar = document.getElementById('btnCopiarCotizacion');

    let precioActualAnimado = 350;

    function animarNumero(desde, hasta, duracion = 320) {
        if (!elementoPrecio) return;
        const inicioTiempo = performance.now();

        function actualizar(tiempoActual) {
            const transcurrido = tiempoActual - inicioTiempo;
            const progreso = Math.min(transcurrido / duracion, 1);
            const factorEase = 1 - (1 - progreso) * (1 - progreso);
            const valorActual = desde + (hasta - desde) * factorEase;

            elementoPrecio.textContent = `$${valorActual.toFixed(2)} MXN`;

            if (progreso < 1) {
                requestAnimationFrame(actualizar);
            } else {
                elementoPrecio.textContent = `$${hasta.toFixed(2)} MXN`;
                precioActualAnimado = hasta;
            }
        }

        requestAnimationFrame(actualizar);
    }

    function recalcularCotizador() {
        if (!selectProducto || !selectTamano || !inputCantidad || !elementoPrecio) return;

        const costoBase = parseFloat(selectProducto.value) || 0;
        const factorTamano = parseFloat(selectTamano.value) || 1;
        let cantidad = parseInt(inputCantidad.value, 10);

        if (isNaN(cantidad) || cantidad < 1) {
            cantidad = 1;
            inputCantidad.value = 1;
        } else if (cantidad > 500) {
            cantidad = 500;
            inputCantidad.value = 500;
        }

        let subtotal = costoBase * factorTamano * cantidad;
        const aplicaMayoreo = cantidad >= 10;
        let total = subtotal;

        if (aplicaMayoreo) {
            total = subtotal * 0.90;
            if (badgeDescuento) badgeDescuento.style.display = 'inline-block';
        } else {
            if (badgeDescuento) badgeDescuento.style.display = 'none';
        }

        animarNumero(precioActualAnimado, total);
        actualizarBotonWhatsApp(total, cantidad, aplicaMayoreo);
    }

    function obtenerDetalleCotizacion(total) {
        const nombreProducto = selectProducto.options[selectProducto.selectedIndex].text.split('(')[0].trim();
        const detalleTamano = selectTamano.options[selectTamano.selectedIndex].text.split('(')[0].trim();
        const cantidad = inputCantidad.value;

        return {
            producto: nombreProducto,
            tamano: detalleTamano,
            cantidad: cantidad,
            total: `$${total.toFixed(2)} MXN`
        };
    }

    function actualizarBotonWhatsApp(total, cantidad, aplicaMayoreo) {
        if (!btnWhatsApp) return;
        const data = obtenerDetalleCotizacion(total);
        const mensaje = `Hola Acrylitec México, generé una cotización en su nueva plataforma web:\n- Artículo: ${data.producto}\n- Tamaño: ${data.tamano}\n- Cantidad: ${data.cantidad} pieza(s)\n- Inversión Estimada: ${data.total}${aplicaMayoreo ? ' (Incluye 10% de descuento por mayoreo)' : ''}\n\n¿Me podrían orientar con las opciones de envío y confirmación de diseño?`;

        const enlaceWhatsApp = `https://wa.me/5215500000000?text=${encodeURIComponent(mensaje)}`;
        btnWhatsApp.setAttribute('href', enlaceWhatsApp);
    }

    if (selectProducto && selectTamano && inputCantidad) {
        selectProducto.addEventListener('change', recalcularCotizador);
        selectTamano.addEventListener('change', recalcularCotizador);
        inputCantidad.addEventListener('input', recalcularCotizador);
        recalcularCotizador();
    }

    if (btnCopiar) {
        btnCopiar.addEventListener('click', () => {
            const data = obtenerDetalleCotizacion(precioActualAnimado);
            const texto = `Cotización Acrylitec México:\nProducto: ${data.producto}\nTamaño: ${data.tamano}\nCantidad: ${data.cantidad} pza(s)\nTotal Estimado: ${data.total}`;

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(texto).then(() => {
                    mostrarToast('¡Cotización copiada al portapapeles!');
                }).catch(() => {
                    mostrarToast('Detalle listo para compartir');
                });
            } else {
                mostrarToast('Detalle listo para compartir');
            }
        });
    }

    // ------------------------------------------------------------------------
    // 8. LIGHTBOX INTERACTIVO DE GALERÍA
    // ------------------------------------------------------------------------
    const modalBackdrop = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    function abrirLightboxManual(src, titulo, desc) {
        if (!modalBackdrop || !modalImg || !modalTitle || !modalDesc) return;
        modalImg.src = src;
        modalTitle.textContent = titulo;
        modalDesc.textContent = desc;

        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function cerrarLightbox() {
        if (!modalBackdrop) return;
        modalBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', cerrarLightbox);
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                cerrarLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modalBackdrop && modalBackdrop.classList.contains('active')) {
                cerrarLightbox();
            }
        } else if (e.key === 'ArrowLeft') {
            if (!modalBackdrop || !modalBackdrop.classList.contains('active')) {
                mostrarProyecto(indiceActivo - 1);
            }
        } else if (e.key === 'ArrowRight') {
            if (!modalBackdrop || !modalBackdrop.classList.contains('active')) {
                mostrarProyecto(indiceActivo + 1);
            }
        }
    });

    // ------------------------------------------------------------------------
    // 9. GESTIÓN DE CONSENTIMIENTO DE COOKIES (NORMATIVA LFPDPPP / RGPD)
    // ------------------------------------------------------------------------
    const cookieBanner = document.getElementById('cookieBanner');
    const btnAceptarCookies = document.getElementById('btnAceptarCookies');
    const btnRechazarCookies = document.getElementById('btnRechazarCookies');
    const btnGestionarCookies = document.getElementById('btnGestionarCookies');

    function verificarEstadoCookies() {
        const estado = localStorage.getItem('acrylitec_cookie_consent');
        if (!estado && cookieBanner) {
            setTimeout(() => {
                cookieBanner.classList.add('visible');
            }, 1200);
        }
    }

    function guardarConsentimiento(decision) {
        localStorage.setItem('acrylitec_cookie_consent', decision);
        if (cookieBanner) {
            cookieBanner.classList.remove('visible');
        }
        mostrarToast(decision === 'aceptadas' ? 'Preferencias guardadas (Aceptadas)' : 'Cookies no esenciales desactivadas');
    }

    if (btnAceptarCookies) {
        btnAceptarCookies.addEventListener('click', () => guardarConsentimiento('aceptadas'));
    }

    if (btnRechazarCookies) {
        btnRechazarCookies.addEventListener('click', () => guardarConsentimiento('esenciales_solo'));
    }

    if (btnGestionarCookies) {
        btnGestionarCookies.addEventListener('click', () => {
            if (cookieBanner) {
                cookieBanner.classList.add('visible');
            }
        });
    }

    verificarEstadoCookies();

    // ------------------------------------------------------------------------
    // 10. NOTIFICACIONES TOAST
    // ------------------------------------------------------------------------
    let toastTimeout;
    function mostrarToast(mensaje) {
        let toast = document.getElementById('globalToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'globalToast';
            toast.className = 'toast-notice';
            document.body.appendChild(toast);
        }

        toast.textContent = mensaje;
        toast.classList.add('show');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3200);
    }
});
