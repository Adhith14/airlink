import React, { useState } from 'react';

const FlightCard = () => {
  const [showCard, setShowCard] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [reason, setReason] = useState('');

  const handleCancelation = () => {
    setShowPopup(true);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmitFeedback = () => {
    setShowCard(false);
    setShowPopup(false);
  };

  return (
    <div>
      {showCard ? (
        <div className="flex space-x-4 mx-auto" style={{ marginTop: '80px', padding: '0 20px' }}>
          <div className="bg-white rounded-lg shadow-md p-4 w-80">
            <div className="bg-blue-900 text-white px-4 py-2 rounded-t-lg">
              <p className="text-sm">Thu, May 2 10:00 AM</p>
              <p className="text-sm">Arrives, Fri, May 3</p>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-semibold">New Delhi ➡️ London</p>
                <p className="text-lg font-semibold">₹ 25,000</p>
              </div>
              <p className="text-sm">Per Person</p>
              <div className="flex items-center mt-2">
                <p className="text-sm font-semibold">Air India</p>
                <span className="mx-2 text-sm">•</span>
                <p className="text-sm">1 Stop</p>
                <span className="mx-2 text-sm">•</span>
                <p className="text-sm">21h 45m</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                onClick={handleCancelation}
              >
                Cancel Booking
              </button>
            </div>
          </div>
          {/* Add more FlightCard components here */}
        </div>
      ) : (
        <div className="text-center mt-8">
          <p className="text-lg font-semibold">No Booking</p>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Reason for Cancellation</h2>
            <textarea
              className="w-full h-32 border border-gray-300 rounded-md p-2 mb-4"
              value={reason}
              onChange={handleReasonChange}
              placeholder="Enter your reason for cancellation..."
            />
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleSubmitFeedback}
              >
                Submit
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightCard;