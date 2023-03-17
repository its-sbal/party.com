import "./landing.css";
import photo1 from "../images/landing1.png";
function Landing() {
  return (
    <div>
      <div className="left"></div>
      <div className="right">
        <img src={photo1} />
      </div>
    </div>
  );
}

export default Landing;
