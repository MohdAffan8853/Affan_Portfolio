const URL_WITH_PROTOCOL_PATTERN = /^[a-z][a-z\d+\-.]*:/i;

export function isPlaceholderUrl(href) {
  const value = String(href ?? "").trim();

  return !value || value === "#";
}

export function normalizeExternalUrl(href) {
  const value = String(href ?? "").trim();

  if (isPlaceholderUrl(value)) {
    return "#";
  }

  if (value.startsWith("/") || value.startsWith("#") || URL_WITH_PROTOCOL_PATTERN.test(value)) {
    return value;
  }

  return `https://${value}`;
}

export function getLinkProps(href) {
  const normalizedHref = normalizeExternalUrl(href);
  const isExternal = /^https?:\/\//i.test(normalizedHref);

  return {
    href: normalizedHref,
    ...(isExternal ? { target: "_blank", rel: "noreferrer" } : {}),
  };
}
