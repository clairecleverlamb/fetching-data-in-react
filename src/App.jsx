import { useState } from 'react';
import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState({});

  const fetchData = async () => {
    const data = await weatherService.show('New York');
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    }
    setWeather(newWeatherState);
  }
  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch />
      <button onClick={fetchData}>Fetch Weather Data</button>
    </main>
  );
}

export default App;
