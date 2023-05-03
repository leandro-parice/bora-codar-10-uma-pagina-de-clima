/* eslint-disable react/prop-types */
import { DropletsIcon, MapPin, WindIcon, WebhookIcon, CloudyIcon } from "lucide-react";
import wheather from "../../assets/weather-1.svg";

const Card1 = ({ loading, location, weatherData }) => {
  if (loading) {
    return (
      <div className="card-1">
        <div className="header">
          <div className="loading">
            <WebhookIcon size={18} color="#9D99E4" />
          </div>
          <span>Carregando informações...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="card-1">
      <img src={wheather} className="main-image" />
      <div className="header">
        <MapPin size={18} color="#9D99E4" />
        <span>
          {location.city}, {location.region}
        </span>
      </div>
      <div className="content">
        <div className="degrees">{weatherData.current.temp_c}</div>
        <div className="footer">
          <div className="max">{weatherData.current.maxtemp_c}º</div>
          <div className="min">{weatherData.current.mintemp_c}º</div>
        </div>
      </div>
      <div className="footer">
        <div className="item">
          <WindIcon size={32} color="#ffff" opacity={0.4} />
          <div className="content">
            <span className="title">Vento</span>
            <span className="text">
              <strong>{weatherData.current.wind_kph}</strong> km/h
            </span>
          </div>
        </div>
        <div className="item">
          <DropletsIcon size={32} color="#ffff" opacity={0.4} />
          <div className="content">
            <span className="title">Umidade</span>
            <span className="text">
              <strong>{weatherData.current.humidity}</strong> %
            </span>
          </div>
        </div>
        <div className="item">
          <CloudyIcon size={32} color="#ffff" opacity={0.4} />
          <div className="content">
            <span className="title">Nuvens</span>
            <span className="text">
              <strong>{weatherData.current.cloud}</strong> %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
