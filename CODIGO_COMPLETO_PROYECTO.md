# PAQUETE DE CODIGO FUENTE EN TEXTO PLANO - PLATAFORMA DIGITAL ACRYLITEC
## Optimizado para Procesamiento e Ingestion en Cuadernos Gemini / NotebookLM / LLMs

> **Proposito del Archivo:** Este documento reune de manera lineal y estructurada los archivos clave del repositorio de Acrylitec Mexico, facilitando la indexacion, analisis de funciones y generacion de resumenes o manuales automaticos mediante inteligencia artificial.

### INDICE DE ARCHIVOS EMPAQUETADOS
| # | Ruta del Archivo | Lenguaje / Formato | Proposito |
|---|---|---|---|
| 1 | acrylitec_web/index.html | HTML | Estructura semantica principal, metadatos SEO, OpenGraph, accesibilidad WCAG y layout general. |
| 2 | acrylitec_web/style.css | CSS | Hoja de estilos modular, tokens de diseno CSS (:root), temas Claro y Oscuro, skeletons de carga, animaciones y media queries responsivas. |
| 3 | acrylitec_web/script.js | JAVASCRIPT | Motor interactivo del frontend: carrusel/spotlight de galeria, cotizador matematico con interpolacion numerica, WhatsApp generator y LocalStorage. |
| 4 | acrylitec_web/404.html | HTML | Pagina de error 404 personalizada con diseno de marca para Cloudflare Pages. |
| 5 | acrylitec_web/_headers | TEXT | Politicas de seguridad HTTP (CSP, HSTS, X-Frame) y reglas de Edge Caching para Cloudflare Pages. |
| 6 | acrylitec_web/_redirects | TEXT | Reglas de redireccion de rutas y URLs limpias en Cloudflare Pages. |
| 7 | acrylitec_web/optimizar_imagenes.py | PYTHON | Script automatizado de procesamiento masivo a WebP con remuestreo Lanczos y compresion predictiva. |
| 8 | wrangler.toml | TOML | Configuracion de proyecto y compilacion para Cloudflare Wrangler CLI. |
| 9 | acrylitec_web/robots.txt | TEXT | Directivas para rastreadores web e indexacion de motores de busqueda. |
| 10 | acrylitec_web/sitemap.xml | XML | Mapa de sitio XML para posicionamiento web. |

---

