/* eslint-disable react/prop-types */
import { SunIcon, WebhookIcon } from "lucide-react";
import sunGraph from "../../assets/sun-graph.png";
import sunGraphGradient from "../../assets/sun-graph-gradient.png";
import { parse, differenceInSeconds, startOfDay } from "date-fns";
import { useEffect, useState } from "react";

const Card3 = ({ loading, weatherData }) => {
  const time = new Date();
  const formattedTime = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const [widthGradient, setWidthGradient] = useState("0px");
  const [rotateSun, setRotateSun] = useState("0deg");
  const [heightSun, setHeightSun] = useState("0px");

  useEffect(() => {
    if (!loading) {
      const todayStart = startOfDay(time);
      const todaySunrise = parse(weatherData.current.sunrise, "hh:mm a", new Date());
      const todaySunset = parse(weatherData.current.sunset, "hh:mm a", new Date());
      const todayNow = new Date();

      const difference1 = Math.abs(differenceInSeconds(todaySunrise, todayStart));
      const difference2 = Math.abs(differenceInSeconds(todaySunset, todayStart));
      const difference3 = Math.abs(differenceInSeconds(todayNow, todayStart));

      let newPct = 0;

      if (difference3 > difference1) {
        if (difference3 < difference2) {
          newPct = (((difference3 - difference1) * 100) / (difference2 - difference1)).toFixed(2);
        } else {
          newPct = 100;
        }
      }

      const newWidthGradient = (newPct * 210) / 100;
      setWidthGradient(`${newWidthGradient}px`);

      const newHeightSun = Math.sqrt(newWidthGradient * (newWidthGradient * -1 + 210));
      setHeightSun(`${newHeightSun}px`);

      const newRotate = (180 * newPct) / 100;
      setRotateSun(`${newRotate}deg`);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="card-3">
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
    <div className="card-3">
      <div className="title">
        <SunIcon size={20} />
        <span>Horário do sol</span>
      </div>

      <div className="graph">
        <span className="text">{formattedTime}</span>
        <img src={sunGraph} className="sun-graph" />
        <img src={sunGraphGradient} className="sun-graph-gradient" style={{ "--width-sun-gradient": widthGradient }} />
        <div className="sun">
          <span className="sun-item" style={{ "--left-sun": widthGradient, "--buttom-sun": heightSun }}></span>
        </div>
      </div>
      <div className="footer">
        <span>{weatherData.current.sunrise}</span>
        <span>{weatherData.current.sunset}</span>
      </div>
    </div>
  );
};

export default Card3;
