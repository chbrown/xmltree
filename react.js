"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var tarry_1 = require('tarry');
function isIncluded(node, exclude) {
    if (node.nodeType == Node.ELEMENT_NODE) {
        return exclude.indexOf(node.tagName) === -1;
    }
    if (node.nodeType == Node.ATTRIBUTE_NODE) {
        return exclude.indexOf(node.name) === -1;
    }
    return true;
}
var XMLTreeAttribute = function (_a) {
    var name = _a.name, value = _a.value;
    return (React.createElement("span", {className: "attribute"}, ' ', React.createElement("span", {className: "name"}, name), '=', React.createElement("span", {className: "value"}, '"', value, '"')));
};
var XMLTreeNode = function (_a) {
    var node = _a.node, exclude = _a.exclude;
    if (node.nodeType == Node.TEXT_NODE) {
        var text = node;
        return React.createElement("div", {className: "text"}, text.data);
    }
    else if (node.nodeType == Node.ELEMENT_NODE) {
        var element = node;
        var tagName = element.tagName;
        return (React.createElement("div", {className: "element"}, React.createElement("span", {className: "start"}, '<', tagName, tarry_1.toArray(element.attributes).filter(function (node) { return isIncluded(node, exclude); }).map(function (_a, i) {
            var name = _a.name, value = _a.value;
            return React.createElement(XMLTreeAttribute, {key: i, name: name, value: value});
        }), '>'), React.createElement(XMLTreeContainer, {nodes: node.childNodes, exclude: exclude}), React.createElement("span", {className: "end"}, '</', tagName, '>')));
    }
    else if (node.nodeType == Node.CDATA_SECTION_NODE) {
        var cdata = node;
        return React.createElement("div", {className: "cdata"}, '<![CDATA[', cdata.data, ']]>');
    }
    else {
        return React.createElement("span", null, "(Ignoring node type = ", node.nodeType, ")");
    }
};
var XMLTreeContainer = function (_a) {
    var nodes = _a.nodes, _b = _a.exclude, exclude = _b === void 0 ? [] : _b;
    return (React.createElement("span", null, tarry_1.toArray(nodes).filter(function (node) { return isIncluded(node, exclude); }).map(function (node, i) {
        return React.createElement(XMLTreeNode, {key: i, node: node, exclude: exclude});
    })));
};
var XMLTree = (function (_super) {
    __extends(XMLTree, _super);
    function XMLTree(props) {
        _super.call(this, props);
        this.state = {
            exclude: props.exclude || [],
            document: new DOMParser().parseFromString(props.xml, 'application/xml'),
        };
    }
    XMLTree.prototype.render = function () {
        return React.createElement(XMLTreeContainer, {nodes: this.state.document.childNodes, exclude: this.state.exclude});
    };
    return XMLTree;
}(React.Component));
exports.XMLTree = XMLTree;
