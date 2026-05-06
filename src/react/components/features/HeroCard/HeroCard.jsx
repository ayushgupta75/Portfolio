import commonStyles from '../../CommonStyles.module.css';
import styles from './HeroCard.module.css';

function HeroCard({ hero, ...props }) {
  return (
    <aside className={commonStyles.container} {...props}>
      <p className={commonStyles.paragraph}>Snapshot</p>

      <ul className={styles['focus-list']}>
        {hero.snapshot.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className={styles['availability-pill']}>
        <span className={styles['status-dot']}></span>
        {hero.snapshot.availability}
      </div>
    </aside>
  );
}

export default HeroCard;
