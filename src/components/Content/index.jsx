import Player from '../Player';
import s from './styles.module.css';

const Content = () => {
  return (
    <div className={s.content}>
      <aside>
        <div className={s.info}>chuu 🍎 1999</div>
        <ul>
          <li>
            <img className={s.mainPic} src='chuu2.jpg' alt='Icon' />
          </li>
          <li>
            hi, my name is 김지우 and i love music
          </li>
          <li>color: <span style={{ background: '#FEA87D' }}>peach</span></li>
          <li>
            <a
              href='https://www.instagram.com/chuuo3o/'
              target='_blank'
              rel='noopener noreferrer'
              className={s.link}
            >
              instagram
            </a>
          </li>
        </ul>
      </aside>
      <section className={s.myStuff}>
        <div className={s.interests}>
          <img src='kitty.webp' alt='Kitty' />
          <h5 className={s.interestsTitle}>interests</h5>
          <ul>
            <li>💗 taekwondo</li>
            <li>💗 cute things</li>
            <li>💗 going out with<br /> my friends</li>
            <li>💗 singing</li>
            <li>💗 baking</li>
          </ul>
        </div>
        <div className={s.interests}>
          <img src='kitty.webp' alt='Kitty' />
          <h5 className={s.interestsTitle}>dislikes</h5>
          <ul>
            <li>💔 winter</li>
            <li>💔 sundays</li>
            <li>💔 vanilla ice cream</li>
            <li>💔 horror movies</li>
            <li>💔 onions</li>
          </ul>
        </div>
        <div className={s.interests}>
          <img src='kitty.webp' alt='Kitty' />
          <h5 className={s.interestsTitle}>favorite artists</h5>
          <ul>
            <li>yves</li>
            <li>paul kim</li>
            <li>ariana grande</li>
            <li>melomance</li>
            <li>dean</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Content;
