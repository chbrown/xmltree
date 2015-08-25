var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="type_declarations/DefinitelyTyped/react/react.d.ts" />
var React = require('react');
var XMLTree = (function (_super) {
    __extends(XMLTree, _super);
    function XMLTree(props) {
        _super.call(this, props);
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
    XMLTree.prototype.isIncluded = function (name) {
        return this.state.exclude.indexOf(name) === -1;
    };
    XMLTree.prototype.renderAttributes = function (attributes) {
        var elements = [];
        for (var i = 0, attribute; (attribute = attributes[i]); i++) {
            if (this.isIncluded(attribute.name)) {
                elements.push(this.renderAttribute(attribute));
            }
        }
        return elements;
    };
    XMLTree.prototype.renderAttribute = function (attribute) {
        return (React.createElement("span", {"className": "attribute"}, ' ', React.createElement("span", {"className": "name"}, attribute.name), '=', React.createElement("span", {"className": "value"}, '"', attribute.value, '"')));
    };
    XMLTree.prototype.renderNodes = function (nodes) {
        var children = [];
        for (var i = 0, node; (node = nodes[i]) !== undefined; i++) {
            var included = (node.nodeType === Node.ELEMENT_NODE) ? this.isIncluded(node.tagName) : true;
            if (included) {
                children.push(this.renderNode(node));
            }
        }
        return children;
    };
    XMLTree.prototype.renderNode = function (node) {
        if (node.nodeType == Node.TEXT_NODE) {
            var text = node;
            return React.createElement("div", {"className": "text"}, text.data);
        }
        else if (node.nodeType == Node.ELEMENT_NODE) {
            var element = node;
            var tagName = element.tagName;
            var startTagElements = ['<', tagName].concat(this.renderAttributes(element.attributes), ['>']);
            return (React.createElement("div", {"className": "element"}, React.createElement("span", {"className": "start"}, startTagElements), this.renderNodes(node.childNodes), React.createElement("span", {"className": "end"}, '</', tagName, '>')));
        }
        else {
            return React.createElement("span", null, "(Ignoring node type = ", node.nodeType, ")");
        }
    };
    XMLTree.prototype.render = function () {
        var children = this.renderNodes(this.state.document.childNodes);
        return React.createElement("div", {"className": "xmltree"}, children);
    };
    return XMLTree;
})(React.Component);
exports.XMLTree = XMLTree;
