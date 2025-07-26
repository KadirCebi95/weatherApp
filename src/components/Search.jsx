import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Search = ({ setWeatherData }) => {
  const [query, setQuery] = useState('');

  const fetchWeather = async () => {
    if (query.trim() === '') return;

    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric&lang=tr`;

      const response = await fetch(url);
      if (!response.ok) throw new Error('Şehir bulunamadı');

      const data = await response.json();
      setWeatherData(data);
      setQuery('');
    } catch (error) {
      console.error('Hata:', error.message);
      alert(error.message);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full flex flex-col sm:flex-row items-center gap-2"
    >
      <input
        type="text"
        placeholder="Şehir giriniz..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 w-full px-4 py-2 rounded-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
      />
      <button
        onClick={fetchWeather}
        className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Ara
      </button>
    </motion.div>
  );
};

export default Search;
