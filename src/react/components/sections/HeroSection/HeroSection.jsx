import { heroData } from '../../../../data/hero';
import EducationCard from '../../features/EducationCard/EducationCard';
import styles from './HeroSection.module.scss';
import HeroCopy from '../../features/HeroCopy/HeroCopy';
import HeroCard from '../../features/HeroCard/HeroCard';
import { Reveal } from '../../common/Reveal/Reveal';

function HeroSection({ ...props }) {
  return (
    <Reveal as="section" className={styles['hero-section']} {...props}>
      <HeroCopy hero={heroData} />
      <HeroCard hero={heroData} />
    </Reveal>
  );
}

export default HeroSection;
