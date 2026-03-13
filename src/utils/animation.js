export const initRevealAnimations = (selector) => {
  const revealNodes = document.querySelectorAll(selector);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    revealNodes.forEach((node) => observer.observe(node));
    return;
  }

  revealNodes.forEach((node) => node.classList.add("is-visible"));
};
