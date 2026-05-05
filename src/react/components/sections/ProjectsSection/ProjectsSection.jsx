import GridAutoCols from '../../common/GridAutoCols/GridAutoCols';
import { projectsData } from '../../../../data/projects';
import ProjectCard from '../../features/ProjectCard/ProjectCard';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import commonStyles from '../../CommonStyles.module.css';

function ProjectsSection({ ...props }) {
  // TODO add reveal animation

  return (
    <section {...props}>
      <p className={commonStyles.eyebrow}>{projectsData.eyebrow}</p>

      <SectionHeading>{projectsData.title}</SectionHeading>

      <GridAutoCols
        min={'20rem'}
        max={'1fr'}
        fitOrFill="fill"
        style={{ gap: '1rem', marginBottom: '5rem' }}
      >
        {projectsData.items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </GridAutoCols>
    </section>
  );
}

export default ProjectsSection;
