import { renderSectionHeading } from "../common/SectionHeading.js";

export const renderAboutSection = (about) => `
  <section class="about-section reveal" id="${about.id}">
    ${renderSectionHeading({
      eyebrow: about.eyebrow,
      title: about.title,
      compact: true,
    })}
    <div class="about-grid">
      ${about.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
  </section>
`;
