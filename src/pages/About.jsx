import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 text-gray-800">
      <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">Acerca de la Pokédex</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">¿Qué es este proyecto?</h2>
        <p>
          Esta Pokédex es una aplicación web moderna desarrollada con <b>React</b> y <b>Vite</b> que permite explorar, buscar y visualizar información detallada de Pokémon utilizando la <a href="https://pokeapi.co/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">PokeAPI</a>.
        </p>
        <p className="mt-2">
          El objetivo es servir como ejemplo educativo de buenas prácticas en React, consumo de APIs, manejo de rutas, hooks personalizados y estilizado con TailwindCSS.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Características principales</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Listado de Pokémon con paginación y búsqueda instantánea.</li>
          <li>Vista detallada de cada Pokémon: tipos, habilidades, estadísticas y más.</li>
          <li>Gráficos de estadísticas usando Chart.js.</li>
          <li>Interfaz moderna, responsiva y atractiva con TailwindCSS.</li>
          <li>Navegación fluida con React Router.</li>
          <li>Animaciones con Framer Motion.</li>
          <li>Carga de datos optimizada y feedback visual con componentes de loading.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Tecnologías utilizadas</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li><b>React 19</b> — Librería principal para la UI.</li>
          <li><b>Vite</b> — Bundler ultrarrápido para desarrollo y build.</li>
          <li><b>TailwindCSS</b> — Framework de utilidades CSS.</li>
          <li><b>Axios</b> — Cliente HTTP para consumir la PokeAPI.</li>
          <li><b>Chart.js</b> + <b>react-chartjs-2</b> — Gráficos de estadísticas.</li>
          <li><b>React Router DOM</b> — Manejo de rutas.</li>
          <li><b>Framer Motion</b> — Animaciones.</li>
          <li><b>React Icons</b> y <b>Lucide React</b> — Iconografía.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Estructura del proyecto</h2>
        <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
{`pokedex/
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
  └── README.md`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Agradecimientos</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>A <a href="https://pokeapi.co/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">PokeAPI</a> por proveer la API gratuita y abierta de Pokémon.</li>
          <li>A los creadores de <a href="https://react.dev/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">React</a>, <a href="https://vitejs.dev/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Vite</a>, <a href="https://tailwindcss.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">TailwindCSS</a> y todas las librerías utilizadas.</li>
          <li>A la comunidad de desarrolladores que comparte recursos y tutoriales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">¿Quieres saber más?</h2>
        <p>
          Consulta el <Link to="/" className="text-red-600 underline">Home</Link> para ver los objetivos y pasos del proyecto, o revisa el <a href="https://github.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">README completo</a> en el repositorio.
        </p>
      </section>

      <div className="text-center mt-10">
        <span className="text-gray-500 text-sm">Este proyecto es solo para fines educativos y de práctica. Puedes modificarlo y adaptarlo libremente.</span>
      </div>
    </div>
  );
}

export default About;

