import { renderLink } from "../common/Link.js";

export const renderProjectsSection = (projects) => `
  <section class="section-heading reveal" id="${projects.id}">
    <p class="eyebrow">${projects.eyebrow}</p>
    <h2>${projects.title}</h2>
  </section>

  <section class="projects-grid">
    ${projects.items
      .map(
        (project) => `
          <article class="project-card reveal">
            <p class="project-index">${project.index}</p>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <ul class="tag-list">
              ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
            </ul>
            ${renderLink(project.link)}
          </article>
        `
      )
      .join("")}
  </section>
`;
