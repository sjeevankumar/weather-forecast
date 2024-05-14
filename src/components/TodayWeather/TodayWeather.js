import React from 'react';
import './TodayWeather.scss';

const TodayWeather = ({ storeData, isFarenheit }) => {
  if (storeData) {
    return (
      <div className='today-weather-container'>
        <div className="twc-heading-container">
          <h1>Today's Weather in {storeData.location.name}</h1>
        </div>
        {
          isFarenheit
            ? <div className="twc-info-container">
              <div className="twcic-left-container">
                <div className="sun-status-container">
                  <p>Sunrise {storeData.forecast.forecastday[0].astro.sunrise}</p>
                  <p>Sunset {storeData.forecast.forecastday[0].astro.sunset}</p>
                </div>
                <div className="moon-status-container">
                  <p>Moonrise {storeData.forecast.forecastday[0].astro.moonrise}</p>
                  <p>Moonset {storeData.forecast.forecastday[0].astro.moonset}</p>
                </div>
              </div>
              <div className="twcic-right-container">
                <div className="twcicrc-item-container">
                  <p>Max.</p>
                  <p>{storeData.forecast.forecastday[0].day.maxtemp_f} &#176;F</p>
                </div>
                <div className="twcicrc-item-container">
                  <p>Min.</p>
                  <p>{storeData.forecast.forecastday[0].day.mintemp_f} &#176;F</p>
                </div>
                <div className="twcicrc-item-container">
                  <p>Avg.</p>
                  <p>{storeData.forecast.forecastday[0].day.avgtemp_f} pm</p>
                </div>
                <div className="twcicrc-item-container">
                  <p>Precip.</p>
                  <p>{storeData.forecast.forecastday[0].day.totalprecip_mm} mm</p>
                </div>
                <div className="twcicrc-item-container">
                  <p>Max.Wind</p>
                  <p>{storeData.forecast.forecastday[0].day.maxwind_mph} mph</p>
                </div>
              </div>
            </div>
            : <div className="twc-info-container">
              <div className="twcic-left-container">
                <div className="sun-status-container">
                  <p>Sunrise {storeData.forecast.forecastday[6].astro.sunrise}</p>
                  <p>Sunset {storeData.forecast.forecastday[6].astro.sunset}</p>
                </div>
                <div className="moon-status-container">
                  <p>Moonrise {storeData.forecast.forecastday[6].astro.moonrise}</p>
                  <p>Moonset {storeData.forecast.forecastday[6].astro.moonset}</p>
                </div>
              </div>
              <div className="twcic-right-container">
                <div className="twcicrc-item-container">
                  <p>Max.</p>
                  <p>{storeData.forecast.forecastday[6].day.maxtemp_c} &#176;C</p>
                </div>
                <div className="twcicrc-item-container">
                  <p>Min.</p>
                  <p>{storeData.forecast.forecastday[6].day.mintemp_c} &#176;C</p>
                </div>
                <div className="twcicrc-item-container">
                  <p>Avg.</p>
                  <p>{storeData.forecast.forecastday[6].day.avgtemp_c} pm</p>
                </div>
                <div className="twcicrc-item-container">
                  <p>Precip.</p>
                  <p>{storeData.forecast.forecastday[6].day.totalprecip_mm} mm</p>
                </div>
                <div className="twcicrc-item-container">
                  <p>Max.Wind</p>
                  <p>{storeData.forecast.forecastday[6].day.maxwind_kph} kmph</p>
                </div>
              </div>
            </div>
        }

      </div>
    )
  }
  return null;
}

export default TodayWeather
