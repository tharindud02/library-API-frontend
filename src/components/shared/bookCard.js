import Image from "next/image";
import React, { useEffect, useState } from "react";
import BookDetailsPopup from "./bookDetailsPopup";

export default function BookCard({ bookDetails }) {
  const [authorName, setAuthorName] = useState();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const authorName =
      bookDetails.author.first_name + " " + bookDetails.author.last_name;
    setAuthorName(authorName);
  }, [bookDetails]);

  return (
    <div className="w-full px-2">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-48 object-cover"
          src="/img/card-top.jpg"
          alt="Book Cover Image"
          onError={(e) => {
            e.target.src =
              "https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc";
          }}
        />

        <div className="px-4 py-3">
          <h2 className="font-bold text-lg mb-2 truncate">
            {bookDetails.name}
          </h2>
          <p className="text-gray-700 text-sm truncate">{authorName}</p>
        </div>
        <div className="flex justify-center p-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full sm:w-32"
            onClick={() => setShowPopup(true)}
          >
            See More
          </button>
        </div>
      </div>

      {showPopup && (
        <BookDetailsPopup
          bookDetails={bookDetails}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}
