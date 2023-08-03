import AddBook from "@/components/addBook";
import React, { useState } from "react";

export default function UpdateDetails() {
  const [showPopupAddBook, setShowPopupAddBook] = useState(false);
  const [showPopupAddAuthor, setShowPopupAddAuthor] = useState(false);
  return (
    <div>
      <div className="flex justify-end space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          onClick={() => setShowPopupAddBook(true)}
        >
          Add a Book
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          onClick={() => setShowPopupAddAuthor(true)}
        >
          Add an Author
        </button>
      </div>
      {showPopupAddBook && (
        <AddBook onClose={() => setShowPopupAddBook(false)} />
      )}
    </div>
  );
}
