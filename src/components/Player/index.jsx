import { useState } from 'react';
import { GrPlayFill, GrPauseFill } from 'react-icons/gr'; // icons for play and pause

import s from './styles.module.css';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={s.player}>
      <div className={s.cover}>
        <img className={s.musicCover} src='yves-loop.jpg' alt='Cover' />
        <div className={s.titleWrapper}>
          <h3 className={s.title}>LOOP</h3>
          <p className={s.subTitle}>Yves</p>
        </div>
      </div>
      <div>
        {!isPlaying ? (
          <button className={s.playButton} onClick={() => setIsPlaying(true)}>
            <GrPlayFill />
          </button>
        ) : (
          <button className={s.playButton} onClick={() => setIsPlaying(false)}>
            <GrPauseFill />
          </button>
        )}
      </div>
    </div>
  );
};

export default Player;
