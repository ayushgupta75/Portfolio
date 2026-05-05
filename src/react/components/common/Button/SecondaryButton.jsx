import Button from './Button';
import styles from './Button.module.css';

function SecondaryButton({ children, ...props }) {
  return (
    <Button
      {...props}
      className={styles.button + ' ' + styles['button-secondary']}
    >
      {children}
    </Button>
  );
}

export default SecondaryButton;
