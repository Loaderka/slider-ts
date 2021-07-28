import {FC, useState, useCallback} from 'react';

import * as CSS from 'csstype';

import {pictures} from './const';

import styles from './App.module.scss';
import List from './components/list';
import Arrows from './components/arrows';
import Dots from './components/dots/Dots';

const App: FC = () => {
  const [id, setId] = useState<number>(0);
  const [transition, setTransition] = useState(false); 

  const handleNext = useCallback(() => {
    setId(prevId => prevId + 1);
    setTransition(true);

    setTimeout(() => {
      setTransition(false);
      if (id === pictures.length - 1) {
        setId(0)
      }
    }, 300);
  }, [id, setId, setTransition]);

  const handlePrev = useCallback(() => {
    setId(prevId => prevId - 1);
    setTransition(true);

    setTimeout(() => {
      setTransition(false);
      if (id === 0) {
        setId(pictures.length - 1);
      }
    }, 300);
  }, [id, setId, setTransition]);

  const handleClick = useCallback((id: number) => {
    setId(id);
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
    }, 300);
  }, [setId, setTransition]);

  const listStyle: CSS.Properties = {
    transform: `translateX(-${1200 * (id + 1)}px)`,
    transitionDuration: transition ? '300ms' : undefined,
  };

  return (
    <div className={styles.container}>
      <List style={listStyle}/>
      <Arrows transition={transition} handlePrev={handlePrev} handleNext={handleNext}/>
      <Dots transition={transition} handleClick={handleClick}/>
    </div>
  );
}

export default App;
