import React from 'react';

function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-lg p-4 max-w-xs w-11/12 mx-auto text-center shadow-lg transform transition-transform duration-300 ease-in-out scale-100">
        <h2 className="text-base font-semibold text-gray-900 mb-1">Desktop View Recommended</h2>
        <p className="text-gray-600 text-sm mb-4">For an optimal experience, please switch to desktop view.</p>
        <button
          onClick={onClose}
          className="text-sm font-medium bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1.5 rounded-full shadow-md transform hover:scale-105 transition-transform duration-200 focus:outline-none"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

export default Popup;
