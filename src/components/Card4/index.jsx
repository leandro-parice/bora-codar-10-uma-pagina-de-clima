/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { WebhookIcon } from "lucide-react";

import Card4Day from "../Card4Day";

const Card4 = ({ loading, weatherData }) => {
  if (loading) {
    return (
      <div className="card-4">
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
    <div className="card-4">
      <div className="days">
        {weatherData.forecast.map((day) => (
          <Card4Day key={day.date} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Card4;
