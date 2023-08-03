import React, { useEffect, useState } from "react";
import BookCard from "./shared/bookCard";

export default function BookList() {
  const [books, setBooks] = useState([]);

  return (
    <div>
      <div class="grid grid-cols-3 gap-4">
        {books.map((book, index) => {
          <div key={index}>
            <BookCard bookDetails={book} />
          </div>;
        })}
      </div>
    </div>
  );
}
