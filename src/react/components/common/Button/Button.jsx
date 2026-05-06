import Link from '../Link/Link';
import styles from './Button.module.css';

function Button({ children, ...props }) {
  return (
    <Link className={styles.button} {...props}>
      {children}
    </Link>
  );
}

export default Button;
