import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const TicketInvoice = ({ bookedTicket, onClose, numberOfGuests, roundTrip }) => {
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const getGuestCount = () => {
    return numberOfGuests > 1 ? `${numberOfGuests} Guests` : `${numberOfGuests} Guest`;
  };

  const getFlightDetails = (flight) => {
    if (roundTrip && bookedTicket.outboundFlight && bookedTicket.returnFlight) {
      return bookedTicket.outboundFlight;
    } else {
      return bookedTicket;
    }
  };

  const getReturnFlightDetails = () => {
    if (roundTrip && bookedTicket.returnFlight) {
      return bookedTicket.returnFlight;
    }
    return null;
  };

  const flight = getFlightDetails(bookedTicket);
  const returnFlight = getReturnFlightDetails();

  // const handleConfirmBooking = () => {
  //    No need to perform any actions or state updates here
  //    We'll let the SeatSelection component handle the necessary logic

  // };
  const handleConfirmBooking = async () => {
    try {
      const response = await axios.post('http://localhost:8080/booking', {
        id: bookedTicket.id,
        from: bookedTicket.from,
        to: bookedTicket.to,
        travelClass: bookedTicket.travelClass,
        guests: bookedTicket.guests,
        flightNumber: bookedTicket.flightNumber,
        airline: bookedTicket.airline,
        departureTime: bookedTicket.departureTime,
        arrivalTime: bookedTicket.arrivalTime,
        total: bookedTicket.total
      });
      console.log('Booking confirmed:', response.data);
      // Additional logic after successful booking can be added here, such as redirection or displaying a confirmation message
    } catch (error) {
      console.error('Error confirming booking:', error);
      // Handle error scenarios, such as displaying an error message to the user
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Ticket Invoice</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">
            <span className="font-semibold">From:</span> {flight.deptCity}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">To:</span> {flight.arivalCity}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Travel Class:</span> {flight.className}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Guests:</span> {getGuestCount()}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Outbound Flight</h3>
          <div className="grid grid-cols-5 text-sm font-semibold mb-2">
            <div className="px-2">FLIGHT NBR</div>
            <div className="px-2">AIRLINE</div>
            <div className="px-2">DEPT TIME</div>
            <div className="px-2">ARIVAL TIME</div>
            <div className="px-2">PRICE</div>
          </div>
          <div className="grid grid-cols-5 text-sm mb-2">
            <div className="px-2">{flight.flightNbr}</div>
            <div className="px-2">{flight.airlineName}</div>
            <div className="px-2">{flight.deptTime}</div>
            <div className="px-2">{flight.arivalTime}</div>
            <div className="px-2">{formatPrice(flight.price)}</div>
          </div>
        </div>
        {returnFlight && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Return Flight</h3>
            <div className="grid grid-cols-5 text-sm font-semibold mb-2">
              <div className="px-2">FLIGHT NBR</div>
              <div className="px-2">AIRLINE</div>
              <div className="px-2">DEPT TIME</div>
              <div className="px-2">ARIVAL TIME</div>
              <div className="px-2">PRICE</div>
            </div>
            <div className="grid grid-cols-5 text-sm mb-2">
              <div className="px-2">{returnFlight.flightNbr}</div>
              <div className="px-2">{returnFlight.airlineName}</div>
              <div className="px-2">{returnFlight.deptTime}</div>
              <div className="px-2">{returnFlight.arivalTime}</div>
              <div className="px-2">{formatPrice(returnFlight.price)}</div>
            </div>
          </div>
        )}
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            <span className="font-semibold">Total:</span>{' '}
            {formatPrice(roundTrip ? bookedTicket.totalPrice : flight.price)}
          </p>
          <Link
            to={{
              pathname: '/seat-selection',
              state: { selectedFlight: bookedTicket },
            }}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TicketInvoice;

