import styles from './ContactCard.module.css';
import commonStyles from '../../CommonStyles.module.css';
import Link from '../../common/Link/Link';

function ContactCard({ summary, links, ...props }) {
  const className = `${commonStyles.container} ${styles['contact-card']}`;

  return (
    <article {...props} className={className}>
      <p className={commonStyles.paragraph}>{summary}</p>

      <ul
        className={`${commonStyles['flex-container-row']} ${styles['contact-list']}`}
      >
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            isContact
            external={link?.external}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </article>
  );
}

export default ContactCard;
