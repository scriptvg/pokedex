import React from 'react';

function LoadMoreButton({ onLoadMore, isLoading, hasMore, searchTerm }) {
  if (!hasMore || searchTerm) return null;

  return (
    <button
      onClick={onLoadMore}
      disabled={isLoading}
      className="w-full mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
    >
      {isLoading ? 'Cargando...' : 'Cargar más'}
    </button>
  );
}

export default LoadMoreButton; 
