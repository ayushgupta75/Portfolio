import commonStyles from '../../CommonStyles.module.css';
import styles from './HeroCopy.module.css';

import PrimaryButton from '../../common/Button/PrimaryButton';
import SecondaryButton from '../../common/Button/SecondaryButton';

function HeroCopy({ hero, ...props }) {
  return (
    <div className={styles['hero-copy']} {...props}>
      <p className={commonStyles.eyebrow}>{hero.eyebrow}</p>

      <h1>{hero.title}</h1>

      <div className={commonStyles['flex-container-row']}>
        {hero.actions.map((action, index) => {
          const ButtonVariant =
            action.variant === 'primary' ? PrimaryButton : SecondaryButton;

          return (
            <ButtonVariant key={index} href={action.href}>
              {action.label}
            </ButtonVariant>
          );
        })}
      </div>
    </div>
  );
}

export default HeroCopy;
