import { useReveal } from './useReveal';

import styles from './Reveal.module.css';

export function Reveal({
  as: Component = 'div',
  children,
  className = '',
  ...props
}) {
  const { ref, isVisible } = useReveal();

  const combinedClassName = `${styles.reveal} ${isVisible ? styles.revealVisible : ''} ${className}`;

  return (
    <Component ref={ref} className={combinedClassName} {...props}>
      {children}
    </Component>
  );
}
