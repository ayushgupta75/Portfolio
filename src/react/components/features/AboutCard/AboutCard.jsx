import commonStyles from '../../CommonStyles.module.css';
import styles from './AboutCard.module.scss';

import { aboutData } from '../../../../data/about';
import SectionHeader from '../../common/SectionHeader/SectionHeader';

function AboutCard({ about, ...props }) {
  const className = `${commonStyles.container} ${styles['about-card']}`;

  return (
    <div className={className} {...props}>
      <SectionHeader
        //eyebrow={aboutData.eyebrow} // Not used in original code
        title={about.title}
        compact
      />

      <div className={`${styles['about-text']} ${commonStyles['paragraph']}`}>
        {about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default AboutCard;
