import commonStyles from '../../CommonStyles.module.css';
import styles from './ExperienceCard.module.scss';

function ExperienceCard({ experience, ...props }) {
  const className = `${commonStyles.container} ${styles['experience-card']}`;

  return (
    <article className={className} {...props}>
      <ExperienceCardHeader
        company={experience.company}
        role={experience.role}
        duration={experience.duration}
      />

      <ExperienceCardDetails details={experience.details} />
    </article>
  );
}

function ExperienceCardHeader({ company, role, duration }) {
  return (
    <div className={styles['experience-card-header']}>
      <div className={styles['experience-title-block']}>
        <h3>{company}</h3>

        <p className={styles['experience-role']}>{role}</p>
      </div>

      <div>
        <span className={styles['experience-duration']}>{duration}</span>
      </div>
    </div>
  );
}

function ExperienceCardDetails({ details }) {
  if (Array.isArray(details)) {
    return (
      <ul className={styles['experience-details-list']}>
        {details.map((item, index) => (
          <li key={index} className={styles['experience-details-item']}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return <p className={styles['experience-details']}>{details}</p>;
}

export default ExperienceCard;
