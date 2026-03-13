import { renderButton } from "../common/Button.js";

export const renderHeroSection = (hero) => `
  <section class="hero reveal">
    <div class="hero-copy">
      <p class="eyebrow">${hero.eyebrow}</p>
      <h1>${hero.title}</h1>
      <div class="hero-actions">
        ${hero.actions.map(renderButton).join("")}
      </div>
    </div>

    <aside class="hero-card reveal">
      <p class="card-label">${hero.snapshot.label}</p>
      <ul class="focus-list">
        ${hero.snapshot.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <div class="availability-pill">
        <span class="status-dot"></span>
        ${hero.snapshot.availability}
      </div>
    </aside>
  </section>
`;
