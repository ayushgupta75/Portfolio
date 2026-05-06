import styles from './PageShell.module.css';

function PageShell({ children }) {
  const className = `${styles['page-shell']}`;

  return <div className={className}>{children}</div>;
}

export default PageShell;
