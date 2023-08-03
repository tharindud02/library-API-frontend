import AddAuthor from "@/components/addAuthor";
import AddBook from "@/components/addBook";
import api from "../services/api";
import React, { useEffect, useState } from "react";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import ConfirmModal from "@/components/shared/confirmModal";

export default function UpdateDetails() {
  const [showPopupAddBook, setShowPopupAddBook] = useState(false);
  const [showPopupAddAuthor, setShowPopupAddAuthor] = useState(false);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedBookData, setSelectedBookData] = useState();
  const [selectedAuthorData, setSelectedAuthorData] = useState();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [delConfirmMessage, setDelConfirmMessage] = useState();
  const [deleteType, setDeleteType] = useState("");

  useEffect(() => {
    fetchBooks();
    fetchAuthors();
  }, []);

  const handleDelete = (type, id) => {
    setDelConfirmMessage(
      type === "book"
        ? "Are you sure you want to delete this book?"
        : "Are you sure you want to delete this author?"
    );
    setDeleteType(type);
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    if (deleteType === "book") {
      deleteBook(selectedBookData._id);
    } else if (deleteType === "author") {
      deleteAuthor(selectedAuthorData._id);
    }
    setShowConfirmModal(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmModal(false);
  };

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

  async function deleteBook(id) {
    try {
      await api.delete(`/book/${id}`);
      fetchBooks();
      setSelectedBookData("");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  async function deleteAuthor(id) {
    try {
      await api.delete(`/author/${id}`);
      fetchAuthors();
      setSelectedAuthorData("");
    } catch (error) {
      console.error("Error deleting author:", error);
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
                      data-tooltip-id="tooltip"
                      data-tooltip-content="Edit Book"
                      onClick={() => {
                        setSelectedBookData(book);
                        setShowPopupAddBook(true);
                      }}
                    >
                      <RiEdit2Line />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      data-tooltip-id="tooltip"
                      data-tooltip-content="Delete Book"
                      onClick={() => {
                        handleDelete("book", book._id);
                        setSelectedBookData(book);
                      }}
                    >
                      <RiDeleteBinLine />
                    </button>
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
                      data-tooltip-id="tooltip"
                      data-tooltip-content="Edit Author"
                      onClick={() => {
                        setSelectedAuthorData(author);
                        setShowPopupAddAuthor(true);
                      }}
                    >
                      <RiEdit2Line />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      data-tooltip-id="tooltip"
                      data-tooltip-content="Delete Author"
                      onClick={() => {
                        handleDelete("author", author._id);
                        setSelectedAuthorData(author);
                      }}
                    >
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      {showPopupAddBook && (
        <AddBook
          authors={authors}
          initialData={selectedBookData}
          onClose={() => {
            setShowPopupAddBook(false);
            setSelectedBookData("");
            fetchBooks();
          }}
        />
      )}
      {showPopupAddAuthor && (
        <AddAuthor
          initialData={selectedAuthorData}
          onClose={() => {
            setShowPopupAddAuthor(false);
            setSelectedAuthorData("");
            fetchAuthors();
          }}
        />
      )}
      {showConfirmModal && (
        <ConfirmModal
          message={delConfirmMessage}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
      <Tooltip id="tooltip" />
    </div>
  );
}
