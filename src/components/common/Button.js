export const renderButton = ({ href, label, variant = "primary" }) =>
  `<a class="button button-${variant}" href="${href}">${label}</a>`;
