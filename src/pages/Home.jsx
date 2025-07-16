import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
   <div className="max-w-4xl mx-auto py-10 px-4 text-gray-800">
      <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">Desarrollo del Proyecto Pokédex</h1>

      {/* 4.1 Contexto General */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4.1 Contexto General</h2>
        <p>
          El universo Pokémon es una de las franquicias más reconocidas a nivel global, cautivando a millones de personas a través de videojuegos, series y cultura pop. Sin embargo, la información sobre las criaturas, sus características y estadísticas suele estar dispersa en diferentes plataformas, muchas veces en inglés o con interfaces poco amigables para nuevos usuarios o estudiantes. Ante esta situación, surge la necesidad de una plataforma web moderna, educativa y visualmente atractiva que centralice y facilite el acceso a la información de Pokémon, promoviendo el aprendizaje y la curiosidad tanto en jóvenes como en adultos.
        </p>
      </section>

      {/* 4.2 Problemática Identificada */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4.2 Problemática Identificada</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>La información sobre Pokémon está fragmentada y no siempre es fácil de consultar desde dispositivos móviles.</li>
          <li>Muchas plataformas carecen de una experiencia de usuario moderna, responsiva y accesible.</li>
          <li>No existe una Pokédex en español, de código abierto, que sirva como ejemplo educativo de buenas prácticas en desarrollo web moderno (React, Vite, TailwindCSS).</li>
          <li>Los usuarios interesados en aprender desarrollo web no cuentan con un proyecto de referencia que combine consumo de APIs, diseño responsivo, animaciones y visualización de datos.</li>
        </ul>
      </section>

      {/* 4.3 Oportunidad Tecnológica */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4.3 Oportunidad Tecnológica</h2>
        <p>
          Este proyecto propone la creación de una Pokédex digital, moderna y accesible, desarrollada con tecnologías actuales como <b>React</b>, <b>Vite</b> y <b>TailwindCSS</b>. La plataforma está organizada en módulos que reflejan las necesidades de los usuarios:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>Visualización estructurada y atractiva de la información de cada Pokémon.</li>
          <li>Buscador interactivo y filtrado en tiempo real.</li>
          <li>Visualización de estadísticas mediante gráficos.</li>
          <li>Navegación fluida y animaciones modernas.</li>
          <li>Código abierto y modular, ideal para aprendizaje y extensión.</li>
        </ul>
      </section>

      {/* 4.4 Justificación del Proyecto */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4.4 Justificación del Proyecto</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Permite a estudiantes y entusiastas aprender sobre desarrollo web moderno con un caso práctico y divertido.</li>
          <li>Centraliza la información de Pokémon en una interfaz amigable y responsiva.</li>
          <li>Fomenta la cultura del software libre y la colaboración.</li>
          <li>Sirve como base para futuros proyectos educativos, hackathons o talleres de programación.</li>
        </ul>
      </section>

      {/* 4.5 Objetivos del Proyecto */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4.5 Objetivos del Proyecto</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-1">Objetivo General</h3>
          <p>
            Desarrollar una Pokédex web integral, moderna y accesible, que centralice la información de Pokémon y sirva como ejemplo de buenas prácticas en desarrollo web con React.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-1">Objetivos Específicos</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Centralizar la información de Pokémon de la PokeAPI en una interfaz atractiva y fácil de usar.</li>
            <li>Implementar un sistema de búsqueda y filtrado eficiente.</li>
            <li>Visualizar estadísticas de cada Pokémon mediante gráficos interactivos.</li>
            <li>Garantizar la responsividad y accesibilidad en todos los dispositivos.</li>
            <li>Documentar el proyecto para que sirva como referencia educativa.</li>
            <li>Fomentar la colaboración y el aprendizaje a través del código abierto.</li>
          </ul>
        </div>
      </section>

      {/* Enlace a más información */}
      <div className="text-center mt-10">
        <span className="text-gray-500 text-sm">¿Quieres saber más? Consulta la sección <Link to="/about" className="text-red-600 underline">Acerca de</Link> o revisa el README completo en el repositorio.</span>
      </div>
   </div> 
  )
}

export default Home
