import React, { useEffect, useState } from "react";

import api from "../services/api";
import BookCard from "@/components/shared/bookCard";

export default function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    try {
      const response = await api.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.length > 0 &&
          books.map((book, index) => {
            return (
              <div key={index} className="flex items-center justify-center">
                <BookCard bookDetails={book} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
