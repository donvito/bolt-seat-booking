import React, { useState, useCallback } from 'react';
import { MovieInfo } from './components/MovieInfo';
import { Screen } from './components/Screen';
import { Seat } from './components/Seat';
import { Legend } from './components/Legend';
import { Modal } from './components/Modal';
import { PaymentModal } from './components/PaymentModal';
import { TicketModal } from './components/TicketModal';
import { generateSeats, calculatePrice } from './utils/seatUtils';

// Simulate some randomly occupied seats
const occupiedSeats = new Set(['A3', 'B5', 'C7', 'D2', 'E4', 'F6']);

function App() {
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const allSeats = generateSeats();

  const handleSeatSelect = useCallback((seatId: string) => {
    const newSelected = new Set(selectedSeats);
    if (newSelected.has(seatId)) {
      newSelected.delete(seatId);
    } else {
      newSelected.add(seatId);
    }
    setSelectedSeats(newSelected);
  }, [selectedSeats]);

  const handleOpenModal = useCallback(() => {
    if (selectedSeats.size === 0) {
      alert('Please select at least one seat');
      return;
    }
    setIsModalOpen(true);
  }, [selectedSeats]);

  const handleConfirmBooking = useCallback(() => {
    setIsModalOpen(false);
    setIsPaymentModalOpen(true);
  }, []);

  const handlePaymentSuccess = useCallback(() => {
    setIsPaymentModalOpen(false);
    setIsTicketModalOpen(true);
  }, [selectedSeats]);

  const handleTicketClose = useCallback(() => {
    setIsTicketModalOpen(false);
    setSelectedSeats(new Set());
  }, []);

  const totalPrice = calculatePrice(selectedSeats);
  const movieDetails = {
    title: "Inception",
    time: "7:30 PM",
    date: "March 15, 2024"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000B18] to-[#001A3D] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <MovieInfo
          {...movieDetails}
        />
        
        <Screen />

        <div className="grid grid-cols-8 gap-4 max-w-2xl mx-auto bg-[#001229] p-8 rounded-xl shadow-lg border border-[#002966]">
          {allSeats.map((seatId) => (
            <Seat
              key={seatId}
              id={seatId}
              isSelected={selectedSeats.has(seatId)}
              isOccupied={occupiedSeats.has(seatId)}
              onSelect={handleSeatSelect}
            />
          ))}
        </div>

        <Legend />

        <div className="mt-12 text-center bg-[#001229] rounded-xl shadow-lg p-8 border border-[#002966]">
          <p className="text-gray-300 mb-6 font-medium">
            Selected Seats: {selectedSeats.size > 0
              ? Array.from(selectedSeats).join(', ')
              : 'None'}
          </p>
          <p className="text-2xl font-bold text-white mb-8">
            Total: ${totalPrice.toFixed(2)}
          </p>
          <button
            onClick={handleOpenModal}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg
                     hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105
                     disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
                     font-medium text-lg shadow-lg"
            disabled={selectedSeats.size === 0}
          >
            Book Tickets
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmBooking}
        selectedSeats={selectedSeats}
        totalPrice={totalPrice}
      />
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onConfirm={handlePaymentSuccess}
        totalPrice={totalPrice}
      />
      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={handleTicketClose}
        selectedSeats={selectedSeats}
        movieDetails={movieDetails}
      />
    </div>
  );
}

export default App;