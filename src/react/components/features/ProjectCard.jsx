import styles from './ProjectCard.module.css';
import commonStyles from '../CommonStyles.module.css';
import { TagItem, TagList } from '../common/TagList/TagList';

const mockProject = {
  index: '01',
  title: 'LeadFlow AI',
  description:
    'Build an LLM-powered stateful MultiAgent workflow using LangChain and LangGraph to orchestrate lead intake, scoring, next-best-action recommendation, reminder scheduling, and CRM-style status updates.',
  tags: ['React', 'FastAPI', 'PostgreSQL'],
  link: {
    href: '#',
    label: 'Live Demo',
    ariaLabel: 'Open Signal Commerce Dashboard case study',
  },
};

function ProjectCard({ project, ...props }) {
  // TODO add reveal animation
  const className = `${commonStyles.container} ${styles['project-card']}`;

  return (
    <article {...props} className={className}>
      <p className={commonStyles.paragraph}>{mockProject.index}</p>

      <h3>{mockProject.title}</h3>

      <p className={commonStyles.paragraph}>{mockProject.description}</p>

      <TagList tags={mockProject.tags} />
    </article>
  );
}

export default ProjectCard;
