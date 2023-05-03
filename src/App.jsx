import { useState, useEffect } from "react";

import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const apiKey = "820c4e7e336043d8b4a221342230205";
      const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location.city}&days=3&aqi=yes&alerts=no`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      const current = {
        temp_c: data.current.temp_c,
        wind_kph: data.current.wind_kph,
        humidity: data.current.humidity,
        cloud: data.current.cloud,
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,
        maxtemp_c: data.forecast.forecastday[0].day.maxtemp_c,
        mintemp_c: data.forecast.forecastday[0].day.mintemp_c,
      };

      const air_quality = {
        pm2_5: data.current.air_quality.pm2_5,
        pm10: data.current.air_quality.pm10,
        so2: data.current.air_quality.so2,
        no2: data.current.air_quality.no2,
        o3: data.current.air_quality.o3,
        co: data.current.air_quality.co,
        us_epa_index: data.current.air_quality["us-epa-index"],
      };

      const forecast = [];
      data.forecast.forecastday.forEach((element) => {
        forecast.push({
          date: element.date,
          maxtemp_c: element.day.maxtemp_c,
          mintemp_c: element.day.mintemp_c,
        });
      });

      console.log(forecast);

      setWeatherData({
        current,
        forecast,
        air_quality,
      });
    } catch (error) {
      console.log("Erro ao buscar dados do clima:", error);
    }
  };

  useEffect(() => {
    const getLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const apiKey = "f675a503852644fb9b8012d8ee21daf9";
            const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

            const response = await fetch(apiUrl);
            const data = await response.json();

            const city = data.results[0].components.city;
            const region = data.results[0].components.state_code;

            setLocation({ latitude, longitude, city, region });
          },
          (error) => {
            console.log("Erro ao obter a localização:", error);
          }
        );
      } else {
        console.log("Geolocalização não suportada");
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  useEffect(() => {
    if (weatherData) {
      setLoading(false);
    }
  }, [weatherData]);

  return (
    <div className="app">
      <div className="content-center">
        <Card1 loading={loading} location={location} weatherData={weatherData} />
        <div className="content-right">
          <Card2 loading={loading} weatherData={weatherData} />
          <Card3 />
          <Card4 loading={loading} weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default App;
