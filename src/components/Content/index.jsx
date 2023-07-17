import Player from '../Player';
import s from './styles.module.css';

const Content = () => {
  return (
    <div className={s.content}>
      <aside>
        <div className={s.info}>🐝 1999</div>
        <ul>
          <li>
            <img className={s.mainPic} src='joy.jpg' alt='Icon' />
          </li>
          <li>color: pink</li>
          <li>
            <a
              href='https://www.last.fm/pt/user/cagethekitten'
              target='_blank'
              rel='noopener noreferrer'
            >
              last.fm
            </a>
          </li>
          <li>
            <a
              href='http://letterboxd.com/bighiro/'
              target='_blank'
              rel='noopener noreferrer'
            >
              letterboxd
            </a>
          </li>
          <li>
            <a
              href='https://anilist.co/user/sailorsaturn/'
              target='_blank'
              rel='noopener noreferrer'
            >
              anilist
            </a>
          </li>
        </ul>
      </aside>
      <section className={s.myStuff}>
        <div className={s.interests}>
          <h5 className={s.interestsTitle}>interests</h5>
          <img src='kitty.webp' alt='Kitty' />
          <ul>
            <li>nct</li>
            <li>kpop but pretty casually</li>
            <li>web dev</li>
            <li>music!!!!!!!!</li>
            <li>fanfic</li>
            <li>tft, league and genshin</li>
          </ul>
        </div>
        <div className={s.interests}>
          <img src='hello.png' alt='Kitty' />
          <img src='kitty.webp' alt='Kitty' />
          <h5 className={s.interestsTitle}>dislikes</h5>
          <ul>
            <li>nct</li>
            <li>kpop but pretty casually</li>
            <li>web dev</li>
            <li>music!!!!!!!!</li>
            <li>fanfic</li>
            <li>tft, league and genshin</li>
          </ul>
        </div>
        <div className={s.interests}>
          <img src='kitty.webp' alt='Kitty' />
          <h5 className={s.interestsTitle}>interests</h5>
          <ul>
            <li>nct</li>
            <li>kpop but pretty casually</li>
            <li>web dev</li>
            <li>music!!!!!!!!</li>
            <li>fanfic</li>
            <li>tft, league and genshin</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Content;
