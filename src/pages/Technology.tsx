import data from "../data.json";
import { useEffect, useState } from "react";
import styles from "./Technology.module.css";

const Technology = () => {
  const techData = data.technology;
  const [num, setNum] = useState(0);
  const tech = techData[num];
  const pf = "." + tech.images.landscape;
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setNum((num) => (num == 2 ? 0 : num + 1));
      }, 2500);
  
      return () => clearInterval(intervalId);
    }, []);

    return (
    <div className={`${styles.bgTech} topSpace`}>
      <div className="heroTitle">
        <h3>
          <span>03</span>space launch 101
        </h3>
      </div>
      <div className="d-flex flex-column">
        <div className={styles.carousel}>
          <div className={`${styles.img} mt-3`}>
            <img src={pf} className="" alt={tech.name} />
          </div>
          <div className="d-flex justify-content-center">
            {techData.map((c, i) => (
              <div
                key={i}
                onClick={() => setNum(i)}
                className={`${i == num ? styles.active : ""} ${
                  styles.carouselBtn
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="desc">
          <div className={styles.role}>The terminology...</div>
          <div className="dataName">{tech.name}</div>
          <div className="description">{tech.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Technology