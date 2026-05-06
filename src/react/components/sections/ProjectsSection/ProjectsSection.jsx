import styles from './ProjectsSection.module.scss';

import { projectsData } from '../../../../data/projects';
import ProjectCard from '../../features/ProjectCard/ProjectCard';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import SectionHeader from '../../common/SectionHeader/SectionHeader';

function ProjectsSection({ ...props }) {
  // TODO add reveal animation

  return (
    <section {...props}>
      <SectionHeader
        eyebrow={projectsData.eyebrow}
        title={projectsData.title}
      />

      <div className={`${styles['projects-grid']}`}>
        {projectsData.items.map((project) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
