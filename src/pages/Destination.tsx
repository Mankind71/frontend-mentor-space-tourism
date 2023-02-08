import { useState } from "react";
import data from "../data.json";
import "./destination.css";

const Destination = () => {
  const destData = data.destinations;
  const [num, setNum] = useState(0);
  const dest = destData[num];
  const pf = "." + dest.images.webp;

  return (
    <div className="bgDest topSpace">
      <div className="">
        <div className="heroTitle">
          <h3 className="text-uppercase">
            <span>01</span> pick your destination
          </h3>
        </div>
        <div className="main">
          <div className="heroImg mx-auto mt-4">
            <img src={pf} alt="moon" />
          </div>
          <div>
            <div className="content">
              <div className="contentTabs">
                <div className="">
                  {destData.map((d, i) => (
                    <p
                      className={i == num ? "active" : ""}
                      onClick={() => setNum(i)}
                      key={i}
                    >
                      {d.name}
                    </p>
                  ))}
                </div>
              </div>
              <div className="name">{dest.name}</div>
              <div className="description">{dest.description}</div>
{/* 
              <div className="description">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </div> */}
              <hr />
              <div className="details d-md-flex mx-auto ms-lg-0 justify-content-around justify-content-lg-between">
                <div className="distance">
                  <h5>AVG DISTANCE</h5>
                  <p>{dest.distance}</p>
                </div>
                <div className="time">
                  <h5>ESt. travel time</h5>
                  <p>{dest.travel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
