import React, { useState } from 'react';
import BookingList from './BookingList';
import TicketInvoice from './TicketInvoice';

const citiesData = require('./cities.json');
const flightDetailsData = require('./flightdetails.json');


const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    // ... (existing state properties)
    destinationFrom: 'New Delhi',
    destinationTo: 'London',
    journeyDate: '',
    returnDate: '',
    guests: 1,
    travelClass: 'Economy',
    roundTrip: false,
  });
  const [flightResults, setFlightResults] = useState([]);
  const [showInvoice, setShowInvoice] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchCounter, setSearchCounter] = useState(0); // Add a new state variable to track the number of searches

  // ... (other functions)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookingData({
      ...bookingData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };


  const handleSearch = () => {
    const filteredOutboundFlights = flightDetailsData
      .filter(
        (flight) =>
          flight.deptCity === bookingData.destinationFrom &&
          flight.arivalCity === bookingData.destinationTo &&
          flight.className === bookingData.travelClass &&
          new Date(flight.deptDate).toDateString() === new Date(bookingData.journeyDate).toDateString()
      )
      .map((flight) => ({
        ...flight,
        price: flight.price + searchCounter * 1000, // Increase the price by 1000 for each consecutive search
      }));

    if (bookingData.roundTrip) {
      const filteredRoundTripFlights = filteredOutboundFlights.map((outboundFlight) => {
        const returnFlight = flightDetailsData.find(
          (flight) =>
            flight.deptCity === bookingData.destinationTo &&
            flight.arivalCity === bookingData.destinationFrom &&
            flight.className === bookingData.travelClass &&
            new Date(flight.deptDate).toDateString() === new Date(bookingData.returnDate).toDateString()
        );
        return {
          outboundFlight: {
            ...outboundFlight,
            price: outboundFlight.price + searchCounter * 1000, // Increase the price by 1000 for each consecutive search
          },
          returnFlight: returnFlight
            ? {
                ...returnFlight,
                price: returnFlight.price + searchCounter * 1000, // Increase the price by 1000 for each consecutive search
              }
            : null,
          totalPrice:
            outboundFlight.price +
            searchCounter * 1000 +
            (returnFlight ? returnFlight.price + searchCounter * 1000 : 0),
        };
      });
      setFlightResults(filteredRoundTripFlights);
    } else {
      setFlightResults(filteredOutboundFlights);
    }

    setSearchCounter(searchCounter + 1); // Increment the search counter
  };

  // ... (other functions)
  const handleShowInvoice = (ticket) => {
    setSelectedTicket(ticket);
    setShowInvoice(true);
  };

  const handleCloseInvoice = () => {
    setShowInvoice(false);
  };

  return (
    // ... (JSX)
     <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="bg-white p-6 rounded-lg shadow-md mb-4 max-w-4xl w-full">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center mb-2">
            <select
              name="destinationFrom"
              value={bookingData.destinationFrom}
              onChange={handleChange}
              className="mr-2 px-2 py-1 rounded-md border border-gray-300"
            >
              {citiesData.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            <select
              name="destinationTo"
              value={bookingData.destinationTo}
              onChange={handleChange}
              className="mr-2 px-2 py-1 rounded-md border border-gray-300"
            >
              {citiesData.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="journeyDate"
              value={bookingData.journeyDate}
              onChange={handleChange}
              className="mr-2 px-2 py-1 rounded-md border border-gray-300"
            />
            {bookingData.roundTrip && (
              <input
                type="date"
                name="returnDate"
                value={bookingData.returnDate}
                onChange={handleChange}
                className="mr-2 px-2 py-1 rounded-md border border-gray-300"
              />
            )}
          </div>
          <div className="flex items-center mb-2">
            <input
              type="number"
              name="guests"
              value={bookingData.guests}
              onChange={handleChange}
              min="1"
              max="10"
              className="mr-2 px-2 py-1 rounded-md border border-gray-300"
            />
            <select
              name="travelClass"
              value={bookingData.travelClass}
              onChange={handleChange}
              className="mr-2 px-2 py-1 rounded-md border border-gray-300"
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
            </select>
            <div className="flex items-center mr-2">
              <label htmlFor="roundTrip" className="mr-1">
                Round Trip
              </label>
              <input
                type="checkbox"
                id="roundTrip"
                name="roundTrip"
                checked={bookingData.roundTrip}
                onChange={handleChange}
                className="mr-2"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleSearch}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
          >
            Search
          </button>
        </div>
      </form>
    <BookingList
      flightResults={flightResults}
      onShowInvoice={handleShowInvoice}
      roundTrip={bookingData.roundTrip}
    />
    {showInvoice && (
      <TicketInvoice
        bookedTicket={selectedTicket}
        onClose={handleCloseInvoice}
        numberOfGuests={bookingData.guests}
        roundTrip={bookingData.roundTrip}
      />
    )}
</div>
  );
};

export default BookingForm;