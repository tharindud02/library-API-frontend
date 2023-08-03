import React from "react";

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div>
      <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">{message}</h2>
          <div className="flex justify-end space-x-4">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={onConfirm}
            >
              Yes
            </button>
            <button
              className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={onCancel}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
