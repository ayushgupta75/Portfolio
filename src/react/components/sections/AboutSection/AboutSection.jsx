import commonStyles from '../../CommonStyles.module.css';
import { aboutData } from '../../../../data/about';
import AboutCard from '../../features/AboutCard/AboutCard';

function AboutSection({ ...props }) {
  // TODO add reveal animation

  return (
    <section {...props}>
      <AboutCard about={aboutData} />
    </section>
  );
}

export default AboutSection;
