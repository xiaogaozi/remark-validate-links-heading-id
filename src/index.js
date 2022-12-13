import { parseMarkdownHeadingId } from '@docusaurus/utils';
import { visit } from 'unist-util-visit';

function visitor(node) {
  const data = node.data || (node.data = {});
  const heading = node['children'][0]['value'];
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
