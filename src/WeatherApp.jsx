import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        name: "Mumbai",
        temperature: 28.99,
        feels_like: 34.5,
        minimum_temperature: 28.94,
        maximum_temperature: 30.12,
        humidity: 79,
        description: "light rain",
        wind_speed: 3.6
    });
    const updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return (
        <div className="weather-app">
            <h2 className="weather-app__heading">
                Weather Widget by Md Fahim
            </h2>
            <SearchBox updateWeatherInfo={updateWeatherInfo} />
            <InfoBox weatherInfo={weatherInfo} />
        </div>
    );
}