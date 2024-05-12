import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SeatSelection = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [seatDetails, setSeatDetails] = useState(null);

  const seatData = [
    { row: 'A', seats: [1, 2, 3, " ", 4, 5, 6] },
    { row: 'B', seats: [1, 2, 3, " ", 4, 5, 6] },
    { row: 'C', seats: [1, 2, 3, " ", 4, 5, 6] },
    { row: 'D', seats: [1, 2, 3, " ", 4, 5, 6] },
    { row: 'E', seats: [1, 2, 3, " ", 4, 5, 6] },
    { row: 'F', seats: [1, 2, 3, " ", 4, 5, 6] },
    // Add more rows as needed
  ];

  const handleSeatSelect = (row, seat) => {
    setSelectedSeat(`${row}${seat}`);
    setSeatDetails({ row, seat });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
      <h5>Select Seat</h5>
        <div className="flex flex-col items-center">
          {seatData.map(({ row, seats }) => (
            <div key={row} className="flex justify-center mb-2">
              <span className="mr-2">{row}</span>
              <div className="flex">
                {seats.map((seat) => (
                  <button
                    key={`${row}${seat}`}
                    className={`w-8 h-8 m-1 rounded-full ${
                      selectedSeat === `${row}${seat}`
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-400 text-white'
                    }`}
                    onClick={() => handleSeatSelect(row, seat)}
                  >
                    {seat}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {seatDetails && (
          <div className="mt-4 text-center">
            <p>Selected Seat: {seatDetails.row}{seatDetails.seat}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to={'/payment'}  style={{textDecoration:'none',color:'white'}}>
              Proceed to Pay</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatSelection;