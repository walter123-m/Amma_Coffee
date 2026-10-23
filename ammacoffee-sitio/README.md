# AMMACOFFEE · Landing page

## Cómo abrirla en Visual Studio Code
1. Abre la carpeta `ammacoffee-sitio` (Archivo → Abrir carpeta).
2. Instala la extensión **Live Server** y haz clic derecho en `index.html` → *Open with Live Server*.
   (También funciona abriendo `index.html` directamente en el navegador.)
3. Necesitas internet solo para cargar las fuentes de Google.

## Estructura
```
ammacoffee-sitio/
├── index.html              ← estructura y textos (con comentarios ✏️ donde editar)
├── css/                    ← estilos por capas (el orden de carga importa)
│   ├── variables.css       ← 🎨 colores y temas claro/oscuro
│   ├── base.css            ← tipografía, contenedor, animación de aparición
│   ├── components.css      ← botones, tarjetas, pestañas, lightbox
│   ├── nav.css             ← barra superior (+ logo)
│   ├── hero.css            ← portada (+ logo grande)
│   ├── sec-producto.css    ← cinta, cifras, bolsa 3D, notas de sabor
│   ├── sec-historia.css    ← nuestra tierra, galería, línea de tiempo, familia
│   ├── sec-preparacion.css ← video de tostado y calculadora
│   ├── sec-pedido.css      ← pedido y pie de página
│   └── responsive.css      ← móvil y accesibilidad (siempre al final)
├── js/
│   ├── config.js           ← ✏️ tus datos: WhatsApp, año, frases, gramos/ml
│   ├── utils.js            ← utilidades compartidas
│   ├── nav.js · hero.js · marquee.js · reveal.js
│   ├── sec-producto.js · sec-preparacion.js · sec-pedido.js
│   └── media.js            ← lightbox de fotos y video
└── assets/
    ├── logo/               ← pon aquí logo.png
    ├── icons/              ← pon aquí favicon.png
    ├── images/             ← fotos (valle, atardecer, cosecha-hijo, patriarca, póster)
    ├── video/              ← proceso-tostado.mp4
    └── fonts/              ← (opcional) fuentes propias
```

## Qué editar primero
- **Logo:** guarda `assets/logo/logo.png`; aparece solo en la barra y en la portada.
- **Colores:** `css/variables.css`.
- **WhatsApp, año, frases:** `js/config.js`.
- **Fotos y video:** reemplaza los archivos de `assets/` conservando el nombre (o cambia la ruta en `index.html`).
- **Nombres de la familia, precios, testimonios, redes:** busca los comentarios `✏️` en `index.html`. Hay plantillas listas (precios y testimonios) comentadas.
