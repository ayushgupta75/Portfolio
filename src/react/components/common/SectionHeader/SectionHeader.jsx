import commonStyles from '../../CommonStyles.module.css';
import SectionHeading from '../SectionHeading/SectionHeading';

function SectionHeader({ eyebrow, title, ...props }) {
  return (
    <>
      <p className={commonStyles.eyebrow}>{eyebrow}</p>

      <SectionHeading>{title}</SectionHeading>
    </>
  );
}

export default SectionHeader;
