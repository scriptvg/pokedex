# Pokédex React App

Bienvenido a la Pokédex, una aplicación web moderna desarrollada con React y Vite que permite explorar, buscar y visualizar información detallada de Pokémon utilizando la [PokeAPI](https://pokeapi.co/).

---

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Demo](#demo)
- [Características](#características)
- [Tecnologías y Dependencias](#tecnologías-y-dependencias)
- [Instalación y Puesta en Marcha](#instalación-y-puesta-en-marcha)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Explicación de Carpetas y Archivos](#explicación-de-carpetas-y-archivos)
- [Flujo de la Aplicación](#flujo-de-la-aplicación)
- [Rutas Principales](#rutas-principales)
- [Personalización y Tematización](#personalización-y-tematización)
- [Buenas Prácticas y Estilo de Código](#buenas-prácticas-y-estilo-de-código)
- [Contribuciones](#contribuciones)
- [Preguntas Frecuentes](#preguntas-frecuentes)
- [Despliegue en Producción](#despliegue-en-producción)
- [Autores](#autores)
- [Agradecimientos](#agradecimientos)
- [Licencia](#licencia)

---

## Descripción General

Esta Pokédex es una SPA (Single Page Application) que permite a los usuarios:

- Buscar Pokémon por nombre.
- Visualizar una lista paginada de Pokémon.
- Consultar información detallada de cada Pokémon: tipos, habilidades, estadísticas, imágenes y más.
- Disfrutar de una interfaz moderna, responsiva y con animaciones.

El objetivo es servir como ejemplo educativo de buenas prácticas en React, consumo de APIs, manejo de rutas, hooks personalizados, y estilizado con TailwindCSS.

---

## Demo

> _Puedes ver una demo local ejecutando el proyecto siguiendo las instrucciones de instalación o ingresando a la pagína:_

---

## Características

- **Listado de Pokémon:** Muestra los Pokémon en tarjetas, con paginación y carga incremental.
- **Buscador:** Filtra Pokémon por nombre en tiempo real.
- **Detalle de Pokémon:** Página dedicada con información completa, tipos, habilidades y estadísticas visualizadas en un gráfico radar.
- **Animaciones:** Transiciones suaves y animaciones con Framer Motion.
- **Responsive:** Diseño adaptable a dispositivos móviles, tablets y escritorio.
- **Carga optimizada:** Indicadores de carga y feedback visual.
- **Código modular:** Componentes reutilizables y hooks personalizados.
- **Estilo moderno:** Uso de TailwindCSS para un diseño atractivo y fácil de personalizar.

---

## Tecnologías y Dependencias

### Principales

- **[React 19](https://react.dev/):** Librería principal para la UI.
- **[Vite](https://vitejs.dev/):** Bundler ultrarrápido para desarrollo y build.
- **[TailwindCSS](https://tailwindcss.com/):** Framework de utilidades CSS.
- **[Axios](https://axios-http.com/):** Cliente HTTP para consumir la PokeAPI.
- **[Chart.js](https://www.chartjs.org/)** + **[react-chartjs-2](https://react-chartjs-2.js.org/):** Gráficos de estadísticas.
- **[React Router DOM](https://reactrouter.com/):** Manejo de rutas.
- **[Framer Motion](https://www.framer.com/motion/):** Animaciones.
- **[React Icons](https://react-icons.github.io/react-icons/):** Iconografía.
- **[Lucide React](https://lucide.dev/):** Iconos adicionales.

### Desarrollo

- **[ESLint](https://eslint.org/):** Linter para mantener la calidad del código.
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react):** Integración de React con Vite.

---

## Instalación y Puesta en Marcha

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd pokedex
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   El terminal mostrará la URL local (por defecto [http://localhost:5173](http://localhost:5173)).

4. **Build para producción:**
   ```bash
   npm run build
   ```
   El resultado estará en la carpeta `dist/`.

5. **Previsualiza el build:**
   ```bash
   npm run preview
   ```

---

## Estructura del Proyecto

```
pokedex/
  ├── public/                # Archivos estáticos (favicon, imágenes)
  ├── src/
  │   ├── assets/            # Recursos estáticos (SVG, imágenes)
  │   ├── components/        # Componentes reutilizables
  │   │   ├── Home/          # Componentes de la página de inicio
  │   │   └── Pokedex/       # Componentes específicos de la Pokédex
  │   ├── hooks/             # Custom hooks (lógica reutilizable)
  │   ├── layout/            # Layouts generales (Navbar, estructura)
  │   ├── pages/             # Páginas principales (Home, About, Pokedex)
  │   ├── routes/            # Configuración de rutas
  │   ├── services/          # Lógica de acceso a la API
  │   ├── utils/             # Utilidades (helpers, colores, iconos)
  │   ├── App.jsx            # Componente raíz
  │   ├── main.jsx           # Entry point de la app
  │   └── index.css          # Estilos globales
  ├── package.json
  ├── vite.config.js
  └── README.md
```

---

## Explicación de Carpetas y Archivos

- **public/**  
  Contiene archivos estáticos accesibles directamente, como el favicon y el archivo HTML base.

- **src/assets/**  
  Imágenes y SVG usados en la interfaz.

- **src/components/**  
  Componentes reutilizables.  
  - **Home/**: Navbar y elementos de la página principal.  
  - **Pokedex/**: Tarjetas de Pokémon, lista, detalles, buscador, botón de cargar más, etc.

- **src/hooks/**  
  Hooks personalizados para lógica de negocio:
  - `usePokemonList.js`: Maneja la paginación y carga de Pokémon.
  - `usePokemonSearch.js`: Lógica de búsqueda y filtrado.
  - `usePokemonDetails.js`: Obtiene detalles de un Pokémon.
  - `useRouteLoading.js`: Muestra loading en cambios de ruta.

- **src/layout/**  
  Layouts generales que incluyen Navbar y estructura de página.

- **src/pages/**  
  Páginas principales del sitio:
  - `Home.jsx`: Página de bienvenida y objetivos.
  - `Pokedex.jsx`: Página principal de la Pokédex.
  - `About.jsx`: Información sobre el proyecto.

- **src/routes/**  
  Configuración de rutas con React Router.

- **src/services/**  
  Funciones para consumir la PokeAPI usando Axios.

- **src/utils/**  
  Funciones utilitarias, helpers, colores e iconos por tipo de Pokémon.

- **App.jsx / main.jsx**  
  Entrypoint y componente raíz de la aplicación.

---

## Flujo de la Aplicación

1. **Inicio (`/`):**  
   Página de bienvenida con objetivos y pasos del proyecto.

2. **Pokédex (`/pokedex`):**  
   - Se carga una lista paginada de Pokémon desde la PokeAPI.
   - El usuario puede buscar por nombre (filtrado instantáneo).
   - Al hacer scroll o click en "Cargar más", se obtienen más Pokémon.

3. **Detalle de Pokémon (`/pokedex/:pokemonName`):**  
   - Al seleccionar un Pokémon, se muestra su información detallada.
   - Incluye tipos, habilidades, altura, peso, y un gráfico radar de estadísticas.

4. **About (`/about`):**  
   Información sobre el proyecto y su propósito.

---

## Rutas Principales

- `/` — Página de inicio.
- `/pokedex` — Listado y buscador de Pokémon.
- `/pokedex/:pokemonName` — Detalle de un Pokémon específico.
- `/about` — Acerca del proyecto.

---

## Personalización y Tematización

- **Colores y estilos:**  
  Todos los estilos se gestionan con TailwindCSS. Puedes modificar la paleta en el archivo de configuración de Tailwind o directamente en las clases de los componentes.

- **Iconos por tipo:**  
  Los iconos y colores de cada tipo de Pokémon están definidos en `src/utils/typeIcons.js` y `src/utils/typeColors.js`.  
  Puedes agregar o modificar iconos fácilmente.

- **Animaciones:**  
  Se usan animaciones de Framer Motion para transiciones suaves. Puedes personalizarlas en los componentes.

---

## Buenas Prácticas y Estilo de Código

- **Componentes funcionales y hooks:**  
  Todo el código está basado en componentes funcionales y hooks personalizados para lógica reutilizable.

- **Separación de responsabilidades:**  
  La lógica de negocio (API, hooks) está separada de la presentación (componentes).

- **Linting:**  
  Se utiliza ESLint para mantener la calidad y consistencia del código.

- **Nombres descriptivos:**  
  Los nombres de archivos, funciones y variables son claros y autoexplicativos.

---

## Contribuciones

¡Las contribuciones son bienvenidas!  
Si quieres mejorar la Pokédex, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama nueva: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y haz commit: `git commit -m "Agrega nueva funcionalidad"`
4. Haz push a tu fork: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request describiendo tus cambios.

**Recomendaciones:**
- Mantén el código limpio y documentado.
- Si agregas dependencias, explícalo en el PR.
- Si modificas la estructura, actualiza este README.

---

## Preguntas Frecuentes

**¿Necesito una API Key para la PokeAPI?**  
No, la PokeAPI es pública y gratuita.

**¿Puedo usar este proyecto como base para otro?**  
¡Por supuesto! Solo da el crédito correspondiente si lo publicas.

**¿Cómo agrego más información de los Pokémon?**  
Puedes extender los servicios en `src/services/pokemonService.js` para consumir más endpoints de la PokeAPI.

**¿Cómo cambio el diseño o los colores?**  
Edita las clases de Tailwind en los componentes o modifica la configuración de Tailwind.

**¿Funciona offline?**  
No, requiere conexión a internet para consultar la PokeAPI.

---

## Despliegue en Producción

Puedes desplegar fácilmente esta Pokédex en plataformas como **Vercel** o **Netlify**.

### Despliegue en Vercel

1. Sube tu repositorio a GitHub, GitLab o Bitbucket.
2. Ve a [Vercel](https://vercel.com/) y crea un nuevo proyecto importando tu repo.
3. Vercel detectará automáticamente que es un proyecto Vite/React.
4. Haz click en "Deploy" y espera a que termine el proceso.
5. ¡Listo! Obtendrás una URL pública para tu Pokédex.

### Despliegue en Netlify

1. Sube tu repositorio a GitHub, GitLab o Bitbucket.
2. Ve a [Netlify](https://netlify.com/) y selecciona "Add new site > Import an existing project".
3. Conecta tu repo y configura el build command como `npm run build` y el directorio de salida como `dist`.
4. Haz click en "Deploy site".
5. ¡Tu Pokédex estará online en minutos!

---

## Autores

- **Kromm** — _Desarrollador principal y autor del proyecto._
- [Tu nombre aquí si colaboras]

¿Quieres aparecer aquí? ¡Contribuye y abre un PR!

---

## Agradecimientos

- A [PokeAPI](https://pokeapi.co/) por proveer la API gratuita y abierta de Pokémon.
- A los creadores de [React](https://react.dev/), [Vite](https://vitejs.dev/), [TailwindCSS](https://tailwindcss.com/) y todas las librerías utilizadas.
- A la comunidad de desarrolladores que comparte recursos y tutoriales.

---

## Licencia

Este proyecto es solo para fines educativos y de práctica.  
Puedes modificarlo y adaptarlo libremente.

---

¿Tienes dudas o sugerencias? ¡Abre un issue o contacta al autor!
