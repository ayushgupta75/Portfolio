import { renderLink } from "../common/Link.js";

export const renderContactSection = (contact) => `
  <section class="contact-section reveal" id="${contact.id}">
    <div>
      <p class="eyebrow">${contact.eyebrow}</p>
      <h2>${contact.title}</h2>
    </div>
    <div class="contact-card">
      <p>${contact.summary}</p>
      <div class="contact-links">
        ${contact.links.map(renderLink).join("")}
      </div>
    </div>
  </section>
`;
