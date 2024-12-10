import React from 'react';
import { Square } from 'lucide-react';

interface SeatProps {
  id: string;
  isSelected: boolean;
  isOccupied: boolean;
  onSelect: (id: string) => void;
}

export function Seat({ id, isSelected, isOccupied, onSelect }: SeatProps) {
  const handleClick = () => {
    if (!isOccupied) {
      onSelect(id);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isOccupied}
      className={`transition-all relative ${
        isOccupied
          ? 'text-gray-600 cursor-not-allowed hover:scale-100'
          : isSelected
          ? 'text-emerald-500 hover:text-emerald-600 hover:scale-110 shadow-lg shadow-emerald-500/20'
          : 'text-blue-500 hover:text-blue-600 hover:scale-110 shadow-lg shadow-blue-500/20'
      } group`}
      aria-label={`Seat ${id}`}
    >
      <div className={`relative ${
        isOccupied
          ? 'bg-gradient-to-br from-gray-600 to-gray-700'
          : isSelected
          ? 'bg-gradient-to-br from-emerald-400 to-emerald-600'
          : 'bg-gradient-to-br from-blue-400 to-blue-600'
      } w-8 h-8 rounded-sm transform transition-all`}>
        <div className="absolute inset-0.5 rounded-sm bg-gradient-to-br from-white/20 to-transparent" />
      </div>
      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {id}
      </span>
    </button>
  );
}