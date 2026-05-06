import { Reveal } from '../../common/Reveal/Reveal';
import commonStyles from '../../CommonStyles.module.css';
import styles from './EducationCard.module.scss';

function EducationCard({ education, ...props }) {
  const className = `${commonStyles.container} ${styles['education-card']}`;

  return (
    <Reveal as="article" {...props} className={className}>
      <EducationTimeline
        duration={education.duration}
        degree={education.degree}
      />
      <EducationTitleBlock
        college={education.college}
        major={education.major}
      />
    </Reveal>
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
