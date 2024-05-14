import React, { useEffect, useState } from 'react';
import './HeroSection.scss';

const HeroSection = ({ storeData, isFarenheit, setIsFarenheit }) => {
  const [weatherCondition, setWeatherCondition] = useState('sunny');

  // function to check the status of the weather and to display background color related to that
  const getBackGroundColor = () => {
    const possibleWeatherOutcomes = ['sunny', 'cloudy', 'rain', 'mist'];
    const splittedWeatherCondition = storeData.current.condition.text.split(' ');
    const currentWeatherCondition = splittedWeatherCondition.map((curEle) => {
      for (const item of possibleWeatherOutcomes) {
        if (curEle.toLowerCase() === item) {
          return curEle.toLowerCase();
        }
      }
    })
    for (const item of currentWeatherCondition) {
      if (item !== undefined) {
        setWeatherCondition(item);
      }
    }
  }

  useEffect(() => {
    if (storeData) {
      getBackGroundColor();
    }
  }, [weatherCondition])

  const getDayName = (todayDate) => {
    const dateArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const newDate = new Date(todayDate);
    const dayName = dateArray[newDate.getDay()];
    return dayName;
  }

  if (storeData) {
    return (
      <div className='hero-section-container'>
        <div className="hsc-header-container">
          <div className="hsc-place-name-container">
            <h1>{storeData.location.name} Weather Forecast <span>{storeData.location.region},{storeData.location.country}</span></h1>
          </div>
          <div className="hsc-units-container">
            <button className={isFarenheit ? 'active' : null} onClick={() => setIsFarenheit(true)}><p><sup>&#176;</sup>F</p></button>
            <button className={isFarenheit ? null : 'active'} onClick={() => setIsFarenheit(false)}><p><sup>&#176;</sup>C</p></button>
          </div>
        </div>
        {
          isFarenheit
            ? <div className="hsc-data-container" id={weatherCondition}>
              <div className="hscdc-top-container">
                <div className="hscdctc-left-container">
                  <div className="hscdctclc-img-container">
                    <img src={storeData.current.condition.icon} alt={storeData.current.condition.text} />
                  </div>
                  <div className="hscdctclc-info-container">
                    <h1>{storeData.current.temp_f} &#176;F&nbsp;&nbsp;{getDayName(storeData.forecast.forecastday[0].date)}</h1>
                    <p>{storeData.current.condition.text}</p>
                  </div>
                </div>
                <div className="hscdctc-right-container">
                  <div className="hscdctcrc-item-container">
                    <p>Wind</p>
                    <p>{storeData.current.wind_mph} mph</p>
                  </div>
                  <div className="hscdctcrc-item-container">
                    <p>Precip</p>
                    <p>{storeData.current.precip_mm} mm</p>
                  </div>
                  <div className="hscdctcrc-item-container">
                    <p>Pressure</p>
                    <p>{storeData.current.pressure_in} in</p>
                  </div>
                </div>
              </div>
              <div className="hscdc-bottom-container">
                {
                  storeData.forecast.forecastday.slice(1, storeData.forecast.forecastday.length).map((curDay) => {
                    return (
                      <div className="hscdcbc-day-data-container" key={curDay.date}>
                        <div className="hscdcbcddc-img-cotainer">
                          <img src={curDay.day.condition.icon} alt="Cloud" />
                        </div>
                        <div className="hscdcbcddciic-item-container">
                          <p>{getDayName(curDay.date)}</p>
                          <p>{curDay.day.maxtemp_f} &#176;F</p>
                          <p>{curDay.day.condition.text}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            : <div className="hsc-data-container" id={weatherCondition}>
              <div className="hscdc-top-container">
                <div className="hscdctc-left-container">
                  <div className="hscdctclc-img-container">
                    <img src={storeData.current.condition.icon} alt={storeData.current.condition.text} />
                  </div>
                  <div className="hscdctclc-info-container">
                    <h1>{storeData.current.temp_c} &#176;C {getDayName(storeData.forecast.forecastday[0].date)}</h1>
                    <p>{storeData.current.condition.text}</p>
                  </div>
                </div>
                <div className="hscdctc-right-container">
                  <div className="hscdctcrc-item-container">
                    <p>Wind</p>
                    <p>{storeData.current.wind_kph} Kmph</p>
                  </div>
                  <div className="hscdctcrc-item-container">
                    <p>Precip</p>
                    <p>{storeData.current.precip_mm} mm</p>
                  </div>
                  <div className="hscdctcrc-item-container">
                    <p>Pressure</p>
                    <p>{storeData.current.pressure_mb} mb</p>
                  </div>
                </div>
              </div>
              <div className="hscdc-bottom-container">
                {
                  storeData.forecast.forecastday.slice(1, storeData.forecast.forecastday.length).map((curDay) => {
                    return (
                      <div className="hscdcbc-day-data-container" key={curDay.date}>
                        <div className="hscdcbcddc-img-cotainer">
                          <img src={curDay.day.condition.icon} alt="Cloud" />
                        </div>
                        <div className="hscdcbcddciic-item-container">
                          <p>{getDayName(curDay.date)}</p>
                          <p>{curDay.day.maxtemp_c} &#176;C</p>
                          <p>{curDay.day.condition.text}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
        }

      </div>
    )
  }
  return null;
}

export default HeroSection

