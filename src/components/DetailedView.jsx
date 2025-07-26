import React from 'react';

const DetailedView = ({ data, onClose }) => {
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center px-4">
      <div className="relative bg-white text-black rounded-xl w-full max-w-4xl p-6 sm:p-10 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black transition"
        >
          ✖
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          🌐 {data.name}, {data.sys?.country}
        </h2>
        <p className="text-center text-lg mb-6 capitalize">
          {data.weather[0].description} – {Math.round(data.main.temp)}°C
        </p>

      </div>
    </div>
  );
};

export default DetailedView;
