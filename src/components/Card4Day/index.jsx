/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState, useEffect } from "react";

const Card4Day = ({ day }) => {
  const weekName = showDate(day.date);
  const [wheatherImage, setWheatherImage] = useState("//cdn.weatherapi.com/weather/64x64/day/113.png");

  function showDate(date) {
    const dateObj = new Date(date);
    const name = format(dateObj, "EEEE", { locale: ptBR });
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  }

  useEffect(() => {
    setWheatherImage(day.condition.icon);
  }, []);

  return (
    <div className="day">
      <div className="text">{weekName}</div>
      <div className="icon">
        <img src={wheatherImage} />
      </div>
      <div className="degrees">
        <div className="max">{day.maxtemp_c.toFixed(1)}º</div>
        <div className="min">{day.mintemp_c.toFixed(1)}º</div>
      </div>
    </div>
  );
};

export default Card4Day;
