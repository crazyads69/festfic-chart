export interface SvgProps {
    className?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    viewBox?: string;
}

export function MenuIcon({ className, fill, stroke, strokeWidth, viewBox }: SvgProps) {
    return (
        <svg
            className={className || "size-6"}
            fill={fill || "none"}
            stroke={stroke || "currentColor"}
            strokeWidth={strokeWidth || 1.5}
            viewBox={viewBox || "0 0 24 24"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function CloseIcon({ className, fill, stroke, strokeWidth, viewBox }: SvgProps) {
    return (
        <svg
            className={className || "size-6"}
            fill={fill || "none"}
            stroke={stroke || "currentColor"}
            strokeWidth={strokeWidth || 1.5}
            viewBox={viewBox || "0 0 24 24"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
