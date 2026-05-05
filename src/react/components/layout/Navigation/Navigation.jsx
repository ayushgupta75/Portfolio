import Link from '../../common/Link/Link';

import commonStyles from '../../CommonStyles.module.css';

function Navigation({ items, ...props }) {
  return (
    <nav className={commonStyles['flex-container-row']} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={commonStyles['muted-text']}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
