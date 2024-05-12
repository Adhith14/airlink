import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');

  const handlePaymentOptionChange = (e) => {
    setSelectedPaymentOption(e.target.value);
  };

  const handlePayment = () => {
    // Perform payment processing logic here
    setPaymentSuccessful(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
        <h2 className="text-lg font-semibold mb-4">Payment</h2>
        <div className="mb-4">
          <label htmlFor="paymentOption" className="block font-medium mb-2">
            Choose Payment Option
          </label>
          <select
            id="paymentOption"
            value={selectedPaymentOption}
            onChange={handlePaymentOptionChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          >
            <option value="">Select Payment Option</option>
            <option value="paypal">Paypal</option>
            <option value="upi">UPI</option>
            <option value="debitCard">Debit Card</option>
            <option value="creditCard">Credit Card</option>
          </select>
        </div>
        {selectedPaymentOption === 'paypal' && (
          <div className="mb-4">
            <label htmlFor="paypal" className="block font-medium mb-2">
              Paypal
            </label>
            <input
              type="text"
              id="paypal"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              placeholder="Enter Paypal ID"
            />
          </div>
        )}
        {selectedPaymentOption === 'upi' && (
          <div className="mb-4">
            <label htmlFor="upi" className="block font-medium mb-2">
              UPI
            </label>
            <input
              type="text"
              id="upi"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              placeholder="Enter UPI ID"
            />
          </div>
        )}
        {selectedPaymentOption === 'debitCard' && (
          <div className="mb-4">
            <label htmlFor="debitCard" className="block font-medium mb-2">
              Debit Card
            </label>
            <input
              type="text"
              id="debitCard"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              placeholder="Enter Debit Card Number"
            />
          </div>
        )}
        {selectedPaymentOption === 'creditCard' && (
          <div className="mb-4">
            <label htmlFor="creditCard" className="block font-medium mb-2">
              Credit Card
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="creditCard"
                className="w-full border border-gray-300 rounded-l-md py-2 px-3 mr-2"
                placeholder="Card Number"
              />
              <div className="flex items-center border border-gray-300 rounded-r-md">
                <input
                  type="text"
                  className="w-16 py-2 px-3 border-r border-gray-300 focus:outline-none"
                  placeholder="MM/YY"
                />
                <input
                  type="text"
                  className="w-16 py-2 px-3 focus:outline-none"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>
        )}
        {paymentSuccessful ? (
          <div className="text-green-500 font-semibold mb-4">
            Payment Successful
          </div>
        ) : (
          <button
            onClick={handlePayment}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Pay
          </button>
        )}
        {paymentSuccessful && (
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Go to Home
          </Link>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;