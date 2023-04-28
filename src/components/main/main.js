import "./main.css";
import databiz from "./Images/client-databiz.svg";
import audiophile from "./Images/client-audiophile.svg";
import meet from "./Images/client-meet.svg";
import maker from "./Images/client-maker.svg";
import hero from "./Images/image-hero-desktop.png";
const Main = () => {
  return (
    <>
      <main className="main-info">
        <div className="intro">
          <div>
            <h5>Make remote work</h5>

            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch producitvity soar.
            </p>
          </div>

          <div>
            <button className="btn-learn">Learn more</button>
          </div>
          <div className="coworkers">
            <img src={databiz} alt="" />
            <img src={audiophile} alt="" />
            <img src={meet} alt="" />
            <img src={maker} alt="" />
          </div>
        </div>
        <div>
          <img className="hero" src={hero} alt="" />
        </div>
      </main>
    </>
  );
};

export default Main;
