import { parseMarkdownHeadingId } from '@docusaurus/utils';
import { visit } from 'unist-util-visit';

function visitor(node) {
  const data = node.data || (node.data = {});
  const children = node['children'];
  const lastChild = children[children.length - 1];  // The heading ID is always the last child
  const heading = lastChild['value'];
  const parsedHeading = parseMarkdownHeadingId(heading);
  if (parsedHeading.id !== undefined) {
    data.id = parsedHeading.id;
  }
}

function transformer(tree) {
  visit(tree, 'heading', visitor);
}

export default function customHeadingId() {
  return transformer;
}
