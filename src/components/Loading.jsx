import React from 'react';

function Loading({ message = "Cargando..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[150px] w-full">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-500 mb-2"></div>
      <span className="text-gray-600 font-medium">{message}</span>
    </div>
  );
}

export default Loading; 
