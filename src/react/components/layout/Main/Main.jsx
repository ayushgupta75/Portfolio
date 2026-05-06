import styles from './Main.module.css';

function Main({ children, ...props }) {
  const className = `${styles.main}`;

  return (
    <main id="top" className={className} {...props}>
      {children}
    </main>
  );
}

export default Main;