// ==============================================================================
// ARCHIVO: acrylitec_web/index.html
// DESCRIPCION: Estructura semantica principal, metadatos SEO, OpenGraph, accesibilidad WCAG y layout general.
// ==============================================================================
// acrylitec_web/index.html
```html
<!DOCTYPE html>
<html lang="es" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acrylitec | Objetos de Acrílico que Brillan con tu Historia</title>
    
    <!-- Metadatos de Rendimiento y SEO -->
    <meta name="description" content="Diseño, corte láser y fabricación de piezas exclusivas en acrílico: letreros neón, portarretratos, exhibidores comerciales, decoración y regalos empresariales personalizados.">
    <meta name="keywords" content="acrílico personalizado, letreros de acrílico, corte láser, portarretratos, exhibidores comerciales, urnas, Acrylitec México">
    <meta name="author" content="Acrylitec México">
    <meta name="theme-color" content="#0a0a0a">

    <!-- Open Graph / Redes Sociales -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="Acrylitec | Objetos de Acrílico que Brillan con tu Historia">
    <meta property="og:description" content="Piezas únicas en acrílico con corte láser de alta precisión. Letreros, marcos, exhibidores y proyectos a la medida.">
    <meta property="og:image" content="fotos/img-principal.webp">

    <!-- Preconexión a Fuentes de Google -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Hoja de Estilos Optimizada y Modular -->
    <link rel="stylesheet" href="style.css">

    <!-- Favicon SVG -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23d4af37'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>">
</head>
<body>

    <!-- Barra de Progreso de Lectura Superior -->
    <div id="scrollProgress" aria-hidden="true"></div>

    <!-- CABECERA PRINCIPAL (NAVBAR RESPONSIVA CON TEMA Y MÓVIL) -->
    <header>
        <a href="#inicio" class="logo-container" aria-label="Ir al inicio de Acrylitec">
            <div class="logo-box">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
            </div>
            <div class="logo-text">Acryli<span>tec</span></div>
        </a>

        <!-- Navegación para Pantallas Grandes -->
        <nav class="nav-desktop" aria-label="Navegación principal">
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#galeria">Galería Exclusiva</a></li>
                <li><a href="#cotizador">Cotizador</a></li>
            </ul>
        </nav>

        <!-- Acciones: Selector de Tema y Botón Hamburguesa -->
        <div class="header-actions">
            <button id="themeToggleBtn" class="theme-toggle-btn" aria-label="Cambiar a modo claro" title="Alternar modo claro / oscuro">
                ☀️
            </button>
            <button id="hamburgerBtn" class="hamburger-btn" aria-label="Abrir menú de navegación" aria-expanded="false">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </div>
    </header>

    <!-- Menú Desplegable Móvil -->
    <div id="mobileNavDrawer" class="mobile-nav-drawer" aria-label="Menú móvil">
        <ul>
            <li><a href="#inicio" class="mobile-nav-link">Inicio</a></li>
            <li><a href="#productos" class="mobile-nav-link">Productos</a></li>
            <li><a href="#galeria" class="mobile-nav-link">Galería Exclusiva</a></li>
            <li><a href="#cotizador" class="mobile-nav-link">Cotizador en Línea</a></li>
        </ul>
    </div>

    <!-- SECCIÓN HERO REDISEÑADA (ESTÉTICA DE LUJO, BALANCEADA Y ACOGEDORA) -->
    <section class="hero" id="inicio">
        <div class="hero-content reveal">
            <div class="hero-tag">
                <span class="hero-tag-dot" aria-hidden="true"></span>
                Taller Especializado & Manufactura Láser
            </div>
            <h1>Objetos que brillan con <span>tu historia.</span></h1>
            <p>Transformamos polímeros de acrílico de alta pureza en creaciones excepcionales: letreros para empresas, portarretratos, decoración de interiores y soluciones industriales con precisión milimétrica.</p>
            
            <div class="hero-buttons">
                <a href="#cotizador" class="btn-primary">Cotizar Proyecto en Línea →</a>
                <a href="#galeria" class="btn-secondary">Explorar Galería</a>
            </div>

            <!-- Indicadores de Confianza Rápidos -->
            <div class="hero-trust-list">
                <div class="hero-trust-item"><span>✓</span> Corte Láser CNC ±0.1mm</div>
                <div class="hero-trust-item"><span>✓</span> Envíos a todo México</div>
                <div class="hero-trust-item"><span>✓</span> 100% Acrílico Grado Óptico</div>
            </div>
        </div>

        <!-- Tarjeta Escaparate en Perspectiva -->
        <div class="hero-showcase-wrapper reveal">
            <div class="hero-card-frame">
                <!-- Badges Flotantes -->
                <div class="hero-badge-float badge-top-right">
                    <span>✨</span> Acrílico Grado Óptico
                </div>
                <div class="hero-badge-float badge-bottom-left">
                    <span>★</span> +500 Proyectos Fabricados
                </div>

                <div class="hero-card-img-box skeleton-box">
                    <picture>
                        <source srcset="fotos/img-principal.webp" type="image/webp">
                        <img src="fotos/img-principal.jpg" alt="Acrylitec Creaciones de Acrílico Personalizadas" width="1800" height="1004" fetchpriority="high" decoding="async">
                    </picture>
                </div>
            </div>
        </div>
    </section>

    <!-- SECCIÓN DE PRODUCTOS -->
    <section class="section" id="productos">
        <div class="section-header reveal">
            <span class="section-tag">Nuestras Líneas de Fabricación</span>
            <h2 class="section-title">Todo lo que puedes crear en acrílico.</h2>
        </div>
        <div class="products-grid">
            <div class="card reveal">
                <div class="card-icon" aria-hidden="true">🏷️</div>
                <h3>Letreros Personalizados</h3>
                <p>Nombres, frases, siluetas y logotipos corporativos en acrílico cortado con precisión láser milimétrica e iluminación LED opcional.</p>
            </div>
            <div class="card reveal">
                <div class="card-icon" aria-hidden="true">🖼️</div>
                <h3>Portarretratos Flotantes</h3>
                <p>Marcos elegantes con pernos de acero y placas de acrílico cristalino de alta transparencia que preservan tus momentos memorables.</p>
            </div>
            <div class="card reveal">
                <div class="card-icon" aria-hidden="true">🔑</div>
                <h3>Llaveros y Recuerdos</h3>
                <p>Diseños conmemorativos con código Spotify, fotografías encapsuladas, fechas especiales o mensajes grabados para eventos y bodas.</p>
            </div>
            <div class="card reveal">
                <div class="card-icon" aria-hidden="true">🏠</div>
                <h3>Decoración del Hogar</h3>
                <p>Piezas artísticas, botánicos de pared, lámparas de luz indirecta y mobiliario geométrico que transforman cualquier espacio residencial.</p>
            </div>
            <div class="card reveal">
                <div class="card-icon" aria-hidden="true">🎁</div>
                <h3>Regalos Empresariales</h3>
                <p>Trofeos institucionales, placas conmemorativas, reconocimientos de honor y artículos promocionales con la identidad de tu marca.</p>
            </div>
            <div class="card reveal">
                <div class="card-icon" aria-hidden="true">✨</div>
                <h3>Arte y Cubiertas Especiales</h3>
                <p>Proyectos de ingeniería a la medida: cubiertas de protección para maquinaria, urnas de seguridad, vitrinas y arte volumétrico.</p>
            </div>
        </div>
    </section>

    <!-- NUEVA GALERÍA SPOTLIGHT INTERACTIVA Y SHOWCASE DESCRIPTIVO -->
    <section class="galeria-custom-section" id="galeria">
        <div class="custom-banner-box reveal">
            <h3>✨ ¡Lo que se te ocurra se puede hacer en acrílico!</h3>
            <p>No existen límites para la personalización y la ingeniería de materiales. Diseñamos y fabricamos proyectos únicos con tolerancias milimétricas. Explora a detalle cada proyecto en nuestro escaparate dinámico:</p>
            <a href="#cotizador" class="btn-primary">Ir al Cotizador en Línea →</a>
        </div>

        <div class="section-header reveal" style="text-align: center; margin-bottom: 25px;">
            <span class="section-tag">Portafolio & Acabados</span>
            <h2 class="section-title">Escaparate de Creaciones Exclusivas</h2>
        </div>

        <!-- Filtros de Categorías -->
        <div class="gallery-filters reveal">
            <button class="gallery-filter-btn active" data-category="todos">Todos los Trabajos (8)</button>
            <button class="gallery-filter-btn" data-category="comercial">Comercial & Negocios</button>
            <button class="gallery-filter-btn" data-category="decoracion">Arquitectura & Hogar</button>
            <button class="gallery-filter-btn" data-category="industrial">Industrial & Seguridad</button>
            <button class="gallery-filter-btn" data-category="regalos">Regalos & Eventos</button>
        </div>

        <!-- Escenario Spotlight Maestro (Integra Fotografía + Historia y Especificaciones) -->
        <div class="gallery-spotlight-stage reveal">
            <!-- Ventana de Medios (Izquierda) -->
            <div class="spotlight-media skeleton-box" id="spotlightMediaBox" title="Haz clic para ampliar la imagen">
                <picture>
                    <source id="spotlightPicSource" srcset="fotos/img1.webp" type="image/webp">
                    <img id="spotlightImg" src="fotos/img1.jpg" alt="Mapa en Acrílico con Pernos de Acero" loading="lazy" decoding="async">
                </picture>
                <div class="spotlight-zoom-hint">
                    🔍 Clic para ampliar
                </div>
            </div>

            <!-- Ficha Técnica y Descriptiva (Derecha) -->
            <div class="spotlight-details">
                <div>
                    <span class="spotlight-category-tag" id="spotlightCategory">Arquitectura & Decoración</span>
                    <h3 class="spotlight-title" id="spotlightTitle">Mapas Geográficos de Lujo</h3>
                    <p class="spotlight-desc" id="spotlightDesc">Cuadros artísticos en acrílico transparente de 6mm con pernos separadores de acero inoxidable y grabado láser milimétrico. Diseñados como piezas focales en recepciones ejecutivas, notarías o residencias.</p>
                    
                    <div class="spotlight-specs-box">
                        <h5>Especificaciones Técnicas del Proyecto</h5>
                        <ul class="spotlight-specs-list" id="spotlightSpecsList">
                            <li>Acrílico cristal de 6mm de pureza óptica</li>
                            <li>Corte y grabado láser de ultra-definición (±0.1 mm)</li>
                            <li>Juego de 4 pernos separadores de acero inoxidable</li>
                        </ul>
                    </div>
                </div>

                <div class="spotlight-actions-bar">
                    <a id="spotlightBtnCotizar" href="#cotizador" class="btn-primary" style="padding: 10px 20px; font-size: 0.9rem;">
                        Cotizar esta pieza →
                    </a>

                    <div class="spotlight-nav-controls">
                        <button id="btnSpotlightPrev" class="spotlight-nav-btn" aria-label="Proyecto anterior">‹</button>
                        <div class="spotlight-counter" id="spotlightCounter"><span>01</span> / 08</div>
                        <button id="btnSpotlightNext" class="spotlight-nav-btn" aria-label="Proyecto siguiente">›</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tira de Miniaturas del Carrusel Inferior -->
        <div class="gallery-carousel-wrapper reveal">
            <div class="gallery-thumbnail-track" id="thumbnailTrack">
                <!-- Miniaturas generadas dinámicamente por script.js -->
            </div>
        </div>
    </section>

    <!-- COTIZADOR AUTOMÁTICO EN VIVO (MODELO MATEMÁTICO) -->
    <section class="cotizador-section reveal" id="cotizador">
        <div class="cotizador-form">
            <span class="section-tag">Herramienta Interactiva</span>
            <h2>Cotizador <span>Automático</span></h2>
            <p class="cotizador-desc">Calcula en tiempo real un presupuesto estimado para tu proyecto de acrílico personalizado.</p>
            
            <div class="form-group">
                <label for="tipoProducto">Tipo de Producto</label>
                <select id="tipoProducto">
                    <option value="350">Letrero / Cuadro / Mapa Personalizado ($350 MXN)</option>
                    <option value="250">Portarretrato o Urna ($250 MXN)</option>
                    <option value="120">Llavero Personalizado ($120 MXN)</option>
                    <option value="600">Mueble / Exhibidor / Cubierta Industrial ($600 MXN)</option>
                    <option value="450">Regalo / Caja Conmemorativa ($450 MXN)</option>
                </select>
            </div>

            <div class="form-group">
                <label for="tamano">Tamaño o Dimensión</label>
                <select id="tamano">
                    <option value="1">Pequeño (Aprox. 15-20 cm)</option>
                    <option value="1.5">Mediano (Aprox. 30-40 cm) [+50%]</option>
                    <option value="2.2">Grande / Estructura Especial (Aprox. 50-80 cm) [+120%]</option>
                </select>
            </div>

            <div class="form-group">
                <label for="cantidad">Cantidad de Piezas (Descuento del 10% a partir de 10 pzas)</label>
                <input type="number" id="cantidad" value="1" min="1" max="500">
            </div>
        </div>

        <div class="resultado-card">
            <h3>Inversión Estimada</h3>
            <div class="precio-final" id="precioTotal">$350.00 MXN</div>
            <div id="badgeDescuento" class="descuento-badge" style="display: none;">🎉 10% Descuento Mayoreo Aplicado</div>
            <p class="precio-aviso">*Costo estimado de referencia. Sujeto a confirmación de especificaciones técnicas.</p>
            
            <div class="resultado-actions">
                <a id="btnWhatsAppCotizacion" href="#" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.19 8.19 0 0 1-5.82 2.41c-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>
                    Enviar Cotización por WhatsApp
                </a>
                <button id="btnCopiarCotizacion" class="btn-copy" type="button">
                    📋 Copiar Detalle
                </button>
            </div>
            
            <!-- ENLACE RECOMENDADO DE MERCADO LIBRE -->
            <div class="recomendado-ml">
                ¿Prefieres comprar directamente con garantía y envío protegido? Visita nuestro <a href="https://mercadolibre.com.mx" target="_blank" rel="noopener noreferrer">canal oficial en Mercado Libre</a>.
            </div>
        </div>
    </section>

    <!-- BANNER ADICIONAL DE MERCADO LIBRE -->
    <section class="ml-banner-section reveal">
        <div class="ml-banner-text">
            <span class="ml-badge-tag">Canal Oficial de Distribución</span>
            <h3>También nos encuentras en Mercado Libre</h3>
            <p>Compra protegida, envíos seguros a toda la República Mexicana y opciones de pago a meses sin intereses.</p>
        </div>
        <a href="https://mercadolibre.com.mx" target="_blank" rel="noopener noreferrer" class="btn-ml-store">
            Ir a Tienda Mercado Libre →
        </a>
    </section>

    <!-- PIE DE PÁGINA (FOOTER) -->
    <footer>
        <div class="footer-content">
            <div class="footer-col">
                <a href="#inicio" class="logo-container">
                    <div class="logo-box">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    <div class="logo-text">Acryli<span>tec</span></div>
                </a>
                <p>Creamos objetos únicos en acrílico que cuentan tu historia con acabados de alta fidelidad. Calidad, creatividad y manufactura mexicana en cada pieza.</p>
            </div>
            <div class="footer-col">
                <h4>Productos</h4>
                <ul>
                    <li><a href="#productos">Letreros Neón</a></li>
                    <li><a href="#productos">Llaveros Grabados</a></li>
                    <li><a href="#productos">Regalos de Honor</a></li>
                    <li><a href="#productos">Portarretratos</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Colecciones</h4>
                <ul>
                    <li><a href="#galeria">Exhibidores Comerciales</a></li>
                    <li><a href="#galeria">Decoración Residencial</a></li>
                    <li><a href="#galeria">Protección Industrial</a></li>
                    <li><a href="#galeria">Urnas y Buzones</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Síguenos</h4>
                <div class="social-icons">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Síguenos en Instagram">📷</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Síguenos en Facebook">f</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div>© 2026 Acrylitec México. Todos los derechos reservados. Desarrollado en Proyecto de Residencias Profesionales.</div>
            <button id="btnGestionarCookies" class="cookie-btn" type="button">Gestionar Cookies</button>
        </div>
    </footer>

    <!-- MODAL LIGHTBOX PARA VISUALIZACIÓN DE ALTA RESOLUCIÓN -->
    <div id="galleryModal" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modalTitle" aria-hidden="true">
        <div class="lightbox-content">
            <button id="modalCloseBtn" class="modal-close-btn" aria-label="Cerrar modal">&times;</button>
            <div class="lightbox-img-box">
                <img id="modalImage" src="" alt="Vista previa de producto Acrylitec">
            </div>
            <div class="lightbox-info">
                <h3 id="modalTitle">Título del Trabajo</h3>
                <p id="modalDesc">Descripción detallada del material y técnica utilizada.</p>
            </div>
        </div>
    </div>

    <!-- BANNER DE CONSENTIMIENTO DE COOKIES (NORMATIVA LFPDPPP / RGPD) -->
    <div id="cookieBanner" class="cookie-banner" role="region" aria-label="Aviso de privacidad y cookies">
        <p>Utilizamos cookies esenciales y de análisis de rendimiento para garantizar el funcionamiento fluido de este sitio web y mejorar tu experiencia de navegación, conforme a las directrices de privacidad aplicables.</p>
        <div class="cookie-actions">
            <button id="btnRechazarCookies" class="btn-cookie-reject" type="button">Solo Esenciales</button>
            <button id="btnAceptarCookies" class="btn-cookie-accept" type="button">Aceptar Todas</button>
        </div>
    </div>

    <!-- Script Modular Asíncrono -->
    <script src="script.js" defer></script>
</body>
</html>
```

