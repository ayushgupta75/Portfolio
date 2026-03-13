import { renderNavigation } from "../components/layout/Navigation.js";
import { renderHomePage } from "../components/pages/HomePage.js";
import { setHTML, setText } from "../utils/dom.js";
import { initRevealAnimations } from "../utils/animation.js";

export const bootPortfolio = ({ navigation, page, owner }) => {
  setHTML("#site-nav", renderNavigation(navigation));
  setHTML(".site-main", renderHomePage(page));
  setText("#year", String(new Date().getFullYear()));
  initRevealAnimations(".reveal");

  document.title = `${owner} | Portfolio`;
};
