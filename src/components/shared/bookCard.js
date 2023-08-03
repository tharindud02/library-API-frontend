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
    <div>
      <div className="w-[250px] min-h-[300px] rounded overflow-hidden shadow-lg flex flex-col justify-evenly">
        <img
          className="w-full"
          src="/img/card-top.jpg"
          alt="Book Cover Image"
          onError={(e) => {
            e.target.src =
              "https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc";
          }}
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <button onClick={() => setShowPopup(true)}>
              {bookDetails.name}
            </button>
          </div>
          <p className="text-gray-700 text-base">
            <button onClick={() => setShowPopup(true)}>{authorName}</button>
          </p>
        </div>
        <div className="flex justify-center px-6 pt-4 pb-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
