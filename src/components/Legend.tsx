import React from 'react';
import { Square } from 'lucide-react';

export function Legend() {
  return (
    <div className="flex gap-8 justify-center mt-12 bg-gray-800 rounded-lg shadow-sm py-4 px-8 border border-gray-700">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-blue-400 to-blue-600 relative">
          <div className="absolute inset-0.5 rounded-sm bg-gradient-to-br from-white/20 to-transparent" />
        </div>
        <span className="text-sm font-medium text-gray-300">Available</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-emerald-400 to-emerald-600 relative">
          <div className="absolute inset-0.5 rounded-sm bg-gradient-to-br from-white/20 to-transparent" />
        </div>
        <span className="text-sm font-medium text-gray-300">Selected</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-gray-600 to-gray-700 relative">
          <div className="absolute inset-0.5 rounded-sm bg-gradient-to-br from-white/20 to-transparent" />
        </div>
        <span className="text-sm font-medium text-gray-300">Occupied</span>
      </div>
    </div>
  );
}