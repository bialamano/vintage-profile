import { useState } from 'react';
import useSound from 'use-sound'; // for handling the sound
import song from '../../assets/song.mp3'; // importing the music
import { GrPlayFill, GrPauseFill } from 'react-icons/gr'; // icons for play and pause

import s from './styles.module.css';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause }] = useSound(song, { volume: 0.25 });

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={s.player}>
      <div className={s.cover}>
        <img className={s.musicCover} src='Folder.jpg' alt='Cover' />
        <div className={s.titleWrapper}>
          <h3 className={s.title}>Kingdom Come</h3>
          <p className={s.subTitle}>Red Velvet</p>
        </div>
      </div>
      <div>
        {!isPlaying ? (
          <button className={s.playButton} onClick={playingButton}>
            <GrPlayFill />
          </button>
        ) : (
          <button className={s.playButton} onClick={playingButton}>
            <GrPauseFill />
          </button>
        )}
      </div>
    </div>
  );
};

export default Player;
