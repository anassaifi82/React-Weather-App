import "./App.css";
import getweather from "./api/api";

import { useState } from "react";
import dateFormat from "dateformat";

function App() {
  const [city, searchcity] = useState("");
  const [Weather, setweather] = useState({});
  const getweatherbycity = async () => {
    const response = await getweather(city);
    setweather(response);
    searchcity(" ");
  };
  const renderdate = () => {
    let now = new Date();

    return dateFormat(now, "dddd, mmmm dS, h:MM TT ");
  };

  return (
    <>
      <div className="app">
        <h1>Weather App</h1>
        <div className="input-wrapper">
          <input
            value={city}
            type="text"
            placeholder="enter city here"
            onChange={(e) => searchcity(e.target.value)}
          />
          <button onClick={() => getweatherbycity()} className="btn d-flex">
            {" "}
            SEARCH
          </button>
        </div>
        {Weather && Weather.location && (
          <div className="content">
            <div className="location d-flex">
              <h2>✔️ </h2>
              <h2> {Weather.location.name}</h2>
            </div>
            <p className="datetext">{renderdate()} </p>
            <div className="weatherdesc">
              <img src={Weather.current.condition.icon} alt="" />
              <h3>{Weather.current.condition.text}</h3>
            </div>
            <div className="tempstats d-flex  flex-c">
              <h1>
                {Weather.current.temp_c}
                <span>&deg;C</span>
              </h1>
              <h3>
                feel like {Weather.current.feelslike_c} <span>&deg;C</span>
              </h3>
              <h3> Humidity : {Weather.current.humidity}</h3>
            </div>
            <div className="windstats">
              <h3>🌪</h3>
              <h3>wind degree: {Weather.current.wind_degree}</h3>
              <h3> Wind {Weather.current.wind_kph} kph</h3>
            </div>
          </div>
        )}
        {!Weather.location && (
          <div className="content">
            <h4> No data found!</h4>
          </div>
        )}
      </div>
    </>
  );
}
export default App;
