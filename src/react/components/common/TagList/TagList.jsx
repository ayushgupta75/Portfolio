import styles from './TagList.module.css';

export function TagList({ tags, ...props }) {
  return (
    <ul className={styles['tag-list']} {...props}>
      {tags.map((tag) => (
        <TagItem key={tag}>{tag}</TagItem>
      ))}
    </ul>
  );
}

export function TagItem({ children, ...props }) {
  return (
    <li {...props} className={styles['tag-item']}>
      {children}
    </li>
  );
}
