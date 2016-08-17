import * as React from 'react';
import {toArray} from 'tarry';

function isText(node: Node): node is Text {
  return node.nodeType === Node.TEXT_NODE;
}
function isElement(node: Node): node is Element {
  return node.nodeType === Node.ELEMENT_NODE;
}
function isAttr(node: Node): node is Attr {
  return node.nodeType === Node.ATTRIBUTE_NODE;
}
function isCDATASection(node: Node): node is CDATASection {
  return node.nodeType === Node.CDATA_SECTION_NODE;
}

function isIncluded(node: Node, exclude: string[]): boolean {
  if (isElement(node)) {
    return exclude.indexOf(node.tagName) === -1;
  }
  if (isAttr(node)) {
    return exclude.indexOf(node.name) === -1;
  }
  return true;
}

const XMLTreeAttribute = ({name, value}: {name: string, value: string}) => (
  <span className="attribute">{' '}
    <span className="name">{name}</span>{'='}<span className="value">{'"'}{value}{'"'}</span>
  </span>
);
const XMLTreeNode = ({node, exclude}: {node: Node, exclude: string[]}) => {
  if (isText(node)) {
    return <div className="text">{node.data}</div>;
  }
  else if (isElement(node)) {
    var tagName = node.tagName;
    return (
      <div className="element">
        <span className="start">
          {'<'}{tagName}
          {toArray(node.attributes).filter(attr => isIncluded(attr, exclude)).map(({name, value}, i) =>
            <XMLTreeAttribute key={i} name={name} value={value} />
          )}
          {'>'}
        </span>
        <XMLTreeContainer nodes={node.childNodes} exclude={exclude} />
        <span className="end">{'</'}{tagName}{'>'}</span>
      </div>
    );
  }
  else if (isCDATASection(node)) {
    return <div className="cdata">{'<![CDATA['}{node.data}{']]>'}</div>;
  }
  else {
    return <span>(Ignoring node type = {node.nodeType})</span>;
  }
};
const XMLTreeContainer = ({nodes, exclude = []}: {nodes: NodeList, exclude: string[]}) => (
  <span>{toArray(nodes).filter(node => isIncluded(node, exclude)).map((node, i) =>
    <XMLTreeNode key={i} node={node} exclude={exclude} />
  )}</span>
);

export interface XMLTreeProps {
  xml: string;
  exclude?: string[];
}
export interface XMLTreeState {
  document: Document;
  exclude: string[];
}
export class XMLTree extends React.Component<XMLTreeProps, XMLTreeState> {
  constructor(props) {
    super(props);
    this.state = {
      exclude: props.exclude || [],
      document: new DOMParser().parseFromString(props.xml, 'application/xml'),
    };
  }
  render() {
    return <XMLTreeContainer nodes={this.state.document.childNodes} exclude={this.state.exclude} />;
  }
}
