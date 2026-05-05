import styles from './ProjectCard.module.css';
import commonStyles from '../CommonStyles.module.css';
import { TagItem, TagList } from '../common/TagList/TagList';

function ProjectCard({ project, ...props }) {
  // TODO add reveal animation
  const className = `${commonStyles.container} ${styles['project-card']}`;

  return (
    <article {...props} className={className}>
      <p className={commonStyles.paragraph}>{project.index}</p>

      <h3>{project.title}</h3>

      <p className={commonStyles.paragraph}>{project.description}</p>

      <TagList tags={project.tags} />
    </article>
  );
}

export default ProjectCard;
