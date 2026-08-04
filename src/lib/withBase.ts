// Prefixes a root-relative path with the site's configured base path
// (import.meta.env.BASE_URL), so links/assets work under a GitHub Pages
// project subpath (e.g. /apbugs/) as well as at the domain root.
export function withBase(path: string): string {
  if (!path) return path;
  const base = import.meta.env.BASE_URL;
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return prefix + path.replace(/^\//, '');
}
