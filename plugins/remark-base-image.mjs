import { visit } from 'unist-util-visit';

export default function remarkBaseImages(options) {
  const base = options.base ?? '/';

  return (tree) => {
    visit(tree, 'image', (node) => {
      if (node.url.startsWith('/')) {
        node.url = base.replace(/\/$/, '') + node.url;
      }
    });
  };
}