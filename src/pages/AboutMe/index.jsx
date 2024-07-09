import { useContext } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';
import Content from '../../components/Content';
import Player from '../../components/Player';
import classNames from 'classnames';
import s from './styles.module.css';

import { Context } from '../../context';

const AboutMe = () => {
  const cx = classNames.bind(s);
  const { close, maximize, minimize, setClose } = useContext(Context);

  return (
    <>
      <div className={s.aboutMe}>
        {!close && !minimize && (
          <>
            <div className={cx(s.aboutMeWrapper, { maximized: maximize })}>
              <Header />
              <SearchBar />
              <Content />
            </div>
          </>
        )}
        <button className={s.aboutMeButton} onClick={() => setClose(false)}>
          <img src='pixel-hello-kitty.gif' alt='Me' />
          <span>me 💗</span>
        </button>

        <div className={s.player}>
          <h3 className={s.playerTitle}>
            <span style={{ color: 'red' }}>s</span>
            <span style={{ color: 'orange' }}>o</span>
            <span style={{ color: 'yellow' }}>n</span>
            <span style={{ color: 'green' }}>g</span>
            &nbsp;
            <span style={{ color: 'blue' }}>r</span>
            <span style={{ color: 'purple' }}>e</span>
            <span style={{ color: 'deeppink' }}>c</span>
          </h3>
          <Player />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default AboutMe;
