/* eslint-disable react/prop-types */
import { WebhookIcon, LeafIcon } from "lucide-react";
import { useState, useEffect } from "react";

const Card2 = ({ loading, weatherData }) => {
  const [usEpaIndex, setUsEpaIndex] = useState("");

  useEffect(() => {
    if (!loading) {
      const value = weatherData.air_quality.us_epa_index;

      // US - EPA standard.
      // 1 means Good
      // 2 means Moderate
      // 3 means Unhealthy for sensitive group
      // 4 means Unhealthy
      // 5 means Very Unhealthy
      // 6 means Hazardous

      switch (value) {
        case 1:
          setUsEpaIndex("Bom");
          break;
        case 2:
          setUsEpaIndex("Moderado");
          break;
        case 3:
          setUsEpaIndex("Insalubre para grupo sensível");
          break;
        case 4:
          setUsEpaIndex("Insalubre");
          break;
        case 5:
          setUsEpaIndex("Muito insalubre");
          break;
        case 6:
          setUsEpaIndex("Perigoso");
          break;
        default:
          setUsEpaIndex("");
          break;
      }
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="card-2">
        <div className="center">
          <div className="loading">
            <WebhookIcon size={18} color="#9D99E4" />
          </div>
          <span>Carregando informações...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="card-2">
      <div className="title">
        <LeafIcon size={20} />
        <span>Qualidade do ar</span>
      </div>

      <div className="main-item">
        <span className="text">{usEpaIndex}</span>
      </div>

      <div className="footer">
        <div className="item">
          <span className="number">{weatherData.air_quality.pm2_5.toFixed(1)}</span>
          <span className="text">PM2.5</span>
        </div>
        <div className="item">
          <span className="number">{weatherData.air_quality.pm10.toFixed(1)}</span>
          <span className="text">PM10</span>
        </div>
        <div className="item">
          <span className="number">{weatherData.air_quality.so2.toFixed(1)}</span>
          <span className="text">SO2</span>
        </div>
        <div className="item">
          <span className="number">{weatherData.air_quality.no2.toFixed(1)}</span>
          <span className="text">NO2</span>
        </div>
        <div className="item">
          <span className="number">{weatherData.air_quality.o3.toFixed(1)}</span>
          <span className="text">O3</span>
        </div>
        <div className="item">
          <span className="number">{weatherData.air_quality.co.toFixed(1)}</span>
          <span className="text">CO</span>
        </div>
      </div>
    </div>
  );
};

export default Card2;
