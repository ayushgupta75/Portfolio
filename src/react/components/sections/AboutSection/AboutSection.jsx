import commonStyles from '../../CommonStyles.module.css';
import { aboutData } from '../../../../data/about';
import AboutCard from '../../features/AboutCard/AboutCard';
import { Reveal } from '../../common/Reveal/Reveal';

function AboutSection({ ...props }) {
  return (
    <Reveal id="about" as="section" {...props}>
      <AboutCard about={aboutData} />
    </Reveal>
  );
}

export default AboutSection;
