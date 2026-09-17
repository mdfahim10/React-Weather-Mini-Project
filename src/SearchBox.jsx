import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
export default function SearchBox({ updateWeatherInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_URL =import.meta.env.VITE_WEATHER_API_URL;
    const API_KEY =import.meta.env.VITE_WEATHER_API_KEY;
    const fetchWeather = async () => {
        const response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
            throw new Error("City not found");
        }
        const jsonResponse = await response.json();
        const result = {
            name: jsonResponse.name,
            temperature: jsonResponse.main.temp,
            feels_like: jsonResponse.main.feels_like,
            minimum_temperature: jsonResponse.main.temp_min,
            maximum_temperature: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            description: jsonResponse.weather[0].description,
            wind_speed: jsonResponse.wind.speed
        };
        return result;
    };
    const handleChange = (event) => {
        setCity(event.target.value);
    };
    const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const newWeatherInfo = await fetchWeather();

        updateWeatherInfo(newWeatherInfo);
        setError(false);
        setCity("");

    } catch (error) {
        console.error("Weather API Error:", error);
        setError(true);
    }
};
    return (
        <div className="search-box">
            <form
                className="search-box__form"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    className="search-box__input"
                />
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    className="search-box__button"
                >
                    Search
                </Button>
                {error && (
                    <p className="search-box__error">
                        No such location exists!
                    </p>
                )}
            </form>
        </div>
    );
}