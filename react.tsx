/// <reference path="type_declarations/DefinitelyTyped/react/react.d.ts" />
import React = require('react');

interface XMLTreeProps {
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

  /**
  Check the given name against the XMLTree's `exclude` blacklist.
  Return false for element nodes which have a blacklisted tag name.
  Return true if the name is allowed (does not occur in the blacklist).
  */
  protected isIncluded(name: string): boolean {
    return this.state.exclude.indexOf(name) === -1;
  }

  protected renderAttributes(attributes: NamedNodeMap): React.ReactChild[] {
    var elements = [];
    for (var i = 0, attribute: Attr; (attribute = attributes[i]); i++) {
      if (this.isIncluded(attribute.name)) {
        elements.push(this.renderAttribute(attribute));
      }
    }
    return elements;
  }

  protected renderAttribute(attribute: Attr): React.ReactChild {
    return (
      <span className="attribute">{' '}
        <span className="name">{attribute.name}</span>{'='}<span className="value">{'"'}{attribute.value}{'"'}</span>
      </span>
    );
  }

  protected renderNodes(nodes: NodeList): React.ReactChild[] {
    var children: React.ReactChild[] = [];
    for (var i = 0, node: Node; (node = nodes[i]) !== undefined; i++) {
      var included = (node.nodeType === Node.ELEMENT_NODE) ? this.isIncluded((node as Element).tagName) : true;
      if (included) {
        children.push(this.renderNode(node));
      }
    }
    return children;
  }

  protected renderNode(node: Node): React.ReactChild {
    if (node.nodeType == Node.TEXT_NODE) {
      var text = node as Text;
      return <div className="text">{text.data}</div>;
    }
    else if (node.nodeType == Node.ELEMENT_NODE) {
      var element = node as Element;
      var tagName = element.tagName;
      var startTagElements: React.ReactChild[] = ['<', tagName, ...this.renderAttributes(element.attributes), '>'];
      return (
        <div className="element">
          <span className="start">{startTagElements}</span>
            {this.renderNodes(node.childNodes)}
          <span className="end">{'</'}{tagName}{'>'}</span>
        </div>
      );
    }
    else {
      return <span>(Ignoring node type = {node.nodeType})</span>;
    }
  }

  render() {
    var children = this.renderNodes(this.state.document.childNodes);
    return <div className="xmltree">{children}</div>;
  }
}
