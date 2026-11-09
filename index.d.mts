import React from 'react';

interface PlaceholderOptions {
    text?: string;
    radius?: number;
    iconOpacity?: number;
    textOpacity?: number;
    fontSize?: number;
}
declare function placeholder(size: string | number, bg?: string, options?: PlaceholderOptions): string;
interface PlaceholderProps {
    size?: string | number;
    width?: number;
    height?: number;
    bg?: string;
    backgroundColor?: string;
    iconOpacity?: number;
    textOpacity?: number;
    text?: string;
    showDimensions?: boolean;
    fontSize?: number;
    radius?: number;
    borderRadius?: number;
    className?: string;
    style?: React.CSSProperties;
}
declare function Placeholder({ size, width, height, bg, backgroundColor, iconOpacity, textOpacity, text, showDimensions, fontSize, radius, borderRadius, className, style, }: PlaceholderProps): React.JSX.Element;

export { Placeholder, type PlaceholderOptions, type PlaceholderProps, Placeholder as default, placeholder };
