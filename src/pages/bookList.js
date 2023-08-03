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
      toast.error(error.message);
    }
  }

  return (
    <div className="flex flex-wrap justify-start">
      {books.length > 0 &&
        books.map((book, index) => {
          return (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8">
              <BookCard bookDetails={book} />
            </div>
          );
        })}
    </div>
  );
}
