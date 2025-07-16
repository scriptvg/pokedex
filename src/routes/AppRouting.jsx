import React, { Suspense, lazy } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Loading from './../components/Loading';

const Home = lazy(() => import('./../pages/Home'));
const About = lazy(() => import('./../pages/About'));
const Pokedex = lazy(() => import('./../pages/Pokedex'));
const Layout = lazy(() => import('./../layout/Layout'));
const PokeLayout = lazy(() => import('./../layout/PokeLayout'));
const PokemonDetailPanel = lazy(() => import('../components/Pokedex/PokemonDetailPanel'));

function AppRouting() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Route>
          <Route path="/pokedex" element={<PokeLayout />}>
            <Route index element={<Pokedex />} />
            <Route path=":pokemonName" element={<PokemonDetailPanel />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default AppRouting