// ==============================================================================
// ARCHIVO: acrylitec_web/style.css
// DESCRIPCION: Hoja de estilos modular, tokens de diseno CSS (:root), temas Claro y Oscuro, skeletons de carga, animaciones y media queries responsivas.
// ==============================================================================
// acrylitec_web/style.css
```css
/* ==========================================================================
   ACRYLITEC - HOJA DE ESTILOS PROFESIONAL OPTIMIZADA (V2.2)
   Diseño de Alta Gama | Galería Spotlight Interactiva | Hero Rediseñado
   Compatible con Cloudflare Pages Edge CDN | WCAG 2.1 AA
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. VARIABLES CSS (DESIGN TOKENS Y PALETA CROMÁTICA)
   -------------------------------------------------------------------------- */
:root {
    /* Paleta de Identidad de Marca Acrylitec */
    --color-vino: #6a1b29;
    --color-vino-dark: #450f19;
    --color-vino-light: #8e2739;
    --color-dorado: #d4af37;
    --color-dorado-hover: #e5c358;
    --color-dorado-claro: #f3e5ab;
    --color-dorado-sombra: rgba(212, 175, 55, 0.25);
    --color-dorado-glow: rgba(212, 175, 55, 0.35);
    --color-ml: #ffe600;

    /* Tema Oscuro por defecto (Obsidian Luxury) */
    --bg-page: #0a0a0a;
    --bg-surface-1: #111111;
    --bg-surface-2: #161616;
    --bg-surface-3: #222222;
    --bg-glass: rgba(18, 18, 18, 0.85);
    --border-color: rgba(255, 255, 255, 0.1);
    --border-color-focus: var(--color-dorado);
    --text-primary: #f5f5f5;
    --text-secondary: #a3a3a3;
    --text-muted: #737373;
    --card-bg: #141414;
    --card-hover-border: rgba(212, 175, 55, 0.5);
    --shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.4);
    --shadow-glow: 0 0 25px rgba(212, 175, 55, 0.2);
    --skeleton-base: #1c1c1c;
    --skeleton-shine: #292929;
    --header-bg: rgba(10, 10, 10, 0.9);
    --hero-glow-1: rgba(106, 27, 41, 0.25);
    --hero-glow-2: rgba(212, 175, 55, 0.15);
}

/* Tema Claro (Ivory Champagne Luxury) */
[data-theme="light"] {
    --bg-page: #faf9f6;
    --bg-surface-1: #ffffff;
    --bg-surface-2: #f4f1ea;
    --bg-surface-3: #eae5da;
    --bg-glass: rgba(255, 255, 255, 0.92);
    --border-color: rgba(0, 0, 0, 0.08);
    --border-color-focus: var(--color-vino);
    --text-primary: #151515;
    --text-secondary: #555555;
    --text-muted: #7a7a7a;
    --card-bg: #ffffff;
    --card-hover-border: var(--color-dorado);
    --shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.06);
    --shadow-glow: 0 4px 20px rgba(212, 175, 55, 0.25);
    --skeleton-base: #e6e3dd;
    --skeleton-shine: #f7f5f0;
    --header-bg: rgba(255, 255, 255, 0.92);
    --hero-glow-1: rgba(106, 27, 41, 0.08);
    --hero-glow-2: rgba(212, 175, 55, 0.12);
}

/* --------------------------------------------------------------------------
   2. RESET Y TIPOGRAFÍA BASE
   -------------------------------------------------------------------------- */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    background-color: var(--bg-page);
    color: var(--text-primary);
    overflow-x: hidden;
    line-height: 1.6;
    transition: background-color 0.35s ease, color 0.35s ease;
    min-height: 100vh;
}

/* Barra de progreso de lectura / scroll */
#scrollProgress {
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, var(--color-vino), var(--color-dorado), var(--color-dorado-claro));
    z-index: 9999;
    transition: width 0.1s linear;
}

::selection {
    background-color: var(--color-dorado);
    color: #000;
}

:focus-visible {
    outline: 2px solid var(--color-dorado);
    outline-offset: 3px;
}

/* --------------------------------------------------------------------------
   3. HEADER Y NAVEGACIÓN RESPONSIVA
   -------------------------------------------------------------------------- */
header {
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 6%;
    background-color: var(--header-bg);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.logo-container {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    cursor: pointer;
}

.logo-box {
    background: linear-gradient(135deg, #181818, #050505);
    padding: 9px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(212, 175, 55, 0.3);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.logo-container:hover .logo-box {
    transform: rotate(5deg) scale(1.05);
    border-color: var(--color-dorado);
}

.logo-box svg {
    width: 22px;
    height: 22px;
    fill: var(--color-dorado);
}

.logo-text {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.5px;
}

.logo-text span {
    color: var(--color-dorado);
}

.nav-desktop ul {
    display: flex;
    list-style: none;
    gap: 32px;
    align-items: center;
}

.nav-desktop ul li a {
    text-decoration: none;
    color: var(--text-secondary);
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.25s ease;
    position: relative;
    padding: 6px 0;
}

.nav-desktop ul li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-dorado);
    transition: width 0.25s ease;
}

.nav-desktop ul li a:hover {
    color: var(--text-primary);
}

.nav-desktop ul li a:hover::after {
    width: 100%;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 14px;
}

.theme-toggle-btn {
    background: var(--bg-surface-2);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.15rem;
    transition: all 0.3s ease;
    padding: 0;
}

.theme-toggle-btn:hover {
    border-color: var(--color-dorado);
    transform: rotate(20deg) scale(1.08);
    background: var(--bg-surface-3);
}

.hamburger-btn {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    background: var(--bg-surface-2);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    cursor: pointer;
    gap: 5px;
    padding: 0;
    transition: background 0.3s;
}

.hamburger-line {
    width: 20px;
    height: 2px;
    background-color: var(--text-primary);
    transition: transform 0.3s ease, opacity 0.3s ease;
    border-radius: 2px;
}

.hamburger-btn.active .hamburger-line:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.hamburger-btn.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.hamburger-btn.active .hamburger-line:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

.mobile-nav-drawer {
    display: none;
    position: fixed;
    top: 71px;
    left: 0;
    width: 100%;
    background-color: var(--bg-surface-1);
    border-bottom: 1px solid var(--border-color);
    box-shadow: 0 15px 30px rgba(0,0,0,0.25);
    padding: 24px 6%;
    z-index: 999;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}

.mobile-nav-drawer.open {
    display: block;
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
}

.mobile-nav-drawer ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.mobile-nav-drawer ul li a {
    text-decoration: none;
    color: var(--text-primary);
    font-size: 1.15rem;
    font-weight: 600;
    display: block;
    padding: 10px 0;
    border-bottom: 1px solid var(--border-color);
    transition: color 0.2s ease, padding-left 0.2s ease;
}

.mobile-nav-drawer ul li a:hover {
    color: var(--color-dorado);
    padding-left: 8px;
}

/* --------------------------------------------------------------------------
   4. HERO SECTION REDISEÑADA (ESTÉTICA DE LUJO, BALANCEADA Y ACOGEDORA)
   -------------------------------------------------------------------------- */
.hero {
    position: relative;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    background: radial-gradient(circle at 15% 45%, var(--hero-glow-1) 0%, transparent 55%),
                radial-gradient(circle at 85% 30%, var(--hero-glow-2) 0%, transparent 50%),
                linear-gradient(180deg, var(--bg-surface-1) 0%, var(--bg-page) 100%);
    color: var(--text-primary);
    min-height: calc(90vh - 72px);
    padding: clamp(50px, 7vw, 90px) 7%;
    gap: clamp(30px, 5vw, 60px);
    border-bottom: 1px solid var(--border-color);
    overflow: hidden;
}

.hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 2;
}

.hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(212, 175, 55, 0.1);
    border: 1px solid rgba(212, 175, 55, 0.25);
    color: var(--color-dorado);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 30px;
    width: fit-content;
    margin-bottom: 22px;
}

.hero-tag-dot {
    width: 7px;
    height: 7px;
    background-color: var(--color-dorado);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--color-dorado);
    animation: pulseDot 2s infinite ease-in-out;
}

@keyframes pulseDot {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.3); opacity: 0.6; }
}

.hero h1 {
    font-size: clamp(2.4rem, 4.8vw, 3.8rem);
    line-height: 1.15;
    font-weight: 800;
    margin-bottom: 20px;
    color: var(--text-primary);
    letter-spacing: -0.5px;
}

.hero h1 span {
    background: linear-gradient(135deg, var(--color-dorado) 0%, #e8c665 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
}

.hero p {
    color: var(--text-secondary);
    font-size: clamp(1rem, 1.35vw, 1.15rem);
    line-height: 1.65;
    margin-bottom: 30px;
    max-width: 530px;
}

.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 30px;
}

.btn-primary {
    background: linear-gradient(135deg, var(--color-dorado) 0%, #c1961e 100%);
    color: #111;
    padding: 14px 28px;
    font-weight: 700;
    font-size: 0.98rem;
    border-radius: 8px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
    cursor: pointer;
    border: none;
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.32);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(212, 175, 55, 0.45);
    filter: brightness(1.08);
}

.btn-secondary {
    background: var(--bg-surface-2);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    padding: 14px 28px;
    font-weight: 600;
    font-size: 0.98rem;
    border-radius: 8px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.25s ease;
}

.btn-secondary:hover {
    border-color: var(--color-dorado);
    color: var(--color-dorado);
    transform: translateY(-2px);
    background: var(--bg-surface-3);
}

/* Indicadores de Confianza Rápidos en el Hero */
.hero-trust-list {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    font-size: 0.85rem;
    color: var(--text-secondary);
}

.hero-trust-item {
    display: flex;
    align-items: center;
    gap: 6px;
}

.hero-trust-item span {
    color: var(--color-dorado);
    font-weight: 700;
}

/* Presentación Estilo Tarjeta Escaparate en el Hero */
.hero-showcase-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.hero-card-frame {
    position: relative;
    width: 100%;
    max-width: 580px;
    border-radius: 20px;
    overflow: visible;
    padding: 10px;
    background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(212, 175, 55, 0.15));
    border: 1px solid rgba(212, 175, 55, 0.3);
    box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 40px var(--color-dorado-sombra);
    transition: transform 0.4s ease;
}

.hero-card-frame:hover {
    transform: translateY(-5px);
}

.hero-card-img-box {
    width: 100%;
    aspect-ratio: 16 / 10;
    border-radius: 14px;
    overflow: hidden;
    position: relative;
    background-color: #000;
}

.hero-card-img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
}

.hero-card-frame:hover .hero-card-img-box img {
    transform: scale(1.04);
}

/* Badges flotantes en la imagen del Hero */
.hero-badge-float {
    position: absolute;
    background: var(--bg-glass);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border-color);
    padding: 10px 16px;
    border-radius: 10px;
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--text-primary);
    box-shadow: 0 10px 25px rgba(0,0,0,0.35);
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 3;
    pointer-events: none;
}

.badge-top-right {
    top: -15px;
    right: -10px;
    border-color: rgba(212, 175, 55, 0.4);
}

.badge-bottom-left {
    bottom: -15px;
    left: -10px;
    border-color: rgba(106, 27, 41, 0.5);
}

/* --------------------------------------------------------------------------
   5. SKELETON LOADERS
   -------------------------------------------------------------------------- */
.skeleton-box {
    position: relative;
    overflow: hidden;
    background-color: var(--skeleton-base);
}

.skeleton-box::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.08) 20%,
        rgba(255, 255, 255, 0.15) 60%,
        rgba(255, 255, 255, 0)
    );
    animation: shimmer 1.8s infinite;
}

@keyframes shimmer {
    100% {
        transform: translateX(100%);
    }
}

.image-loaded .skeleton-box::after,
.skeleton-box.image-loaded::after {
    display: none;
}

/* --------------------------------------------------------------------------
   6. SECCIÓN PRODUCTOS / TARJETAS
   -------------------------------------------------------------------------- */
.section {
    padding: clamp(60px, 8vw, 100px) 7%;
    background-color: var(--bg-page);
    transition: background-color 0.35s ease;
}

.section-header {
    margin-bottom: 45px;
}

.section-tag {
    color: var(--color-dorado);
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 12px;
    display: block;
}

.section-title {
    font-size: clamp(2rem, 3.8vw, 2.9rem);
    font-weight: 800;
    color: var(--text-primary);
    line-height: 1.2;
    letter-spacing: -0.5px;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 28px;
}

.card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 36px 28px;
    border-radius: 14px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--color-vino), var(--color-dorado));
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-soft), var(--shadow-glow);
    border-color: var(--card-hover-border);
}

.card:hover::before {
    opacity: 1;
}

.card-icon {
    width: 52px;
    height: 52px;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(106, 27, 41, 0.15));
    border: 1px solid rgba(212, 175, 55, 0.3);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 22px;
    font-size: 1.6rem;
    transition: transform 0.3s ease;
}

.card:hover .card-icon {
    transform: scale(1.1) rotate(5deg);
}

.card h3 {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--text-primary);
}

.card p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.55;
}

/* --------------------------------------------------------------------------
   7. NUEVA GALERÍA INTERACTIVA SPOTLIGHT & SHOWCASE DESCRIPTIVO
   -------------------------------------------------------------------------- */
.galeria-custom-section {
    background: linear-gradient(180deg, var(--bg-surface-1) 0%, var(--bg-page) 100%);
    color: var(--text-primary);
    padding: clamp(60px, 8vw, 100px) 7%;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    position: relative;
    overflow: hidden;
}

/* Banner de Cabecera en Galería */
.custom-banner-box {
    background: linear-gradient(135deg, #181818 0%, #350d16 100%);
    border: 1px solid var(--color-dorado);
    padding: clamp(35px, 5vw, 50px);
    border-radius: 16px;
    margin-bottom: 50px;
    text-align: center;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.custom-banner-box h3 {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    color: var(--color-dorado-claro);
    margin-bottom: 12px;
    font-weight: 800;
}

.custom-banner-box p {
    color: #e0e0e0;
    font-size: clamp(0.98rem, 1.4vw, 1.12rem);
    max-width: 820px;
    margin: 0 auto 24px auto;
    line-height: 1.6;
}

/* Filtros de Categorías en Galería */
.gallery-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 35px;
    justify-content: center;
}

.gallery-filter-btn {
    background: var(--bg-surface-2);
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
    padding: 8px 18px;
    border-radius: 30px;
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
}

.gallery-filter-btn:hover {
    border-color: var(--color-dorado);
    color: var(--text-primary);
}

.gallery-filter-btn.active {
    background: var(--color-dorado);
    color: #000;
    border-color: var(--color-dorado);
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.35);
}

/* ESCENARIO SPOTLIGHT MAESTRO (INTEGRA IMAGEN Y DESCRIPCIÓN CON DISTINCIÓN) */
.gallery-spotlight-stage {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
    margin-bottom: 35px;
    transition: border-color 0.3s;
}

.gallery-spotlight-stage:hover {
    border-color: rgba(212, 175, 55, 0.4);
}

/* Lado Izquierdo: Ventana de la Fotografía */
.spotlight-media {
    position: relative;
    background-color: #000;
    min-height: 440px;
    max-height: 540px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
}

.spotlight-media picture,
.spotlight-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
}

.spotlight-media:hover img {
    transform: scale(1.05);
}

.spotlight-zoom-hint {
    position: absolute;
    bottom: 16px;
    right: 16px;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 0.8rem;
    padding: 6px 14px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 6px;
    pointer-events: none;
    transition: background 0.3s;
}

.spotlight-media:hover .spotlight-zoom-hint {
    background: var(--color-dorado);
    color: #000;
}

/* Lado Derecho: Tarjeta Descriptiva y Especificaciones */
.spotlight-details {
    padding: clamp(30px, 4vw, 45px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(135deg, var(--bg-surface-1), var(--bg-surface-2));
    border-left: 1px solid var(--border-color);
}

.spotlight-category-tag {
    color: var(--color-dorado);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: inline-block;
}

.spotlight-title {
    font-size: clamp(1.6rem, 2.5vw, 2.2rem);
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 14px;
    line-height: 1.2;
}

.spotlight-desc {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.65;
    margin-bottom: 22px;
}

.spotlight-specs-box {
    background: var(--bg-surface-3);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 16px 18px;
    margin-bottom: 25px;
}

.spotlight-specs-box h5 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--color-dorado);
    margin-bottom: 8px;
    font-weight: 700;
}

.spotlight-specs-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 0.88rem;
    color: var(--text-primary);
}

.spotlight-specs-list li {
    display: flex;
    align-items: center;
    gap: 8px;
}

.spotlight-specs-list li::before {
    content: '◆';
    color: var(--color-dorado);
    font-size: 0.7rem;
}

.spotlight-actions-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    flex-wrap: wrap;
    padding-top: 15px;
    border-top: 1px solid var(--border-color);
}

.spotlight-nav-controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.spotlight-nav-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--bg-surface-3);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 0.2s;
}

.spotlight-nav-btn:hover {
    background: var(--color-dorado);
    color: #000;
    border-color: var(--color-dorado);
}

.spotlight-counter {
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--text-muted);
}

.spotlight-counter span {
    color: var(--color-dorado);
}

/* TIRA DE MINIATURAS DEL CARRUSEL INFERIOR */
.gallery-carousel-wrapper {
    position: relative;
    margin-top: 10px;
}

.gallery-thumbnail-track {
    display: flex;
    gap: 14px;
    overflow-x: auto;
    padding-bottom: 12px;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
    scrollbar-color: var(--color-dorado) var(--bg-surface-2);
}

.gallery-thumbnail-track::-webkit-scrollbar {
    height: 6px;
}

.gallery-thumbnail-track::-webkit-scrollbar-track {
    background: var(--bg-surface-2);
    border-radius: 3px;
}

.gallery-thumbnail-track::-webkit-scrollbar-thumb {
    background: var(--color-dorado);
    border-radius: 3px;
}

.thumb-card {
    flex: 0 0 160px;
    scroll-snap-align: start;
    border-radius: 10px;
    overflow: hidden;
    background: var(--card-bg);
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s ease;
    display: flex;
    flex-direction: column;
}

.thumb-card:hover {
    border-color: rgba(212, 175, 55, 0.4);
    transform: translateY(-3px);
}

.thumb-card.active {
    border-color: var(--color-dorado);
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
}

.thumb-img-box {
    width: 100%;
    height: 100px;
    overflow: hidden;
    background: #000;
}

.thumb-img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.thumb-info {
    padding: 8px 10px;
    background: var(--bg-surface-2);
}

.thumb-info h6 {
    font-size: 0.8rem;
    color: var(--text-primary);
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* --------------------------------------------------------------------------
   8. COTIZADOR AUTOMÁTICO INTERACTIVO
   -------------------------------------------------------------------------- */
.cotizador-section {
    background: linear-gradient(145deg, var(--bg-surface-1) 0%, var(--bg-surface-2) 100%);
    color: var(--text-primary);
    padding: clamp(40px, 6vw, 75px) 6%;
    border-radius: 18px;
    margin: 60px 7%;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 45px;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-soft);
    position: relative;
}

.cotizador-form h2 {
    font-size: clamp(2rem, 3.5vw, 2.7rem);
    margin-bottom: 12px;
    font-weight: 800;
    letter-spacing: -0.5px;
}

.cotizador-form h2 span {
    color: var(--color-dorado);
}

.cotizador-desc {
    color: var(--text-secondary);
    margin-bottom: 28px;
    font-size: 1rem;
}

.form-group {
    margin-bottom: 22px;
}

.form-group label {
    display: block;
    font-size: 0.92rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-secondary);
}

.form-group select, 
.form-group input {
    width: 100%;
    padding: 13px 16px;
    background-color: var(--bg-surface-3);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    border-radius: 8px;
    font-size: 0.98rem;
    transition: border-color 0.25s, box-shadow 0.25s;
    outline: none;
}

.form-group select:focus, 
.form-group input:focus {
    border-color: var(--color-dorado);
    box-shadow: 0 0 0 3px var(--color-dorado-sombra);
}

.resultado-card {
    background: var(--card-bg);
    border: 2px solid var(--color-dorado);
    padding: clamp(30px, 4vw, 45px);
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), var(--shadow-glow);
}

.resultado-card h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.precio-final {
    font-size: clamp(2.8rem, 5vw, 3.8rem);
    font-weight: 800;
    color: var(--color-dorado);
    margin-bottom: 12px;
    line-height: 1;
    letter-spacing: -1px;
}

.descuento-badge {
    display: inline-block;
    align-self: center;
    background-color: rgba(34, 197, 94, 0.15);
    color: #4ade80;
    border: 1px solid rgba(74, 222, 128, 0.3);
    font-size: 0.8rem;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 20px;
    margin-bottom: 15px;
}

.precio-aviso {
    color: var(--text-muted);
    font-size: 0.85rem;
    margin-bottom: 22px;
}

.resultado-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}

.btn-whatsapp {
    background-color: #25d366;
    color: #fff;
    padding: 14px 20px;
    font-weight: 700;
    border-radius: 8px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: transform 0.25s, filter 0.25s, box-shadow 0.25s;
    border: none;
    cursor: pointer;
    font-size: 0.96rem;
}

.btn-whatsapp:hover {
    filter: brightness(1.08);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
}

.btn-copy {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid var(--border-color);
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.88rem;
    font-weight: 600;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-copy:hover {
    border-color: var(--color-dorado);
    color: var(--color-dorado);
}

.recomendado-ml {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid var(--border-color);
    font-size: 0.88rem;
    color: var(--text-secondary);
}

.recomendado-ml a {
    color: #eab308;
    text-decoration: underline;
    font-weight: 600;
    transition: opacity 0.25s;
}

[data-theme="light"] .recomendado-ml a {
    color: #b45309;
}

.recomendado-ml a:hover {
    opacity: 0.8;
}

/* --------------------------------------------------------------------------
   9. BANNER MERCADO LIBRE
   -------------------------------------------------------------------------- */
.ml-banner-section {
    background: linear-gradient(135deg, #fff7b2 0%, #ffea79 100%);
    color: #111111;
    padding: clamp(35px, 6vw, 65px) 6%;
    margin: 50px 7%;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(0, 0, 0, 0.08);
}

.ml-badge-tag {
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #555;
    display: block;
    margin-bottom: 6px;
}

.ml-banner-text h3 {
    font-size: clamp(1.8rem, 3.2vw, 2.4rem);
    margin-bottom: 8px;
    font-weight: 800;
    letter-spacing: -0.5px;
}

.ml-banner-text p {
    font-size: clamp(0.95rem, 1.4vw, 1.08rem);
    color: #333333;
    max-width: 620px;
}

.btn-ml-store {
    background-color: var(--color-ml);
    color: #000;
    padding: 14px 28px;
    font-weight: 800;
    font-size: 1rem;
    border-radius: 8px;
    text-decoration: none;
    border: 2px solid #000;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    transition: transform 0.25s, box-shadow 0.25s;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-ml-store:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* --------------------------------------------------------------------------
   10. MODALES (LIGHTBOX DE GALERÍA Y COOKIES)
   -------------------------------------------------------------------------- */
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.88);
    backdrop-filter: blur(10px);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    padding: 20px;
}

.modal-backdrop.active {
    opacity: 1;
    pointer-events: auto;
}

.lightbox-content {
    max-width: 900px;
    width: 100%;
    background: var(--bg-surface-1);
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid var(--color-dorado);
    box-shadow: 0 25px 50px rgba(0,0,0,0.6);
    position: relative;
    transform: scale(0.95);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-backdrop.active .lightbox-content {
    transform: scale(1);
}

.lightbox-img-box {
    width: 100%;
    max-height: 520px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lightbox-img-box img {
    max-width: 100%;
    max-height: 520px;
    object-fit: contain;
}

.lightbox-info {
    padding: 24px;
    background: var(--bg-surface-1);
}

.lightbox-info h3 {
    color: var(--color-dorado);
    font-size: 1.35rem;
    margin-bottom: 6px;
}

.lightbox-info p {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.modal-close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 36px;
    height: 36px;
    background: rgba(0,0,0,0.7);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.2s;
    z-index: 10;
}

.modal-close-btn:hover {
    background: var(--color-dorado);
    color: #000;
}

.cookie-banner {
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;
    max-width: 600px;
    margin: 0 auto;
    background: var(--bg-surface-1);
    border: 1px solid var(--border-color);
    padding: 22px 24px;
    border-radius: 12px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    z-index: 1500;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transform: translateY(120%);
    opacity: 0;
    transition: transform 0.4s ease, opacity 0.4s ease;
}

.cookie-banner.visible {
    transform: translateY(0);
    opacity: 1;
}

.cookie-banner p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.5;
}

.cookie-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

.btn-cookie-accept {
    background-color: var(--color-dorado);
    color: #000;
    border: none;
    padding: 8px 18px;
    border-radius: 6px;
    font-weight: 700;
    font-size: 0.88rem;
    cursor: pointer;
    transition: filter 0.2s;
}

.btn-cookie-reject {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid var(--border-color);
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 0.88rem;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-cookie-reject:hover {
    color: var(--text-primary);
    border-color: var(--text-secondary);
}

/* --------------------------------------------------------------------------
   11. FOOTER
   -------------------------------------------------------------------------- */
footer {
    background-color: var(--bg-surface-1);
    color: var(--text-secondary);
    padding: 70px 7% 30px 7%;
    border-top: 1px solid var(--border-color);
    transition: background-color 0.35s ease;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
    padding-bottom: 50px;
    border-bottom: 1px solid var(--border-color);
}

.footer-col h4 {
    color: var(--text-primary);
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-bottom: 20px;
    font-weight: 700;
}

.footer-col p {
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-top: 15px;
    max-width: 320px;
}

.footer-col ul {
    list-style: none;
}

.footer-col ul li {
    margin-bottom: 10px;
}

.footer-col ul li a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.92rem;
    transition: color 0.25s ease, padding-left 0.25s ease;
    display: inline-block;
}

.footer-col ul li a:hover {
    color: var(--color-dorado);
    padding-left: 4px;
}

.social-icons {
    display: flex;
    gap: 12px;
}

.social-icon {
    width: 42px;
    height: 42px;
    background-color: var(--bg-surface-2);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-primary);
    text-decoration: none;
    font-size: 1.1rem;
    transition: all 0.25s ease;
}

.social-icon:hover {
    border-color: var(--color-dorado);
    background-color: var(--bg-surface-3);
    color: var(--color-dorado);
    transform: translateY(-3px);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    font-size: 0.85rem;
    color: var(--text-muted);
}

.cookie-btn {
    background: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.25s;
}

.cookie-btn:hover {
    border-color: var(--color-dorado);
    color: var(--text-primary);
}

/* --------------------------------------------------------------------------
   12. ANIMACIONES DE SCROLL REVEAL Y UTILIDADES
   -------------------------------------------------------------------------- */
.reveal {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: opacity, transform;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

.toast-notice {
    position: fixed;
    bottom: 25px;
    right: 25px;
    background: var(--bg-surface-1);
    border: 1px solid var(--color-dorado);
    color: var(--text-primary);
    padding: 14px 22px;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    z-index: 3000;
    font-size: 0.92rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
    transform: translateY(100px);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.toast-notice.show {
    transform: translateY(0);
    opacity: 1;
}

/* --------------------------------------------------------------------------
   13. MEDIA QUERIES (ADAPTACIÓN RESPONSIVA)
   -------------------------------------------------------------------------- */
@media (max-width: 1024px) {
    .hero {
        grid-template-columns: 1fr;
        text-align: center;
        padding-top: 50px;
    }
    .hero-content {
        align-items: center;
    }
    .hero-tag {
        margin-left: auto;
        margin-right: auto;
    }
    .hero p {
        margin-left: auto;
        margin-right: auto;
    }
    .hero-buttons {
        justify-content: center;
    }
    .hero-trust-list {
        justify-content: center;
    }
    .hero-showcase-wrapper {
        margin-top: 30px;
    }
    .gallery-spotlight-stage {
        grid-template-columns: 1fr;
    }
    .spotlight-media {
        min-height: 320px;
    }
    .spotlight-details {
        border-left: none;
        border-top: 1px solid var(--border-color);
    }
    .cotizador-section {
        grid-template-columns: 1fr;
    }
    .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
}

@media (max-width: 768px) {
    .nav-desktop {
        display: none;
    }
    .hamburger-btn {
        display: flex;
    }
    .section, .galeria-custom-section {
        padding: 50px 5%;
    }
    .cotizador-section, .ml-banner-section {
        margin: 35px 5%;
        padding: 30px 5%;
    }
    .ml-banner-section {
        flex-direction: column;
        text-align: center;
    }
    .btn-ml-store {
        width: 100%;
        justify-content: center;
    }
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .footer-col p {
        margin-left: auto;
        margin-right: auto;
    }
    .social-icons {
        justify-content: center;
    }
    .footer-bottom {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }
    .btn-primary, .btn-secondary {
        width: 100%;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .products-grid {
        grid-template-columns: 1fr;
    }
    .precio-final {
        font-size: 2.6rem;
    }
    .badge-top-right, .badge-bottom-left {
        display: none;
    }
    .thumb-card {
        flex: 0 0 130px;
    }
}

@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    .reveal {
        opacity: 1 !important;
        transform: none !important;
    }
}
```

