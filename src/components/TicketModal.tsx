import React, { useEffect, useState } from 'react';
import { X, Ticket } from 'lucide-react';
import QRCode from 'qrcode';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSeats: Set<string>;
  movieDetails: {
    title: string;
    time: string;
    date: string;
  };
}

export function TicketModal({ isOpen, onClose, selectedSeats, movieDetails }: TicketModalProps) {
  const [qrCode, setQrCode] = useState('');
  const ticketId = Math.random().toString(36).substring(2, 15);

  useEffect(() => {
    if (isOpen) {
      const ticketData = {
        id: ticketId,
        movie: movieDetails.title,
        date: movieDetails.date,
        time: movieDetails.time,
        seats: Array.from(selectedSeats),
      };

      QRCode.toDataURL(JSON.stringify(ticketData))
        .then(url => setQrCode(url))
        .catch(err => console.error(err));
    }
  }, [isOpen, selectedSeats, movieDetails, ticketId]);

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
          <div className="flex items-center gap-3 mb-4">
            <Ticket className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-white">Your Tickets</h2>
          </div>

          <div className="bg-[#000B18]/50 rounded-lg p-6 mb-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">{movieDetails.title}</h3>
              <p className="text-gray-300">{movieDetails.date} at {movieDetails.time}</p>
              <p className="text-gray-300 mt-2">
                Seats: {Array.from(selectedSeats).join(', ')}
              </p>
            </div>

            <div className="flex justify-center mb-6">
              {qrCode && (
                <div className="bg-white p-4 rounded-lg">
                  <img src={qrCode} alt="Ticket QR Code" className="w-48 h-48" />
                </div>
              )}
            </div>

            <p className="text-center text-sm text-gray-400">
              Ticket ID: {ticketId}
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={() => window.print()}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg
                       hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105
                       font-medium shadow-lg inline-flex items-center gap-2"
            >
              Download Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}