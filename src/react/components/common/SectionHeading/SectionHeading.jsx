import styles from './SectionHeading.module.css';

function SectionHeading({ children, compact, ...props }) {
  return (
    <div
      className={
        styles['section-heading'] + (compact ? ' ' + styles.compact : '')
      }
      {...props}
    >
      <h2>{children}</h2>
    </div>
  );
}

export default SectionHeading;
