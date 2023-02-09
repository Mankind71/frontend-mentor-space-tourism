import data from "../data.json";
import styles from "./Crew.module.css";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";

const Crew = () => {
  const [num, setNum] = useState(0);

  const crewData = data.crew;
  const crew = crewData[num];

  return (
    <div className={`${styles.bgCrew} topSpace`}>
      <div className={`${styles.heroTitle} heroTitle`}>
        <h3>
          <span>02</span>MEET YOUR CREW
        </h3>
      </div>
      <div
        className={`${styles.crewBody} d-flex flex-column flex-lg-row justify-content-md-between`}
      >
        <div className={`${styles.img} mt-3 mt-lg-0 order-md-last`}>
          <Carousel
            indicators={false}
            onChange={(next) => {
              if (next == undefined) return;
              setNum(next);
            }}
            index={num}
          >
            {crewData.map((item, i) => (
              <div
                key={i}
                className={`${styles.img} order-lg-last mt-3`}
                onChange={() => {
                  console.log("changed");
                }}
              >
                <img
                  key={i}
                  src={item.images.webp}
                  className={styles.carouselImg}
                  alt={crew.name}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={`${styles.content} content`}>
          <div
            className={`${styles.carouselCon} d-flex justify-content-center justify-content-lg-start`}
          >
            {crewData.map((c, i) => (
              <div
                key={i}
                onClick={() => setNum(i)}
                className={`${i == num ? styles.active : ""} ${
                  styles.carouselBtn
                }`}
              ></div>
            ))}
          </div>
          <div className={`${styles.desc} desc order-md-first`}>
            <div className={styles.role}>{crew.role}</div>
            <div className="dataName">{crew.name}</div>
            <div className={`${styles.description} description`}>
              {crew.bio}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
