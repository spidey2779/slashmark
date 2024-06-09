// const API_KEY = "85b813c2a19a44b48d4125621242605";
const API_KEY = "4bd32411bcc9090b427fea26509b4ed1"; // Your actual OpenWeather API key

interface WeatherResponse {
  daily: {
    dt: number;
    temp: {
      day: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
  }[];
}

export const getWeatherForecast = async (lat: number, lon: number) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data: WeatherResponse = await response.json();

    return data.daily.slice(0, 5).map((day) => ({
      date: new Date(day.dt * 1000).toLocaleDateString(),
      temperature: day.temp.day,
      description: day.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
    }));
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    return [];
  }
};
