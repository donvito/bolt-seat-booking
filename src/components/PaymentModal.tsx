import React, { useState } from 'react';
import { X, CreditCard, Calendar, Lock } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  totalPrice: number;
}

export function PaymentModal({ isOpen, onClose, onConfirm, totalPrice }: PaymentModalProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm();
  };

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{4})/g, '$1 ').trim().slice(0, 19);
  };

  const formatExpiry = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length >= 2) {
      return numbers.slice(0, 2) + '/' + numbers.slice(2, 4);
    }
    return numbers;
  };

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
          <h2 className="text-2xl font-bold text-white mb-4">Payment Details</h2>
          <p className="text-gray-300 mb-6">Total amount: ${totalPrice.toFixed(2)}</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Card Number
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  placeholder="1234 5678 9012 3456"
                  className="w-full bg-[#000B18]/50 border border-[#002966] rounded-lg py-2 pl-11 pr-4 
                           text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 
                           focus:ring-blue-500 transition-colors"
                  maxLength={19}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Expiry Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                    placeholder="MM/YY"
                    className="w-full bg-[#000B18]/50 border border-[#002966] rounded-lg py-2 pl-11 pr-4 
                             text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 
                             focus:ring-blue-500 transition-colors"
                    maxLength={5}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  CVV
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                    placeholder="123"
                    className="w-full bg-[#000B18]/50 border border-[#002966] rounded-lg py-2 pl-11 pr-4 
                             text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 
                             focus:ring-blue-500 transition-colors"
                    maxLength={3}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 
                         text-white font-medium hover:from-blue-700 hover:to-blue-800 
                         transition-colors transform hover:scale-105"
              >
                Pay ${totalPrice.toFixed(2)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}