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
      <div className="w-[200px] rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="/img/card-top.jpg"
          alt="Book Cover Image"
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
        <div className="flex justify-center  px-6 pt-4 pb-2">
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
