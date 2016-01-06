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
    render(): JSX.Element;
}
