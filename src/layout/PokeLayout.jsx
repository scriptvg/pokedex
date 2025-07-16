import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Home/Navbar';
import Loading from '../components/Loading';
import { useRouteLoading } from '../hooks/useRouteLoading';

function PokeLayout() {
  const isRouteLoading = useRouteLoading();

  return (
    <div>
      <Navbar />
      {isRouteLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      )}
      {/* <Footer /> */}
    </div>
  )
}

export default PokeLayout
