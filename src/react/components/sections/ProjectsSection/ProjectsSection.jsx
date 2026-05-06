import styles from './ProjectsSection.module.scss';

import { projectsData } from '../../../../data/projects';
import ProjectCard from '../../features/ProjectCard/ProjectCard';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { Reveal } from '../../common/Reveal/Reveal';

function ProjectsSection({ ...props }) {
  return (
    <Reveal id="projects" as="section" {...props}>
      <SectionHeader
        eyebrow={projectsData.eyebrow}
        title={projectsData.title}
      />

      <div className={`${styles['projects-grid']}`}>
        {projectsData.items.map((project) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </div>
    </Reveal>
  );
}

export default ProjectsSection;
