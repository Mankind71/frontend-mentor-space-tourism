import data from "../data.json";
import styles from "./Crew.module.css";
import { useEffect, useState } from "react";
const Crew = () => {
  const crewData = data.crew;
  const [num, setNum] = useState(0);
  const crew = crewData[num];
  const pf = "." + crew.images.webp;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNum((num) => (num == 3 ? 0 : num + 1));
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`${styles.bgCrew} topSpace`}>
      <div className="heroTitle">
        <h3>
          <span>02</span>MEET YOUR CREW
        </h3>
      </div>
      <div className="d-flex flex-column">
        <div className={styles.carousel}>
          <div className={`${styles.img} mt-3`}>
            <img src={pf} className="" alt={crew.name} />
          </div>
          <div className="d-flex justify-content-center">
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
        </div>
        <div className="desc">
          <div className={styles.role}>{crew.role}</div>
          <div className="dataName">{crew.name}</div>
          <div className="description">{crew.bio}</div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
