import data from "../data.json";
import { useEffect, useState } from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import styles from "./Technology.module.css";


const Technology = () => {
  const [num, setNum] = useState(0);
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
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNum((num) => (num == 2 ? 0 : num + 1));
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  const pf = "." + (width > 992 ? tech.images.portrait : tech.images.landscape);

  console.log(pf);
  
  
  return (
    <div className={`${styles.bgTech} topSpace`}>
      <div className="heroTitle">
        <h3>
          <span>03</span>space launch 101
        </h3>
      </div>

      <Carousel>
        {techData.map((item, i) => (
          <img key={i} src={pf} className="" alt={tech.name} />
          // <Item key={i} item={item} />
        ))}
      </Carousel>
      <div className={`${styles.techBody} d-flex flex-column flex-lg-row`}>
        <div className={`${styles.img} order-lg-last mt-3`}>
          <img src={pf} className="" alt={tech.name} />
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
          <div className="description">{tech.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
