import * as React from 'react';
export interface XMLTreeProps {
    xml: string;
    exclude?: string[];
}
export declare class XMLTree extends React.Component<XMLTreeProps, {
    document: Document;
    exclude: string[];
}> {
    constructor(props: any);
    /**
    Check the given name against the XMLTree's `exclude` blacklist.
    Return false for element nodes which have a blacklisted tag name.
    Return true if the name is allowed (does not occur in the blacklist).
    */
    protected isIncluded(name: string): boolean;
    protected renderAttributes(attributes: NamedNodeMap): React.ReactChild[];
    protected renderAttribute(attribute: Attr): React.ReactChild;
    protected renderNodes(nodes: NodeList): React.ReactChild[];
    protected renderNode(node: Node): React.ReactChild;
    render(): JSX.Element;
}
