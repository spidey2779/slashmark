import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { getWeatherForecast } from "../services/weatherservices";

const WeatherForecast: React.FC = () => {
  const [forecast, setForecast] = useState<WeatherCardProps[]>([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      //   console.log(latitude, longitude);
      const weatherData = await getWeatherForecast(latitude, longitude);
      setForecast(weatherData);
    });
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Weather Forecast</h1>
      <div className="flex flex-wrap justify-center">
        {forecast.map((day, index) => {
          return (
            <WeatherCard
              key={index}
              date={day.date}
              temperature={day.temperature}
              description={day.description}
              icon={day.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeatherForecast;
