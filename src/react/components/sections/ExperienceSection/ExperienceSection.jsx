import SectionHeader from '../../common/SectionHeader/SectionHeader';
import commonStyles from '../../CommonStyles.module.css';
import { experienceData } from '../../../../data/experience';
import ExperienceCard from '../../features/ExperienceCard/ExperienceCard';
import GridAutoCols from '../../common/GridAutoCols/GridAutoCols';
import styles from './ExperienceSection.module.css';
import { Reveal } from '../../common/Reveal/Reveal';

function ExperienceSection({ ...props }) {
  return (
    <Reveal as="section" {...props}>
      <GridAutoCols min={'0.5fr'} max={'1fr'} fitOrFill="fill">
        <div>
          <SectionHeader
            eyebrow={experienceData.eyebrow}
            title={experienceData.title}
          />
        </div>

        <div className={styles['experience-list']}>
          {experienceData.items.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
            />
          ))}
        </div>
      </GridAutoCols>
    </Reveal>
  );
}

export default ExperienceSection;
