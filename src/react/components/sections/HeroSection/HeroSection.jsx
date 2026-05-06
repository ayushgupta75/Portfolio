import SectionHeader from '../../common/SectionHeader/SectionHeader';
import commonStyles from '../../CommonStyles.module.css';
import { heroData } from '../../../../data/hero';
import EducationCard from '../../features/EducationCard/EducationCard';
import GridAutoCols from '../../common/GridAutoCols/GridAutoCols';
import styles from './HeroSection.module.scss';
import HeroCopy from '../../features/HeroCopy/HeroCopy';
import HeroCard from '../../features/HeroCard/HeroCard';

function HeroSection({ ...props }) {
  // TODO add reveal animation

  return (
    <section className={styles['hero-section']} {...props}>
      <HeroCopy hero={heroData} />
      <HeroCard hero={heroData} />
    </section>
  );
}

export default HeroSection;
