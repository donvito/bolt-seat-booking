import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  selectedSeats: Set<string>;
  totalPrice: number;
}

export function Modal({ isOpen, onClose, onConfirm, selectedSeats, totalPrice }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#000B18]/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#001229] rounded-xl shadow-xl max-w-md w-full border border-[#002966] relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Confirm Booking</h2>
          
          <div className="space-y-4 mb-6">
            <div className="bg-[#000B18]/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-2">Selected Seats</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(selectedSeats).map(seat => (
                  <span
                    key={seat}
                    className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-sm font-medium"
                  >
                    {seat}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-[#000B18]/50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Price per ticket</span>
                <span className="text-white font-medium">$12.00</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300">Number of tickets</span>
                <span className="text-white font-medium">{selectedSeats.size}</span>
              </div>
              <div className="border-t border-gray-700 my-2" />
              <div className="flex justify-between items-center">
                <span className="text-lg text-white font-medium">Total</span>
                <span className="text-lg text-white font-bold">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-600 text-gray-300 
                       hover:bg-gray-700 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 
                       text-white font-medium hover:from-blue-700 hover:to-blue-800 
                       transition-colors transform hover:scale-105"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}