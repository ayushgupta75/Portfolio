import SectionHeader from '../../common/SectionHeader/SectionHeader';
import commonStyles from '../../CommonStyles.module.css';
import { educationData } from '../../../../data/education';
import EducationCard from '../../features/EducationCard/EducationCard';
import GridAutoCols from '../../common/GridAutoCols/GridAutoCols';
import styles from './EducationSection.module.css';
import { Reveal } from '../../common/Reveal/Reveal';

function EducationSection({ ...props }) {
  return (
    <Reveal as="section" {...props}>
      <GridAutoCols min={'0.5fr'} max={'1fr'} fitOrFill="fill">
        <div>
          <SectionHeader
            eyebrow={educationData.eyebrow}
            title={educationData.title}
          />
        </div>

        <div className={styles['education-list']}>
          {educationData.items.map((education) => (
            <EducationCard
              key={`${education.college}-${education.degree}`}
              education={education}
            />
          ))}
        </div>
      </GridAutoCols>
    </Reveal>
  );
}

export default EducationSection;
