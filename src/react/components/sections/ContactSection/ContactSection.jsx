import GridAutoCols from '../../common/GridAutoCols/GridAutoCols';
import ProjectCard from '../../features/ProjectCard/ProjectCard';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import commonStyles from '../../CommonStyles.module.css';
import { contactData } from '../../../../data/contact';

function ContactSection({ ...props }) {
  // TODO add reveal animation

  return (
    <section {...props}>
      <SectionHeader eyebrow={contactData.eyebrow} title={contactData.title} />
    </section>
  );
}

export default ContactSection;
