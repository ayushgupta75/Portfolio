import styles from './Link.module.css';

function Link({ children, external, ...props }) {
  const externalAttributes = external
    ? { target: '_blank', rel: 'noreferrer' }
    : {};

  return (
    <a className={styles.link} {...props} {...externalAttributes}>
      {children}
    </a>
  );
}

export default Link;
