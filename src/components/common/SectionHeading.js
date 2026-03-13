export const renderSectionHeading = ({ eyebrow, title, compact = false }) =>
  `<div class="section-heading${compact ? " compact" : ""}">
    <h2>${title}</h2>
  </div>`;
