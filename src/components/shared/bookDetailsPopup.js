import React from "react";

const BookDetailsPopup = ({ bookDetails, onClose }) => {
  return (
    <div>
      <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <div className="bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-6 rounded-lg shadow-lg mx-3 ">
          <h2 className="text-xl font-bold mb-4">{bookDetails.name}</h2>
          <p className="text-gray-700 mb-2">
            Author: {bookDetails.author.first_name}{" "}
            {bookDetails.author.last_name}
          </p>
          <p className="text-gray-700 mb-4">ISBN: {bookDetails.isbn}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPopup;
