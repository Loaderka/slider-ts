import {FC} from "react";

import styles from "./Dots.module.scss";
import {pictures} from '../../const';

import {Props} from "./types";

const Dots: FC<Props> = ({transition, handleClick}) => {
  return (
    <div className={styles.dotsContainer}>
      {pictures.map((url, i) => (
        <button
          key={i}
          disabled={transition}
          className={styles.dot}
          onClick={() => handleClick(i)}
          style={{background: `url(${url})`, backgroundSize: 'cover'}}
        />
      ))}
    </div>
  );
};

export default Dots;
