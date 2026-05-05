import Button from './Button';
import styles from './Button.module.css';

function PrimaryButton({ children, ...props }) {
  return (
    <Button
      {...props}
      className={styles.button + ' ' + styles['button-primary']}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
