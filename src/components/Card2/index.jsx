import { LeafIcon } from "lucide-react";

const Card2 = () => {
  return (
    <div className="card-2">
      <div className="title">
        <LeafIcon size={20} />
        <span>Qualidade do ar</span>
      </div>

      <div className="main-item">
        <span className="text">Boa</span>
        <span className="number">21</span>
      </div>

      <div className="footer">
        <div className="item">
          <span className="number">12.9</span>
          <span className="text">PM2.5</span>
        </div>
        <div className="item">
          <span className="number">12.9</span>
          <span className="text">PM2.5</span>
        </div>
        <div className="item">
          <span className="number">12.9</span>
          <span className="text">PM2.5</span>
        </div>
        <div className="item">
          <span className="number">12.9</span>
          <span className="text">PM2.5</span>
        </div>
        <div className="item">
          <span className="number">12.9</span>
          <span className="text">PM2.5</span>
        </div>
      </div>
    </div>
  );
};

export default Card2;
