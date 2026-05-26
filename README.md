# Eval U3 - Proviemplea

Proyecto desarrollado para la Evaluación Sumativa Unidad 3 de Desarrollo Frontend.

## Descripción

Landing page estudiantil para el Departamento de Empleo Providencia / Proviemplea. El objetivo es mostrar una solución simple para presentar servicios, testimonios, preguntas frecuentes y un formulario de contacto.

El proyecto usa React como framework frontend, Bootstrap para el diseño visual y archivos JSON como simulación de API o CMS local.

## Tecnologías utilizadas

- React
- Vite
- Bootstrap
- JavaScript
- HTML5
- CSS3
- Git y GitHub

## Funcionalidades principales

- Navegación interactiva con menú responsive.
- Componente reutilizable de tarjeta de servicio.
- Botón “Contáctanos” que rellena automáticamente el servicio seleccionado en el formulario.
- Carrusel de testimonios responsive y accesible.
- Sección “Nosotros”.
- Sección “Servicios”.
- Sección “Preguntas frecuentes”.
- Consumo de datos desde archivos JSON simulando una API/CMS.
- Formulario con validación del lado del cliente.
- Protección básica contra robots mediante checkbox simulado.
- Diseño responsive para móvil, tablet y escritorio.
- Optimización básica de imágenes con `loading="lazy"`.

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/AlanBravo253/Eval_U3A_AlanBravo
```

2. Entrar a la carpeta:

```bash
cd eval-u3-proviemplea
```

3. Instalar dependencias:

```bash
npm install
```

4. Ejecutar el proyecto:

```bash
npm run dev
```

5. Generar versión final:

```bash
npm run build
```

## Estructura del proyecto

```bash
src/
 ├── components/
 │   ├── Navbar.jsx
 │   ├── ServiceCard.jsx
 │   ├── Testimonials.jsx
 │   ├── ContactForm.jsx
 │   └── FAQ.jsx
 ├── data/
 │   ├── services.json
 │   ├── testimonials.json
 │   └── faqs.json
 ├── styles/
 │   └── styles.css
 ├── App.jsx
 └── main.jsx
```

## Uso de componentes

### ServiceCard

Componente reutilizable que recibe un servicio por props.

```jsx
<ServiceCard service={service} onSelectService={setSelectedService} />
```

### Testimoniales

Componente de carrusel simple que recibe testimonios desde JSON.

```jsx
<Testimonials testimonials={testimonials} />
```

### FAQ

Componente que muestra preguntas frecuentes en formato acordeón.

```jsx
<FAQ faqs={faqs} />
```

## Buenas prácticas aplicadas

1. Separación del código en componentes reutilizables.
2. Uso de nombres claros para archivos, variables y funciones.
3. Uso de carpeta `data` para simular consumo de API o CMS.
4. Uso de props para comunicar datos entre componentes.
5. Formularios con `label` asociado a cada campo.
6. Uso de textos alternativos en imágenes.
7. Navegación con enlaces internos claros.
8. Diseño responsive con Bootstrap.
9. Carga diferida de imágenes con `loading="lazy"`.
10. Validación de formulario antes de enviar datos.
11. Mensajes de error y éxito visibles para el usuario.
12. Uso de Git para registrar avances del desarrollo.

## Accesibilidad y usabilidad

- Se usan etiquetas semánticas como `main`, `section`, `article` y `footer`.
- Las imágenes tienen atributo `alt`.
- Los botones tienen `aria-label` cuando corresponde.
- El formulario usa `label` para cada campo.
- Se considera navegación por teclado mediante estados `focus` visibles.
- El diseño es responsive para facilitar el uso en celulares.

## Seguridad básica

- Validación de campos obligatorios.
- Validación de formato de correo electrónico.
- Límite de caracteres en campos de texto.
- Checkbox de verificación anti-robot simulado.
- No se guardan datos reales ni sensibles en esta versión.

## Optimización

- Imágenes externas con tamaño reducido.
- Uso de `loading="lazy"` en imágenes.
- Componentes separados para mejorar mantenimiento.
- Build optimizado con Vite.

## Trabajo colaborativo sugerido con Git

Ramas sugeridas:

```bash
feature/navbar
feature/services
feature/testimonials
feature/contact-form
feature/faq
feature/readme
```

Commits sugeridos:

```bash
git commit -m "feat: add navbar component"
git commit -m "feat: add reusable service cards"
git commit -m "feat: add contact form validation"
git commit -m "docs: add project documentation"
```

## Retrospectiva del equipo

### Qué funcionó bien

- React permitió dividir el sitio en componentes simples.
- Bootstrap facilitó el diseño responsive.
- JSON permitió simular una API sin crear backend.

### Qué se puede mejorar

- Conectar el formulario a un backend real.
- Agregar reCAPTCHA real.
- Usar un CMS real como Strapi o Contentful.
- Realizar pruebas con usuarios reales.

### Plan de acción

1. Mejorar validaciones del formulario.
2. Agregar autenticación para administración de contenido.
3. Optimizar imágenes locales en formato WebP.
4. Publicar la landing page en Vercel o Netlify.

## Integrante

- Alan Gabriel Bravo Cuadra

