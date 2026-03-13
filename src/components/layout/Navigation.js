export const renderNavigation = (items) =>
  items.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
