import {FC} from "react";

import {pictures} from "../../const";

import styles from "./List.module.scss";

import {Props} from "./types";

const List: FC<Props> = ({style}) => {
  return (
    <>
      <div className={styles.list} style={style}>
        <div
          key={pictures[pictures.length - 1] + "fake"}
          className={styles.slide}
        >
          <img
            className={styles.image}
            src={pictures[pictures.length - 1]}
            alt="slide"
          />
        </div>
        {pictures.map((img) => (
          <div key={img} className={styles.slide}>
            <img className={styles.image} src={img} alt="slide" />
          </div>
        ))}
        <div key={pictures[0] + "fake"} className={styles.slide}>
          <img className={styles.image} src={pictures[0]} alt="slide" />
        </div>
      </div>
    </>
  );
};

export default List;
