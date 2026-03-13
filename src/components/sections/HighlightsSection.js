export const renderHighlightsSection = (highlights) => `
  <section class="metrics reveal" aria-label="Highlights">
    ${highlights
      .map(
        ({ title, description }) => `
          <article>
            <span class="metric-value">${title}</span>
            <p>${description}</p>
          </article>
        `
      )
      .join("")}
  </section>
`;
