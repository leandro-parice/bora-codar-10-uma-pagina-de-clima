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
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location.city}&aqi=no`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      setWeatherData({
        temp_c: data.current.temp_c,
        wind_kph: data.current.wind_kph,
        humidity: data.current.humidity,
        cloud: data.current.cloud,
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
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
      </div>
    </div>
  );
};

export default App;
