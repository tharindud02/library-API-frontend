import AddAuthor from "@/components/addAuthor";
import AddBook from "@/components/addBook";
import api from "../services/api";
import React, { useEffect, useState } from "react";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import { Tooltip } from "react-tooltip";

export default function UpdateDetails() {
  const [showPopupAddBook, setShowPopupAddBook] = useState(false);
  const [showPopupAddAuthor, setShowPopupAddAuthor] = useState(false);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchBooks();
    fetchAuthors();
  }, []);

  async function fetchBooks() {
    try {
      const response = await api.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  async function fetchAuthors() {
    try {
      const response = await api.get("/authors");
      setAuthors(response.data);
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  }

  return (
    <div className="p-4">
      <div className="flex justify-end space-x-4 mb-4">
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
      <div className="flex space-x-8">
        <div className="flex-grow">
          <h2 className="text-xl font-bold mb-4">Books List</h2>
          <ul className="space-y-4">
            {books.length > 0 &&
              books.map((book, index) => (
                <li
                  key={index}
                  className="bg-white p-4 shadow rounded-lg flex items-center justify-between"
                >
                  <span>{book.name}</span>
                  <div className="flex space-x-2">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      data-tip="Edit"
                    >
                      <RiEdit2Line />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      data-tip="Delete"
                    >
                      <RiDeleteBinLine />
                    </button>
                    <Tooltip effect="solid" place="bottom" />
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="flex-grow">
          <h2 className="text-xl font-bold mb-4">Authors List</h2>
          <ul className="space-y-4">
            {authors.length > 0 &&
              authors.map((author, index) => (
                <li
                  key={index}
                  className="bg-white p-4 shadow rounded-lg flex items-center justify-between"
                >
                  <span>{author.first_name}</span>
                  <div className="flex space-x-2">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      data-tip="Edit"
                    >
                      <RiEdit2Line />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      data-tip="Delete"
                    >
                      <RiDeleteBinLine />
                    </button>
                    <Tooltip effect="solid" place="bottom" />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      {showPopupAddBook && (
        <AddBook
          authors={authors}
          onClose={() => {
            setShowPopupAddBook(false);
            fetchBooks();
          }}
        />
      )}
      {showPopupAddAuthor && (
        <AddAuthor
          onClose={() => {
            setShowPopupAddAuthor(false);
            fetchAuthors();
          }}
        />
      )}
    </div>
  );
}
