import { SunIcon } from "lucide-react";
import sunGraph from "../../assets/sun-graph.png";

const Card3 = () => {
  return (
    <div className="card-3">
      <div className="title">
        <SunIcon size={20} />
        <span>Horário do sol</span>
      </div>

      <div className="graph">
        <span>16:01</span>
        <img src={sunGraph} />
      </div>
      <div className="footer">
        <span>06:12</span>
        <span>18:52</span>
      </div>
    </div>
  );
};

export default Card3;
