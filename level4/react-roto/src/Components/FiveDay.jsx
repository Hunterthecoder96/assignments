import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import './FiveDay.css';
import { UserContext } from './UserContext';

export default function FiveDay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.list);
      console.log(res.data.list);
    });
  }, []);

  const { addLocation, location, setLocation } = useContext(UserContext);
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=d95dbd0668f3e2f46fc9a93048feda56`;

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((res) => {
        setData(res.data.list);
        console.log(res.data.list);
      });
      setLocation('');
    }
  };

  const formatDate = (date) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };
  console.log('FiveDay', location);
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
      </div>
      <div className="container">
        {data.length > 0 && (
          <div className="item-aligner">
            <h2>{data[0].name} 5-Day Forecast</h2>
            <div className="fiveCard-container">
              {data.map((item, index) => {
                if (index % 8 === 0) {
                  return (
                    <div className="card" key={item.dt}>
                      <div className="card-header">
                        <p>{formatDate(item.dt_txt)}</p>
                        <img
                          src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                          alt={item.weather[0].description}
                        />
                      </div>
                      <div className="card-body">
                        <p>Temperature: {item.main.temp.toFixed()} F</p>
                        <p>Description: {item.weather[0].description}</p>
                        <p>Feels Like: {item.main.feels_like.toFixed()} F</p>
                        <p>Humidity: {item.main.humidity} %</p>
                        <p>Wind Speed: {item.wind.speed.toFixed()} MPH</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
