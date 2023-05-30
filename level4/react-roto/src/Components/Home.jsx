import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from './UserContext';
import axios from 'axios';
import './Home.css';

export default function Home() {
  const [data, setData] = useState({});
  const { addLocation, location } = useContext(UserContext);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d95dbd0668f3e2f46fc9a93048feda56`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation('');
    }
  };
  console.log('Home', location);
  return (
    <div>
      <div className="search">
        <input
          className="location-input"
          value={location}
          onChange={(e) => addLocation(e.target.value)}
          placeholder="Enter Location"
          type="text"
          onKeyDown={searchLocation}
        />
        {/* <input
          placeholder="test"
          onChange={(e) => addTestData(e.target.value)}
        /> */}
      </div>
      <div className="current-container">
        {data.name != undefined && (
          <div className="current-card">
            <div className="top-card">
              <div className="location">
                <p>{data.name}</p>
              </div>
              <div className="temp">
                {data.main ? <h1>{data.main.temp.toFixed()} F </h1> : null}
              </div>
              <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
              </div>
            </div>
            <div className="weather-photo">
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt={data.weather[0].description}
              />
            </div>
            <div className="card-description">
              <div className="feels">
                {data.main ? <p>{data.main.feels_like.toFixed()} F </p> : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? <p>{data.main.humidity} % </p> : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? <p>{data.wind.speed.toFixed()}MPH</p> : null}
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
