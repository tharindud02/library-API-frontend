import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../actions/bookActions";
import BookCard from "@/components/shared/bookCard";
import { toast } from "react-toastify";

export default function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

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
