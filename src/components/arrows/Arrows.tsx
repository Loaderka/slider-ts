import {FC} from "react";

import styles from "./Arrows.module.scss";
import arrowLeft from "../../images/arrow-left.png";

import {Props} from "./types";

const Arrows: FC<Props> = ({transition, handlePrev, handleNext}) => {
  return (
    <div className={styles.arrowsContainer}>
      <button
        disabled={transition}
        onClick={handlePrev}
        className={styles.arrow}
      >
        <img src={arrowLeft} alt="arrow"/>
      </button>
      <button
        disabled={transition}
        onClick={handleNext}
        className={styles.arrow}
      >
        <img src={arrowLeft} alt="arrow"/>
      </button>
    </div>
  );
};

export default Arrows;
