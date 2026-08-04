import { visit } from 'unist-util-visit';

// Root-relative src/href values in markdown content are written without the
// repo's GitHub Pages subpath (e.g. "/headshot.png"), since content shouldn't
// need to know the deployed base path. This rewrites them at build time to
// include astro.config.mjs's `base`. Runs as a remark (not rehype) plugin so
// it sees raw inline HTML (mdast "html" nodes) before Astro's markdown
// pipeline re-parses them into hast elements.
export default function remarkBaseUrl(base) {
  const prefix = base.endsWith('/') ? base : `${base}/`;
  const rootRelative = (url) => typeof url === 'string' && url.startsWith('/') && !url.startsWith('//');

  return (tree) => {
    visit(tree, (node) => {
      if ((node.type === 'image' || node.type === 'link') && rootRelative(node.url)) {
        node.url = prefix + node.url.slice(1);
      }
      if (node.type === 'html' && typeof node.value === 'string') {
        node.value = node.value.replace(/((?:src|href)=["'])\/(?!\/)/g, `$1${prefix}`);
      }
    });
  };
}
