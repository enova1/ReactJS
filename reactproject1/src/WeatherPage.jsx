// WeatherPage.jsx

import react, { useEffect, useState } from "react";

function weatherPage() {
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the WebApi backend has started.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel" >
              <thead>
              <tr>
                  <th>Date</th>
                  <th>Temp. (C)</th>
                  <th>Temp. (F)</th>
                  <th>Summary</th>
              </tr>
              </thead>
              <tbody>
              {forecasts.map(forecast =>
                  <tr key={forecast.date}>
                      <td>{forecast.date}</td>
                      <td>{forecast.temperatureC}</td>
                      <td>{forecast.temperatureF}</td>
                      <td>{forecast.summary}</td>
                  </tr>
              )}
              </tbody>
          </table>;

    return (
        <div>
            <h2 id="tabelLabel">Weather forecast</h2>
            <p>This component demonstrates fetching data from the server.
                <br />I have modified this code to pull data from an external API.
            </p>
            {contents}
        </div>
    );

    async function populateWeatherData() {
        const response = await window.fetch("weatherforecast");
        const data = await response.json();
        setForecasts(data);
    }
}

export default weatherPage;