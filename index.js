/// <reference path="type_declarations/DefinitelyTyped/virtual-dom/virtual-dom.d.ts" />
var virtual_dom_1 = require('virtual-dom');
var XMLRenderer = (function () {
    function XMLRenderer(exclude) {
        if (exclude === void 0) { exclude = []; }
        this.exclude = exclude;
    }
    /**
    Check the given name against the XMLRenderer's `exclude` blacklist.
    Return false for element nodes which have a blacklisted tag name.
    Return true if the name is allowed (does not occur in the blacklist).
    */
    XMLRenderer.prototype.isIncluded = function (name) {
        return this.exclude.indexOf(name) === -1;
    };
    XMLRenderer.prototype.renderAttributes = function (attributes) {
        var vnodes = [];
        for (var i = 0, attribute; (attribute = attributes[i]); i++) {
            if (this.isIncluded(attribute.name)) {
                vnodes.push(this.renderAttribute(attribute));
            }
        }
        return vnodes;
    };
    XMLRenderer.prototype.renderAttribute = function (attribute) {
        return virtual_dom_1.h('span.attribute', [
            ' ',
            virtual_dom_1.h('span.name', attribute.name),
            '=',
            virtual_dom_1.h('span.value', "\"" + attribute.value + "\""),
        ]);
    };
    XMLRenderer.prototype.renderNodes = function (nodes) {
        var vnodes = [];
        for (var i = 0, node; (node = nodes[i]); i++) {
            if (node.nodeType === Node.ELEMENT_NODE && this.isIncluded(node.tagName)) {
                vnodes.push(this.renderNode(node));
            }
        }
        return vnodes;
    };
    XMLRenderer.prototype.renderNode = function (node) {
        if (node.nodeType == Node.TEXT_NODE) {
            var text = node;
            return virtual_dom_1.h('div.text', text.data);
        }
        else if (node.nodeType == Node.ELEMENT_NODE) {
            var element = node;
            var tagName = element.tagName;
            var startTagChildren = [['<', tagName], this.renderAttributes(element.attributes), ['>']];
            var startTag = virtual_dom_1.h('span.start', Array.prototype.concat.apply([], startTagChildren));
            var endTag = virtual_dom_1.h('span.end', {}, ['</', tagName, '>']);
            return virtual_dom_1.h('div.element', [startTag, this.renderNodes(node.childNodes), endTag]);
        }
        else {
            return virtual_dom_1.h('span', "(Ignoring node type = " + node.nodeType + ")");
        }
    };
    XMLRenderer.prototype.render = function (xml) {
        var document = new DOMParser().parseFromString(xml, 'application/xml');
        return virtual_dom_1.h('div.xmltree', this.renderNodes(document.childNodes));
    };
    /**
    Creates an HTML element and appends it to container if the given `vtree` is
    undefined; otherwise, updates element in place. `element` should not be
    manipulated without also reflecting the changes in `vtree`.
    */
    XMLRenderer.prototype.update = function (xml, container, element, vtree) {
        var new_vtree = this.render(xml);
        if (vtree === undefined) {
            vtree = new_vtree;
            element = virtual_dom_1.create(vtree);
            container.appendChild(element);
        }
        else {
            var patches = virtual_dom_1.diff(vtree, new_vtree);
            element = virtual_dom_1.patch(element, patches);
            vtree = new_vtree;
        }
        return [element, vtree];
    };
    return XMLRenderer;
})();
exports.XMLRenderer = XMLRenderer;
