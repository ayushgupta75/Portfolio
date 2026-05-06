import Link from '../../common/Link/Link';
import styles from './Footer.module.scss';
import commonStyles from '../../CommonStyles.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles['site-footer']}>
      <p>© {currentYear} Ayush Gupta</p>

      <Link className={commonStyles['muted-text']} href="#top">
        Back to top
      </Link>
    </footer>
  );
}

export default Footer;
