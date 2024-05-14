import React, { useState } from 'react';
import './App.scss';

// external libraries
import { BarLoader } from 'react-spinners';

// importing components
import SearchBar from './components/SearchBar/SearchBar';
import HeroSection from './components/HeroSection/HeroSection';
import TodayWeather from './components/TodayWeather/TodayWeather';
import WeeklyWeather from './components/WeeklyWeather/WeeklyWeather';

function App() {
  const [countryName, setCountryName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFarenheit, setIsFarenheit] = useState(true);
  const url = `https://api.weatherapi.com/v1/forecast.json?key=0b81c00069be4d3fa7262132220408&q=${countryName}&days=7&aqi=no&alerts=no`
  const [storeData, setStoreData] = useState();

  const fetchCountryData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      if (data.error) {
        alert(data.error.message);
        window.location.reload();
      }
      setIsLoading(false);
      setStoreData(data);
    } catch (error) {
      alert(error);
      window.location.reload();
    }
  }
  const submitHandler = (e) => {
    e.preventDefault();
    fetchCountryData();
    setCountryName('');
  }
  if (isLoading) {
    return (
      <div className='loading-container'>
        <BarLoader />
      </div>
    )
  }
  return (
    <div className="App">
      <SearchBar submitHandler={submitHandler} countryName={countryName} setCountryName={setCountryName} />
      <HeroSection storeData={storeData} isFarenheit={isFarenheit} setIsFarenheit={setIsFarenheit} />
      <TodayWeather storeData={storeData} isFarenheit={isFarenheit} />
      <WeeklyWeather storeData={storeData} isFarenheit={isFarenheit} />
    </div>
  );
}

export default App;
