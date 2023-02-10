import data from "../data.json";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import styles from "./Technology.module.css";

const Technology = () => {
  const [num, setNum] = useState(2);
  const [width, setWidth] = useState(window.innerWidth);

  const techData = data.technology;
  const tech = techData[num];

  const checkWidth = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  });

  return (
    <div className={`${styles.bgTech} topSpace`}>
      <div className="heroTitle">
        <h3>
          <span>03</span>space launch 101
        </h3>
      </div>

      <div
        className={`${styles.techBody} d-flex flex-column flex-lg-row align-items-lg-center techBody`}
      >
        <div className={`${styles.carouselCon} carouselCon`}>
          <Carousel
            indicators={false}
            onChange={(next) => {
              if (next == undefined) return;
              setNum(next);
            }}
            navButtonsAlwaysInvisible={false}
            changeOnFirstRender={true}
            index={num}
            className={styles.mainCarousel}
          >
            {techData.map((item, i) => (
              <div
                key={i}
                className={`${styles.img} order-lg-last mt-3`}
                onChange={() => {
                  console.log("changed");
                }}
              >
                <img
                  key={i}
                  src={
                    width > 992 ? item.images.portrait : item.images.landscape
                  }
                  className={styles.carouselImg}
                  alt={tech.name}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div
          className={`${styles.carousel} d-flex justify-content-center flex-lg-column justify-content-lg-between`}
        >
          {techData.map((c, i) => (
            <div
              key={i}
              onClick={() => setNum(i)}
              className={`${i == num ? styles.active : ""} ${
                styles.carouselBtn
              } d-flex align-items-center justify-content-center`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className={`${styles.desc} desc`}>
          <div className={styles.role}>The terminology...</div>
          <div className="dataName">{tech.name}</div>
          <div className={`${styles.description} description`}>
            {tech.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
