import styles from './PageShell.module.css';

function PageShell({ children }) {
  return <div className={styles['page-shell']}>{children}</div>;
}

export default PageShell;
