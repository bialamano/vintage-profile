import { useContext } from 'react';
import s from './styles.module.css';

import { Context } from '../../context';

const Footer = () => {
  const { setMinimize, minimize, close } = useContext(Context);

  const handleTab = () => {
    setMinimize(!minimize);
  };

  return (
    <>
      <div className={s.footer}>
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
    </>
  );
};

export default Footer;
