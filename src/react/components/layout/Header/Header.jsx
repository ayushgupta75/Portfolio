import Navigation from '../../layout/Navigation/Navigation';
import styles from './Header.module.scss';

function Header({ ...props }) {
  return (
    <header className={styles['site-header']} {...props}>
      <a className={styles.wordmark} href="#top">
        AYUSH
      </a>

      <Navigation aria-label="Primary" />
    </header>
  );
}

export default Header;
