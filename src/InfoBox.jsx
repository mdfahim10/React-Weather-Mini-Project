import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function InfoBox({ weatherInfo }) {
    return (
        <div className="weather-info">
            <Card className="weather-card">
                <CardContent className="weather-card__content">
                    <Typography
                        variant="h5"
                        component="h2"
                        className="weather-card__city"
                        gutterBottom
                    >
                        City: {weatherInfo.name}
                    </Typography>
                    <Typography variant="body2" className="weather-card__item">
                        Temperature: {weatherInfo.temperature}°C
                    </Typography>
                    <Typography variant="body2" className="weather-card__item">
                        Feels Like: {weatherInfo.feels_like}°C
                    </Typography>
                    <Typography variant="body2" className="weather-card__item">
                        Minimum Temperature: {weatherInfo.minimum_temperature}°C
                    </Typography>
                    <Typography variant="body2" className="weather-card__item">
                        Maximum Temperature: {weatherInfo.maximum_temperature}°C
                    </Typography>
                    <Typography variant="body2" className="weather-card__item">
                        Humidity: {weatherInfo.humidity}%
                    </Typography>
                    <Typography variant="body2" className="weather-card__item">
                        Weather: {weatherInfo.description}
                    </Typography>
                    <Typography variant="body2" className="weather-card__item">
                        Wind Speed: {weatherInfo.wind_speed} m/s
                    </Typography>
                </CardContent>
                <CardActions className="weather-card__actions">
                </CardActions>
            </Card>
        </div>
    );
}