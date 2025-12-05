<div align="center">

# 🍷 La Mansa Paraguay

### *Gastronomía de Autor & Wine Bar*

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.20-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

*Plataforma web moderna para el restaurante y wine bar líder en Asunción, Paraguay*

[🌐 Ver Demo](https://lamansa.vercel.app) • [📱 Contacto](mailto:smillemereles@gmail.com)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características Principales](#-características-principales)
- [Stack Tecnológico](#-stack-tecnológico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Optimizaciones](#-optimizaciones)
- [SEO y Performance](#-seo-y-performance)
- [Deployment](#-deployment)
- [Contribución](#-contribución)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Acerca del Proyecto

**La Mansa Paraguay** es una aplicación web de última generación diseñada para ofrecer una experiencia digital excepcional que refleja la esencia del restaurante: elegancia, sofisticación y pasión por la gastronomía y el vino.

### 🎨 Filosofía de Diseño

- **Minimalismo Elegante**: Diseño limpio que permite que el contenido respire
- **Experiencia Sensorial**: Animaciones suaves y transiciones que emulan la experiencia gastronómica
- **Accesibilidad First**: Cumplimiento de estándares WCAG 2.1 AA
- **Performance Optimizada**: Tiempos de carga < 3s en 3G

---

## ✨ Características Principales

### 🎨 Interfaz de Usuario

- **Diseño Responsive Premium**: Adaptación perfecta a todos los dispositivos
- **Animaciones Cinematográficas**: Transiciones fluidas con Framer Motion
- **Tema Personalizado**: Paleta de colores y tipografías exclusivas
- **Dark Mode Ready**: Preparado para modo oscuro

### 📱 Funcionalidades

- **Menú Digital Interactivo**: 
  - Menú general con categorías (Entradas, Platos Principales, Postres)
  - Menú semanal actualizable
  - Menú de cafetería especializada
  - Promociones especiales de temporada
  
- **Galería Visual Inmersiva**: 
  - Carrusel de imágenes con transiciones suaves
  - Visualización de platos y ambientes
  
- **Sección Sobre Nosotros**:
  - Historia del restaurante
  - Filosofía gastronómica
  - Equipo y valores

- **Sistema de Contacto**:
  - Formulario de contacto con validación
  - Integración con redes sociales
  - Mapa de ubicación interactivo

### 🔒 Páginas Legales

- **Política de Privacidad**: Completa y conforme a GDPR
- **Términos y Condiciones**: Claros y transparentes

---

## 🛠️ Stack Tecnológico

### Core Framework
```json
{
  "react": "^18.3.1",
  "typescript": "~5.5.3",
  "vite": "^5.4.20"
}
```

### Styling & UI
- **TailwindCSS** `3.4.17` - Framework CSS utility-first
- **shadcn/ui** - Componentes UI accesibles y personalizables
- **Radix UI** - Primitivos UI sin estilos
- **Lucide React** - Librería de iconos moderna

### Animation & Interaction
- **Framer Motion** `11.15.0` - Animaciones avanzadas
- **React Router DOM** `6.28.0` - Enrutamiento SPA
- **Embla Carousel** - Carrusel de imágenes performante

### Forms & Validation
- **React Hook Form** `7.54.2` - Gestión de formularios
- **Zod** `3.24.1` - Validación de esquemas TypeScript-first

### Development Tools
- **ESLint** - Linting y análisis estático
- **PostCSS** - Transformación de CSS
- **Autoprefixer** - Prefijos CSS automáticos

---

## 📁 Estructura del Proyecto

```
Lamansa.py/
├── 📂 public/                          # Archivos estáticos
│   ├── robots.txt                      # SEO: Directivas para crawlers
│   ├── sitemap.xml                     # SEO: Mapa del sitio
│   ├── _redirects                      # Configuración de redirects
│   └── carpeta para la galeria de fotos/  # Assets de galería
│
├── 📂 src/
│   ├── 📂 components/                  # Componentes React
│   │   ├── About.tsx                   # Sección Sobre Nosotros
│   │   ├── Contact.tsx                 # Formulario de contacto
│   │   ├── Footer.tsx                  # Footer global
│   │   ├── Gallery.tsx                 # Carrusel de imágenes
│   │   ├── Hero.tsx                    # Hero section
│   │   ├── Navbar.tsx                  # Navegación principal
│   │   ├── PopularItems.tsx            # Productos destacados
│   │   └── 📂 ui/                      # Componentes UI base (shadcn)
│   │
│   ├── 📂 pages/                       # Páginas principales
│   │   ├── Index.tsx                   # Homepage
│   │   ├── MenuGeneral.tsx             # Menú principal
│   │   ├── MenuSemanal.tsx             # Menú semanal
│   │   ├── Cafeteria.tsx               # Menú cafetería
│   │   ├── NavidadEspecial.tsx         # Promociones especiales
│   │   ├── SobreNosotros.tsx           # Página institucional
│   │   ├── PoliticaPrivacidad.tsx      # Página legal
│   │   ├── Terminos.tsx                # Página legal
│   │   └── NotFound.tsx                # Página 404
│   │
│   ├── 📂 hooks/                       # Custom Hooks
│   │   ├── use-mobile.tsx              # Hook para detección mobile
│   │   └── use-toast.ts                # Hook para notificaciones
│   │
│   ├── 📂 lib/                         # Utilidades
│   │   ├── utils.ts                    # Funciones helpers
│   │   └── schema.ts                   # Schemas de validación
│   │
│   ├── App.tsx                         # Componente raíz
│   ├── main.tsx                        # Entry point
│   └── index.css                       # Estilos globales
│
├── 📄 Configuration Files
├── package.json                        # Dependencias NPM
├── tsconfig.json                       # Config TypeScript
├── vite.config.ts                      # Config Vite
├── tailwind.config.ts                  # Config Tailwind
├── eslint.config.js                    # Config ESLint
├── postcss.config.js                   # Config PostCSS
├── components.json                     # Config shadcn/ui
├── vercel.json                         # Config Vercel
└── .gitignore                          # Archivos ignorados
```

---

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 o **bun** >= 1.0.0
- **Git** >= 2.30.0

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/smillemereles/Lamansa.py.git
cd Lamansa.py
```

2. **Instalar dependencias**
```bash
npm install
# o usando bun
bun install
```

3. **Configurar variables de entorno** (si aplica)
```bash
cp .env.example .env.local
# Editar .env.local con tus credenciales
```

4. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

5. **Abrir en el navegador**
```
http://localhost:5173
```

---

## 📜 Scripts Disponibles

| Script | Descripción | Uso |
|--------|-------------|-----|
| `npm run dev` | Inicia servidor de desarrollo con HMR | Desarrollo local |
| `npm run build` | Construye para producción (minificado) | Deployment |
| `npm run preview` | Preview de la build de producción | Testing pre-deploy |
| `npm run lint` | Ejecuta ESLint en todos los archivos | Code quality |

### Scripts Avanzados

```bash
# Build con análisis de bundle
npm run build -- --mode analyze

# Linting con auto-fix
npm run lint -- --fix

# Type checking
npx tsc --noEmit
```

---

## ⚡ Optimizaciones

### Performance

- ✅ **Code Splitting**: Carga diferida de rutas
- ✅ **Tree Shaking**: Eliminación de código muerto
- ✅ **Image Optimization**: Compresión y formatos modernos
- ✅ **Asset Preloading**: Precarga de recursos críticos
- ✅ **Lazy Loading**: Carga diferida de imágenes y componentes

### Bundle Size

```
dist/index.html                    4.96 kB │ gzip:   1.53 kB
dist/assets/index-CMDEyECr.css    75.72 kB │ gzip:  12.70 kB
dist/assets/index-DwFtfiQt.js    560.82 kB │ gzip: 171.53 kB
```

### Configuraciones

**TypeScript**
- ✅ Strict Mode habilitado
- ✅ Path aliases configurados (`@/*`)
- ✅ Type checking exhaustivo

**ESLint**
- ✅ React Hooks rules
- ✅ TypeScript recommended rules
- ✅ A11y rules (accesibilidad)

**Vite**
- ✅ Hot Module Replacement (HMR)
- ✅ Fast Refresh para React
- ✅ Build optimizations

---

## 🔍 SEO y Performance

### SEO Implementado

- ✅ **Meta Tags**: Title, description, keywords
- ✅ **Open Graph**: Compartir en redes sociales
- ✅ **Twitter Cards**: Previsualizaciones en Twitter
- ✅ **Sitemap XML**: `/sitemap.xml`
- ✅ **Robots.txt**: `/robots.txt`
- ✅ **Schema.org**: JSON-LD para rich snippets
- ✅ **Canonical URLs**: Prevención de contenido duplicado

### Performance Metrics

| Métrica | Objetivo | Estado |
|---------|----------|--------|
| First Contentful Paint | < 1.8s | ✅ |
| Time to Interactive | < 3.9s | ✅ |
| Speed Index | < 3.4s | ✅ |
| Total Blocking Time | < 300ms | ✅ |
| Cumulative Layout Shift | < 0.1 | ✅ |

---

## 🌐 Deployment

### Vercel (Recomendado)

```bash
# Deployment automático en cada push a main
git push origin main
```

**Configuración** (`vercel.json`):
- Rewrites para SPA routing
- Headers de seguridad
- Caché optimizado

### cPanel (Manual)

1. **Generar build**
```bash
npm run build
```

2. **Crear ZIP para deployment**
```bash
# Windows PowerShell
Compress-Archive -Path 'dist\*' -DestinationPath 'lamansapy-cpanel.zip'

# Linux/Mac
zip -r lamansapy-cpanel.zip dist/*
```

3. **Subir a cPanel**
   - Acceder al File Manager
   - Subir `lamansapy-cpanel.zip`
   - Extraer en el directorio `public_html`

### Netlify

```bash
# netlify.toml ya configurado
netlify deploy --prod
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
sm:  640px   /* Smartphones landscape */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large screens */
```

### Dispositivos Soportados

- ✅ iPhone SE / 5 (320px)
- ✅ iPhone 12/13/14 (390px)
- ✅ Android devices (360px - 412px)
- ✅ iPad / Tablets (768px - 1024px)
- ✅ Desktop (1280px+)
- ✅ 4K Displays (2560px+)

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. **Fork** el proyecto
2. **Crear** una rama feature
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** tus cambios
   ```bash
   git commit -m 'feat: Add some AmazingFeature'
   ```
4. **Push** a la rama
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Abrir** un Pull Request

### Convenciones de Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: Nueva funcionalidad
fix: Corrección de bug
docs: Cambios en documentación
style: Cambios de formato (no afectan código)
refactor: Refactorización de código
test: Añadir o modificar tests
chore: Tareas de mantenimiento
```

---

## 📄 Licencia

Este proyecto es **privado** y propiedad de **La Mansa Paraguay**.  
Todos los derechos reservados © 2024-2025.

---

## 📞 Contacto

<div align="center">

### 👨‍💻 **Smille Mereles**
*Full Stack Developer*

[![Email](https://img.shields.io/badge/Email-smillemereles%40gmail.com-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:smillemereles@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-smillemereles-181717?style=flat&logo=github&logoColor=white)](https://github.com/smillemereles)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/smillemereles)

---

### 🍷 **La Mansa Paraguay**
*Gastronomía de Autor & Wine Bar*

📍 Asunción, Paraguay  
🌐 [lamansa.com.py](https://lamansa.vercel.app)  
📧 info@lamansa.com.py  
📱 +595 XXX XXX XXX

---

*Desarrollado con ❤️ y ☕ en Paraguay*

**La Mansa Paraguay** — *Donde la pasión por el vino se encuentra con la gastronomía de autor*

</div>
