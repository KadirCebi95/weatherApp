import React, { useState } from 'react';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-xl bg-white/20 dark:bg-gray-800/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl text-white flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center drop-shadow-md">
          🌤️ Hava Durumu Uygulaması
        </h1>
        <Search setWeatherData={setWeatherData} />
        {weatherData && (
          <WeatherCard data={weatherData} />
        )}
      </div>
    </div>
  );
}

export default App;
