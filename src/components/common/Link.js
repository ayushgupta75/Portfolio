const externalAttributes = (external) =>
  external ? ' target="_blank" rel="noreferrer"' : "";

export const renderLink = ({ href, label, external = false, ariaLabel }) =>
  `<a href="${href}"${externalAttributes(external)}${
    ariaLabel ? ` aria-label="${ariaLabel}"` : ""
  }>${label}</a>`;
