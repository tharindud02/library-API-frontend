import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { createBook, updateBook } from "../actions/bookActions"; // Import your action creators
import { toast } from "react-toastify";

export default function AddBook({ authors, onClose, initialData }) {
  const dispatch = useDispatch();
  const isUpdate = !!initialData;

  const [formData, setFormData] = useState({
    name: "",
    isbn: "",
    author: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        isbn: initialData.isbn || "",
        author: initialData.author || "",
      });
    }
  }, [initialData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isUpdate) {
        await dispatch(updateBook(initialData._id, formData)); // Dispatch updateBook action
      } else {
        await dispatch(createBook(formData)); // Dispatch createBook action
      }
      onClose();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-6 rounded-lg shadow-lg">
          <div className="flex justify-end">
            <button
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={onClose}
            >
              <AiOutlineCloseCircle className="text-2xl" />
            </button>
          </div>
          <h2 className="text-xl font-bold mb-4">
            {initialData ? "Update" : "Add"} a Book
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                aria-labelledby="name"
                name="name"
                placeholder="Abcd"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                ISBN
              </label>
              <input
                type="text"
                name="isbn"
                aria-labelledby="isbn"
                placeholder="978-3-16-148410-0"
                value={formData.isbn}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Author
              </label>
              <select
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                required
              >
                <option value="" disabled>
                  Select an author
                </option>
                {authors.map((author) => (
                  <option key={author._id} value={author._id}>
                    {author.first_name} {author.last_name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              {initialData ? "Update" : "Add"} Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
