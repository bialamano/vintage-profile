import { useContext, useState, useEffect } from 'react';

import { Context } from '../../context';

import s from './styles.module.css';

const Footer = () => {
  const { setMinimize, minimize, close } = useContext(Context);

  const handleTab = () => {
    setMinimize(!minimize);
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className={s.footer}>
        <div className={s.tabs}>
          <button className={s.menu}>
            <img src='windows-0.png' alt='Windows' />
            Start
          </button>
          {!close && (
            <button className={s.button} onClick={handleTab}>
              About me ヾ(≧ ▽ ≦)ゝ
            </button>
          )}
        </div>
        <div className={s.clock}>
          <span>{currentTime}</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
