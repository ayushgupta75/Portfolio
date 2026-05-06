import { Reveal } from '../../common/Reveal/Reveal';
import commonStyles from '../../CommonStyles.module.css';
import styles from './HeroCard.module.css';

function HeroCard({ hero, ...props }) {
  const className = `${commonStyles.container} ${styles['hero-card']}`;

  return (
    <Reveal as="aside" className={className} {...props}>
      <p className={commonStyles.eyebrow}>{hero.snapshot.label}</p>

      <ul className={styles['focus-list']}>
        {hero.snapshot.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className={styles['availability-pill']}>
        <span className={styles['status-dot']}></span>
        {hero.snapshot.availability}
      </div>
    </Reveal>
  );
}

export default HeroCard;
