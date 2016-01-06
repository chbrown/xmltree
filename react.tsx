import * as React from 'react';
import {toArray} from 'tarry';

function isIncluded(node: Node, exclude: string[]): boolean {
  if (node.nodeType == Node.ELEMENT_NODE) {
    return exclude.indexOf((node as Element).tagName) === -1;
  }
  if (node.nodeType == Node.ATTRIBUTE_NODE) {
    return exclude.indexOf((node as Attr).name) === -1;
  }
  return true;
}

const XMLTreeAttribute = ({name, value}: {name: string, value: string}) => (
  <span className="attribute">{' '}
    <span className="name">{name}</span>{'='}<span className="value">{'"'}{value}{'"'}</span>
  </span>
);
const XMLTreeNode = ({node, exclude}: {node: Node, exclude: string[]}) => {
  if (node.nodeType == Node.TEXT_NODE) {
    var text = node as Text;
    return <div className="text">{text.data}</div>;
  }
  else if (node.nodeType == Node.ELEMENT_NODE) {
    var element = node as Element;
    var tagName = element.tagName;
    return (
      <div className="element">
        <span className="start">
          {'<'}{tagName}
          {toArray(element.attributes).filter(node => isIncluded(node, exclude)).map(({name, value}, i) =>
            <XMLTreeAttribute key={i} name={name} value={value} />
          )}
          {'>'}
        </span>
        <XMLTreeContainer nodes={node.childNodes} exclude={exclude} />
        <span className="end">{'</'}{tagName}{'>'}</span>
      </div>
    );
  }
  else if (node.nodeType == Node.CDATA_SECTION_NODE) {
    let cdata = node as CDATASection;
    return <div className="cdata">{'<![CDATA['}{cdata.data}{']]>'}</div>;
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
export class XMLTree extends React.Component<XMLTreeProps, {document: Document, exclude: string[]}> {
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
