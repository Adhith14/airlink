import React from 'react';

const BookingList = ({ flightResults, onShowInvoice, roundTrip }) => {
  const handleBookTicket = (ticket) => {
    onShowInvoice(ticket);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl w-full">
      <div className="grid grid-cols-10 text-sm font-semibold mb-2">
        <div className="px-2">FLIGHT NBR</div>
        <div className="px-2">AIRLINE</div>
        <div className="px-2">CLASS</div>
        <div className="px-2">DEPT TIME</div>
        <div className="px-2">DEPT CITY</div>
        <div className="px-2">ARIVAL TIME</div>
        <div className="px-2">ARIVAL CITY</div>
        <div className="px-2">STOPS</div>
        <div className="px-2">PRICE</div>
        <div className="px-2"></div>
      </div>
      {flightResults.length === 0 ? (
        <div className="text-center text-gray-500 py-4">No flights available</div>
      ) : (
        flightResults.map((ticket, index) => (
          <div key={index} className="grid grid-cols-10 text-sm mb-2 items-center">
            {roundTrip ? (
              <>
                <div className="px-2">{ticket.outboundFlight.flightNbr}</div>
                <div className="px-2">{ticket.outboundFlight.airlineName}</div>
                <div className="px-2">{ticket.outboundFlight.className}</div>
                <div className="px-2">{ticket.outboundFlight.deptTime}</div>
                <div className="px-2">{ticket.outboundFlight.deptCity}</div>
                <div className="px-2">{ticket.outboundFlight.arivalTime}</div>
                <div className="px-2">{ticket.outboundFlight.arivalCity}</div>
                <div className="px-2">{ticket.outboundFlight.noOfStops}</div>
                <div className="px-2">{`${ticket.totalPrice} (Round Trip)`}</div>
                <div className="px-2">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
                    onClick={() => handleBookTicket(ticket)}
                  >
                    Book
                  </button>
                </div>
                {ticket.returnFlight && (
                  <div className="col-span-10 grid grid-cols-10 text-sm mb-2 items-center">
                    <div className="px-2">{ticket.returnFlight.flightNbr}</div>
                    <div className="px-2">{ticket.returnFlight.airlineName}</div>
                    <div className="px-2">{ticket.returnFlight.className}</div>
                    <div className="px-2">{ticket.returnFlight.deptTime}</div>
                    <div className="px-2">{ticket.returnFlight.deptCity}</div>
                    <div className="px-2">{ticket.returnFlight.arivalTime}</div>
                    <div className="px-2">{ticket.returnFlight.arivalCity}</div>
                    <div className="px-2">{ticket.returnFlight.noOfStops}</div>
                    <div className="px-2">{ticket.returnFlight.price}</div>
                    <div className="px-2"></div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="px-2">{ticket.flightNbr}</div>
                <div className="px-2">{ticket.airlineName}</div>
                <div className="px-2">{ticket.className}</div>
                <div className="px-2">{ticket.deptTime}</div>
                <div className="px-2">{ticket.deptCity}</div>
                <div className="px-2">{ticket.arivalTime}</div>
                <div className="px-2">{ticket.arivalCity}</div>
                <div className="px-2">{ticket.noOfStops}</div>
                <div className="px-2">{ticket.price}</div>
                <div className="px-2">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
                    onClick={() => handleBookTicket(ticket)}
                  >
                    Book
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default BookingList;