import commonStyles from '../../CommonStyles.module.css';
import styles from './EducationCard.module.scss';

function EducationCard({ education, ...props }) {
  // TODO: Add reveal
  const className = `${commonStyles.container} ${styles['education-card']}`;

  return (
    <article {...props} className={className}>
      <EducationTimeline
        duration={education.duration}
        degree={education.degree}
      />
      <EducationTitleBlock
        college={education.college}
        major={education.major}
      />
    </article>
  );
}

function EducationTimeline({ duration, degree }) {
  return (
    <div className={styles['education-timeline']}>
      <span className={styles['education-meta']}>{duration}</span>
      <p className={styles['education-label']}>{degree}</p>
    </div>
  );
}

function EducationTitleBlock({ college, major }) {
  return (
    <div className={styles['education-title-block']}>
      <h3>{college}</h3>
      <p className={styles['education-major']}>{major}</p>
    </div>
  );
}

export default EducationCard;