// ==============================================================================
// ARCHIVO: acrylitec_web/script.js
// DESCRIPCION: Motor interactivo del frontend: carrusel/spotlight de galeria, cotizador matematico con interpolacion numerica, WhatsApp generator y LocalStorage.
// ==============================================================================
// acrylitec_web/script.js
```javascript
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

    function mostrarProyecto(indice, autoCentrarMiniatura = true) {
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

        // Actualizar estado activo en miniaturas sin desplazar la ventana principal
        const thumbs = thumbnailTrack ? thumbnailTrack.querySelectorAll('.thumb-card') : [];
        thumbs.forEach((t, i) => {
            if (i === indiceActivo) {
                t.classList.add('active');
                if (autoCentrarMiniatura && thumbnailTrack) {
                    const scrollDestino = t.offsetLeft - (thumbnailTrack.clientWidth / 2) + (t.clientWidth / 2);
                    thumbnailTrack.scrollTo({ left: Math.max(0, scrollDestino), behavior: 'smooth' });
                }
            } else {
                t.classList.remove('active');
            }
        });
    }

    if (btnSpotlightPrev) {
        btnSpotlightPrev.addEventListener('click', () => mostrarProyecto(indiceActivo - 1, true));
    }

    if (btnSpotlightNext) {
        btnSpotlightNext.addEventListener('click', () => mostrarProyecto(indiceActivo + 1, true));
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
            mostrarProyecto(0, true);
        });
    });

    renderizarMiniaturas();
    // Inicialización al cargar: autoCentrarMiniatura en false para no alterar el scroll del Hero
    mostrarProyecto(0, false);

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

    // Asegurar que al abrir la página inicie siempre en la cabecera / Hero si no hay ancla en la URL
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }
});
```

