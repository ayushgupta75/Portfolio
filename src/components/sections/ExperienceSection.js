import { renderSectionHeading } from "../common/SectionHeading.js";

const renderExperienceCard = ({ company, role, duration, details }) => `
  <article class="experience-card reveal">
    <div class="experience-card-header">
      <div class="experience-title-block">
        <h3>${company}</h3>
        <p class="experience-role">${role}</p>
      </div>
      <div class="experience-meta-block">
        <span class="experience-duration">${duration}</span>
      </div>
    </div>
    <p class="experience-details">${details}</p>
  </article>
`;

export const renderExperienceSection = (section) => `
  <section class="experience-section reveal" id="${section.id}">
    ${renderSectionHeading({
      eyebrow: section.eyebrow,
      title: section.title,
      compact: true,
    })}
    <div class="experience-list">
      ${section.items.map(renderExperienceCard).join("")}
    </div>
  </section>
`;
