import React from 'react';
import { motion } from 'framer-motion';

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind, sys } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full bg-white/20 dark:bg-white/10 text-white rounded-2xl shadow-xl p-6 text-center border border-white/30"
    >
      <h2 className="text-3xl font-semibold mb-2 tracking-wide">
        {name}, {sys?.country}
      </h2>

      <div className="flex items-center justify-center mb-4 gap-4">
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
          alt={weather[0].description}
          className="w-20 h-20"
        />
        <div>
          <p className="text-xl capitalize">{weather[0].description}</p>
          <p className="text-5xl font-bold">{Math.round(main.temp)}°C</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-200">
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="font-semibold">🌡️ Hissedilen</p>
          <p>{Math.round(main.feels_like)}°C</p>
        </div>
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="font-semibold">💨 Rüzgar</p>
          <p>{Math.round(wind.speed)} m/s</p>
        </div>
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="font-semibold">🔼 Max</p>
          <p>{Math.round(main.temp_max)}°C</p>
        </div>
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="font-semibold">🔽 Min</p>
          <p>{Math.round(main.temp_min)}°C</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