// ==============================================================================
// ARCHIVO: acrylitec_web/404.html
// DESCRIPCION: Pagina de error 404 personalizada con diseno de marca para Cloudflare Pages.
// ==============================================================================
// acrylitec_web/404.html
```html
<!DOCTYPE html>
<html lang="es" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página No Encontrada | Acrylitec</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .error-hero {
            min-height: 80vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 40px 20px;
        }
        .error-code {
            font-size: clamp(5rem, 15vw, 9rem);
            font-weight: 800;
            line-height: 1;
            background: linear-gradient(135deg, var(--color-dorado), var(--color-vino-light));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
        }
        .error-hero h1 {
            font-size: clamp(1.5rem, 3vw, 2.2rem);
            margin-bottom: 16px;
            color: var(--text-primary);
        }
        .error-hero p {
            color: var(--text-secondary);
            max-width: 500px;
            margin-bottom: 30px;
            font-size: 1.05rem;
        }
    </style>
</head>
<body>
    <header>
        <a href="/" class="logo-container">
            <div class="logo-box">
                <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div class="logo-text">Acryli<span>tec</span></div>
        </a>
    </header>

    <main class="error-hero">
        <div class="error-code">404</div>
        <h1>Pieza No Encontrada</h1>
        <p>Parece que la página que buscas no existe o fue reubicada en nuestro taller digital de acrílico.</p>
        <div style="display: flex; gap: 15px; flex-wrap: wrap; justify-content: center;">
            <a href="/" class="btn-primary">Volver al Inicio →</a>
            <a href="/#cotizador" class="btn-secondary">Cotizar Proyecto</a>
        </div>
    </main>

    <footer style="text-align: center; padding: 30px; border-top: 1px solid var(--border-color);">
        <p style="color: var(--text-muted); font-size: 0.85rem;">© 2026 Acrylitec México. Todos los derechos reservados.</p>
    </footer>
</body>
</html>
```

