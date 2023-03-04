import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const api = {
  key: "e80a552c2a7f2a3c1066a06d339d538e",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}&lang=pl`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <div>
          <input
            type="text"
            placeholder="Wybierz miasto"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Szukaj</button>
        </div>
        <p>{weather.name}</p>
        {weather.main ? <p>{Math.round(weather.main.temp)}°C</p> : null}
        {weather.weather ? <p>{weather.weather[0].main}</p> : null}
      </header>
    </div>
  );
}

export default App;
