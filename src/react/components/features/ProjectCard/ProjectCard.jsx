import styles from './ProjectCard.module.css';
import commonStyles from '../../CommonStyles.module.css';
import { TagItem, TagList } from '../../common/TagList/TagList';
import { Reveal } from '../../common/Reveal/Reveal';

function ProjectCard({ project, ...props }) {
  const className = `${commonStyles.container} ${styles['project-card']}`;

  return (
    <Reveal as="article" {...props} className={className}>
      <p className={commonStyles.paragraph}>{project.index}</p>

      <h3>{project.title}</h3>

      <p className={commonStyles.paragraph}>{project.description}</p>

      <TagList tags={project.tags} />
    </Reveal>
  );
}

export default ProjectCard;