// ==============================================================================
// ARCHIVO: acrylitec_web/_headers
// DESCRIPCION: Politicas de seguridad HTTP (CSP, HSTS, X-Frame) y reglas de Edge Caching para Cloudflare Pages.
// ==============================================================================
// acrylitec_web/_headers
```text
# ==============================================================================
# CLOUDFLARE PAGES - CABECERAS HTTP Y POLÍTICAS DE CACHÉ
# ==============================================================================

# Reglas de Seguridad Globales
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://wa.me; frame-ancestors 'none';

# Control de Caché para Documentos HTML (Revalidación en tiempo real)
/*.html
  Cache-Control: public, max-age=0, must-revalidate

/
  Cache-Control: public, max-age=0, must-revalidate

# Control de Caché para Imágenes WebP y JPG (Inmutables por 1 año en Edge CDN)
/fotos/*
  Cache-Control: public, max-age=31536000, immutable

# Control de Caché para Estilos y Scripts (1 semana con revalidación suave)
/*.css
  Cache-Control: public, max-age=604800, stale-while-revalidate=86400

/*.js
  Cache-Control: public, max-age=604800, stale-while-revalidate=86400
```

// ==============================================================================
// ARCHIVO: acrylitec_web/_redirects
// DESCRIPCION: Reglas de redireccion de rutas y URLs limpias en Cloudflare Pages.
// ==============================================================================
// acrylitec_web/_redirects
```text
# ==============================================================================
# CLOUDFLARE PAGES - REGLAS DE REDIRECCIÓN Y RUTAS LIMPIAS
# ==============================================================================

# Normalización de rutas y alias canónicos
/home          /                  301
/index         /                  301
/catalogo      /#productos        302
/cotizar       /#cotizador        302
/presupuesto   /#cotizador        302
/galeria       /#galeria          302
```

