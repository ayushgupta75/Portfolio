import GridAutoCols from '../../common/GridAutoCols/GridAutoCols';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import commonStyles from '../../CommonStyles.module.css';
import { contactData } from '../../../../data/contact';
import ContactCard from '../../features/ContactCard/ContactCard';
import styles from './ContactSection.module.scss';
import { Reveal } from '../../common/Reveal/Reveal';

function ContactSection({ ...props }) {
  return (
    <Reveal as="section" className={styles['contact-section']} {...props}>
      <div>
        <SectionHeader
          eyebrow={contactData.eyebrow}
          title={contactData.title}
        />
      </div>

      <ContactCard summary={contactData.summary} links={contactData.links} />
    </Reveal>
  );
}

export default ContactSection;
