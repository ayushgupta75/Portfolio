import Link from '../../common/Link/Link';

import commonStyles from '../../CommonStyles.module.css';

import { navigationData } from '../../../../data/navigation';

function Navigation({ ...props }) {
  return (
    <nav className={commonStyles['flex-container-row']} {...props}>
      {navigationData.map((item) => (
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
