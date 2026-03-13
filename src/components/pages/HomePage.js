import { renderHeroSection } from "../sections/HeroSection.js";
// import { renderHighlightsSection } from "../sections/HighlightsSection.js";
import { renderAboutSection } from "../sections/AboutSection.js";
import { renderExperienceSection } from "../sections/ExperienceSection.js";
import { renderEducationSection } from "../sections/EducationSection.js";
import { renderProjectsSection } from "../sections/ProjectsSection.js";
import { renderContactSection } from "../sections/ContactSection.js";

export const renderHomePage = (page) => `
  ${renderHeroSection(page.hero)}
  ${renderAboutSection(page.about)}
  ${renderExperienceSection(page.experience)}
  ${renderEducationSection(page.education)}
  ${renderProjectsSection(page.projects)}
  ${renderContactSection(page.contact)}
`;
