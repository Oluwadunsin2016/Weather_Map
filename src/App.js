import axios from "axios";
import React, { useState } from "react";
// import axios from "axios";

function App() {
  const [data, setdata] = useState({});
  const [location, setlocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=352af4f81693fd11ab1308adaa815e58`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setdata(response.data);
        console.log(response.data);
      });
      setlocation('')
    }
  };

  return (
    <div className="app">
      <div className="search">
     {/* <input type="text" name=""onKeyPress={searchLocation} value={location} onChange={event=>setlocation(event.target.value)}  placeholder="Search Location" id="" /> */}
          <input type="text"
            value={location}
            onChange={(event) => setlocation(event.target.value)}
            placeholder="Enter Location"
            onKeyPress={searchLocation}
            name=""
            id=""/>
      </div>
      <div className="contain">
        <div className="top">
          <div className="location">
           {data.sys? <h2>{data.sys.country}</h2>:null}
            <p>{data.name}</p>
          </div>
          <div className="tem">
          {data.main? <h1>{data.main.temp.toFixed()}°F</h1>:null}
          </div>
          <div className="description">
          {data.weather? <p>{data.weather[0].description}</p>:null}
          </div>
        </div>

{data.name!= undefined?
        <div className="bottom">
          <div className="feels">
          {data.main?<p className="bold">{data.main.feels_like.toFixed()}°F</p>:null}
            <p>Feels_tlike</p>
          </div>
          <div className="Humidity">
             {data.main?<p className="bold">{data.main.humidity.toFixed()}%</p>:null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.wind?<p className="bold">{data.wind.speed.toFixed()} MPH</p>:null}
            {/* <p className="bold">12 MPH</p> */}
            <p>Wind Speed</p>
          </div>
        </div>:null
}


      </div>
    </div>
  );
}
export default App;
