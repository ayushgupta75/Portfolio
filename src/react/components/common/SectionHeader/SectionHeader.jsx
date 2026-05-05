import commonStyles from '../../CommonStyles.module.css';
import SectionHeading from '../SectionHeading/SectionHeading';

function SectionHeader({ eyebrow, title, compact = false, ...props }) {
  // TODO implement compact style
  return (
    <>
      {eyebrow && <p className={commonStyles.eyebrow}>{eyebrow}</p>}

      <SectionHeading compact={compact}>{title}</SectionHeading>
    </>
  );
}

export default SectionHeader;