// ==============================================================================
// ARCHIVO: acrylitec_web/optimizar_imagenes.py
// DESCRIPCION: Script automatizado de procesamiento masivo a WebP con remuestreo Lanczos y compresion predictiva.
// ==============================================================================
// acrylitec_web/optimizar_imagenes.py
```python
"""
=============================================================================
ACRYLITEC - SCRIPT DE OPTIMIZACIÓN Y CONVERSIÓN MASIVA A WEBP
Proyecto de Residencias Profesionales
Requisitos: Python 3.8+ y biblioteca Pillow (pip install pillow)
=============================================================================
"""

import os
from PIL import Image

def optimizar_catalogo(directorio_fotos='fotos', calidad=88):
    """
    Escanea el directorio de fotos, redimensiona imágenes sobredimensionadas
    utilizando remuestreo Lanczos de alta fidelidad y las exporta al formato
    moderno WebP con compresión de método 6.
    """
    if not os.path.exists(directorio_fotos):
        print(f"Error: El directorio '{directorio_fotos}' no existe.")
        return

    print("=" * 70)
    print("ACRYLITEC: INICIANDO PIPELINE DE OPTIMIZACIÓN WEBP")
    print("=" * 70)

    total_original = 0
    total_optimizado = 0
    procesadas = 0

    for archivo in sorted(os.listdir(directorio_fotos)):
        nombre_lower = archivo.lower()
        if nombre_lower.endswith(('.jpg', '.jpeg', '.png')) and not nombre_lower.endswith('.webp'):
            ruta_origen = os.path.join(directorio_fotos, archivo)
            nombre_base = os.path.splitext(archivo)[0]
            ruta_destino = os.path.join(directorio_fotos, f"{nombre_base}.webp")

            peso_orig = os.path.getsize(ruta_origen)
            total_original += peso_orig

            with Image.open(ruta_origen) as img:
                # Regla de dimensionamiento: 1800px para imagen principal (Hero), 1200px para galería
                max_dim = 1800 if 'principal' in nombre_lower else 1200
                ancho, alto = img.size

                if max(ancho, alto) > max_dim:
                    ratio = max_dim / max(ancho, alto)
                    nuevo_tamano = (int(ancho * ratio), int(alto * ratio))
                    resample_filter = getattr(Image, 'Resampling', Image).LANCZOS
                    img_procesada = img.resize(nuevo_tamano, resample_filter)
                else:
                    img_procesada = img

                # Guardado en WebP con compresión optimizada
                img_procesada.save(ruta_destino, 'WEBP', quality=calidad, method=6)

            peso_nuevo = os.path.getsize(ruta_destino)
            total_optimizado += peso_nuevo
            reduccion = (1 - (peso_nuevo / peso_orig)) * 100
            procesadas += 1

            print(f"✔ [{archivo}] {peso_orig / 1024:.1f} KB -> [{nombre_base}.webp] {peso_nuevo / 1024:.1f} KB (-{reduccion:.1f}%)")

    print("-" * 70)
    if total_original > 0:
        ahorro_total = (1 - (total_optimizado / total_original)) * 100
        print(f"RESUMEN FINAL: {procesadas} imágenes procesadas")
        print(f"Peso Inicial : {total_original / (1024 * 1024):.2f} MB")
        print(f"Peso Final   : {total_optimizado / (1024 * 1024):.2f} MB")
        print(f"Ahorro Neto  : {ahorro_total:.2f}% de reducción de ancho de banda")
    print("=" * 70)

if __name__ == '__main__':
    directorio = os.path.join(os.path.dirname(__file__), 'fotos')
    optimizar_catalogo(directorio)
```

// ==============================================================================
// ARCHIVO: wrangler.toml
// DESCRIPCION: Configuracion de proyecto y compilacion para Cloudflare Wrangler CLI.
// ==============================================================================
// wrangler.toml
```toml
# Cloudflare Pages Configuration
name = "acrylitec-web"
compatibility_date = "2026-11-12"
pages_build_output_dir = "acrylitec_web"
```

// ==============================================================================
// ARCHIVO: acrylitec_web/robots.txt
// DESCRIPCION: Directivas para rastreadores web e indexacion de motores de busqueda.
// ==============================================================================
// acrylitec_web/robots.txt
```text
User-agent: *
Allow: /

Sitemap: https://acrylitec.pages.dev/sitemap.xml
```

// ==============================================================================
// ARCHIVO: acrylitec_web/sitemap.xml
// DESCRIPCION: Mapa de sitio XML para posicionamiento web.
// ==============================================================================
// acrylitec_web/sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://acrylitec.pages.dev/</loc>
    <lastmod>2026-11-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

