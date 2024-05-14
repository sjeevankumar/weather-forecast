import React, { useState } from 'react';
import './WeeklyWeather.scss';
import BasicTable from '../MaterialTable/MaterialTable';
import TemperatureLineChart from '../TemperatureLineChart/TemperatureLineChart';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import AppsIcon from '@mui/icons-material/Apps';

const WeeklyWeather = ({ storeData, isFarenheit }) => {
  const [hourDay, setHourDay] = useState(0);
  const [showStats, setShowStats] = useState(true);
  const [clickedIndex, setClickedIndex] = useState(0);
  const getDayName = (todayDate) => {
    const dateArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const newDate = new Date(todayDate);
    let dayName = dateArray[newDate.getDay()];
    return dayName;
  }
  const [dayname, setDayname] = useState(storeData ? getDayName(`'${storeData.forecast.forecastday[0].date}'`) : null);
  const handleOnclick = (index, date) => {
    setHourDay(index);
    setClickedIndex(index);
    const newDayName = getDayName(date);
    setDayname(newDayName);
  }
  if (storeData) {
    return (
      <div className='weekly-weather-container'>
        <div className="wwc-top-container">
          <div className="wwctc-days-name-container">
            {
              storeData.forecast.forecastday.map((curDay, index) => {
                return (
                  <button key={curDay.date} className={clickedIndex === index ? 'active' : null} onClick={() => handleOnclick(index, curDay.date)}>{index === 0 ? 'Today' : getDayName(curDay.date)}</button>
                )
              })
            }
          </div>
          <div className="wwctc-right-container">
            <button className={showStats ? 'active' : null} onClick={() => setShowStats(true)}><AppsIcon /></button>
            <button className={showStats ? null : 'active'} onClick={() => setShowStats(false)}><SsidChartIcon /></button>
          </div>
        </div>
        <div className="wwc-table-container">
          {showStats ? <BasicTable storeData={storeData} isFarenheit={isFarenheit} hourDay={hourDay} dayname={dayname} />
            : <TemperatureLineChart storeData={storeData} isFarenheit={isFarenheit} hourDay={hourDay} dayname={dayname} />}
        </div>
      </div>
    )
  }
  return null;
}

export default WeeklyWeather
