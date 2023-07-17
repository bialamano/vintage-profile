import { useContext } from 'react';
import s from './styles.module.css';

import { Context } from '../../context';

const Header = () => {
  const { closeApp, minimizeApp, maximizeApp } = useContext(Context);

  return (
    <>
      <div className={s.header}>
        <div className={s.title}>
          <img src='world-0.png' alt='Internet Explorer' />
          <span>Internet Explorer (about me ヾ(≧ ▽ ≦)ゝ)</span>
        </div>
        <div className={s.buttons}>
          <button
            className={s.minimize}
            title='Minimizar'
            onClick={minimizeApp}
          ></button>
          <button
            className={s.maximize}
            title='Maximiza'
            onClick={maximizeApp}
          ></button>
          <button
            className={s.close}
            title='Fechar'
            onClick={closeApp}
          ></button>
        </div>
      </div>
    </>
  );
};

export default Header;
