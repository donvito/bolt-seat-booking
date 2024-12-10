import React from 'react';

export function Screen() {
  return (
    <div className="w-full max-w-2xl mx-auto mb-16 relative">
      <div className="h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-xl transform perspective-1000 rotateX-12" />
      <div className="h-3 bg-gradient-to-b from-blue-600 to-blue-800" />
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-center text-sm font-medium text-gray-300 bg-gray-800 px-4 py-1 rounded-full shadow-sm border border-gray-700">
          SCREEN
        </p>
      </div>
    </div>
  );
}