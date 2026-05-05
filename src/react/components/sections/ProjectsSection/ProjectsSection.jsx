import GridAutoCols from '../../common/GridAutoCols/GridAutoCols';
import { projectsData } from '../../../../data/projects';
import ProjectCard from '../../features/ProjectCard/ProjectCard';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import commonStyles from '../../CommonStyles.module.css';
import SectionHeader from '../../common/SectionHeader/SectionHeader';

function ProjectsSection({ ...props }) {
  // TODO add reveal animation

  return (
    <section {...props}>
      <SectionHeader
        eyebrow={projectsData.eyebrow}
        title={projectsData.title}
      />

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
