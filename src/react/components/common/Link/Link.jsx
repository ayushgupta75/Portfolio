import styles from './Link.module.css';

function Link({ children, external, isContact, ...props }) {
  const externalAttributes = external
    ? { target: '_blank', rel: 'noreferrer' }
    : {};

  const linkStyle = isContact
    ? `${styles.link} ${styles['contact-link']}`
    : styles.link;

  const className = `${props.className ? props.className + ' ' : ''}${linkStyle}`;

  return (
    <a {...props} className={className} {...externalAttributes}>
      {children}
    </a>
  );
}

export default Link;
