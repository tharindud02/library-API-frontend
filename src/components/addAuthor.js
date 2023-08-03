import React, { useState } from "react";
import { AiFillCloseSquare, AiOutlineCloseCircle } from "react-icons/ai";
import api from "../services/api";

export default function AddAuthor({ onClose }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createAuthor();
  };

  async function createAuthor() {
    try {
      const response = await api.post("/author", formData);
      onClose();
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  return (
    <div>
      <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-6 rounded-lg shadow-lg">
          <div className="flex justify-end">
            <button
              className="text-gray-700 hover:text-gray-900"
              onClick={onClose}
            >
              <AiOutlineCloseCircle />
            </button>
          </div>
          <h2 className="text-xl font-bold mb-4">Add an Author</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Add Author
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
