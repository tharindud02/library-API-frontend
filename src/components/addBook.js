import React, { useState } from "react";

export default function AddBook({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    isbn: "",
    author: "",
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
    // Here you can handle form submission, e.g., send data to a server
    console.log(formData);
    onClose(); // Close the popup after form submission
  };

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
              X
            </button>
          </div>
          <h2 className="text-xl font-bold mb-4">Add a Book</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
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
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
