import { navigationData } from "./navigation.js";
import { heroData } from "./hero.js";
import { highlightsData } from "./highlights.js";
import { aboutData } from "./about.js";
import { experienceData } from "./experience.js";
import { educationData } from "./education.js";
import { projectsData } from "./projects.js";
import { contactData } from "./contact.js";

export const portfolioPage = {
  owner: "Ayush Gupta",
  navigation: navigationData,
  page: {
    hero: heroData,
    // highlights: highlightsData,
    about: aboutData,
    experience: experienceData,
    education: educationData,
    projects: projectsData,
    contact: contactData,
  },
};
