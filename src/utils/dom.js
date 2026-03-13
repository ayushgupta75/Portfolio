export const setHTML = (selector, markup) => {
  const node = document.querySelector(selector);

  if (node) {
    node.innerHTML = markup;
  }
};

export const setText = (selector, value) => {
  const node = document.querySelector(selector);

  if (node) {
    node.textContent = value;
  }
};
