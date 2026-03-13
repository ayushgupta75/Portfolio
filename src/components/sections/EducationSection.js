import { renderSectionHeading } from "../common/SectionHeading.js";

const renderEducationCard = ({ college, major, degree, duration, details }) => `
  <article class="education-card reveal">
    <div class="education-card-header">
      <div class="education-timeline">
        <span class="education-meta">${duration}</span>
        <p class="education-label">${degree}</p>
      </div>
      <div class="education-title-block">
        <h3>${college}</h3>
        <p class="education-major">${major}</p>
        <p>${details}</p>
      </div>
    </div>
  </article>
`;

export const renderEducationSection = (section) => `
  <section class="education-section reveal" id="${section.id}">
    ${renderSectionHeading({
      eyebrow: section.eyebrow,
      title: section.title,
      compact: true,
    })}
    <div class="education-list">
      ${section.items.map(renderEducationCard).join("")}
    </div>
  </section>
`;
