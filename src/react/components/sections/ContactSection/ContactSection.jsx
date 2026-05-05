import GridAutoCols from '../../common/GridAutoCols/GridAutoCols';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import commonStyles from '../../CommonStyles.module.css';
import { contactData } from '../../../../data/contact';
import ContactCard from '../../features/ContactCard/ContactCard';

function ContactSection({ ...props }) {
  // TODO add reveal animation

  return (
    <section {...props}>
      <SectionHeader eyebrow={contactData.eyebrow} title={contactData.title} />
      <ContactCard summary={contactData.summary} links={contactData.links} />
    </section>
  );
}

export default ContactSection;
