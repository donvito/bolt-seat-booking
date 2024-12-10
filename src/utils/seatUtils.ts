// Generate a grid of seats
export const generateSeats = (): string[] => {
  const rows = 6;
  const seatsPerRow = 8;
  const seats: string[] = [];

  for (let row = 0; row < rows; row++) {
    for (let seat = 0; seat < seatsPerRow; seat++) {
      seats.push(`${String.fromCharCode(65 + row)}${seat + 1}`);
    }
  }
  return seats;
};

// Calculate total price
export const calculatePrice = (selectedSeats: Set<string>): number => {
  const basePrice = 12;
  return selectedSeats.size * basePrice;
};