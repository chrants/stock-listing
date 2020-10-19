import React from "react";
import "./Card.scss";

interface Props {
    children?: React.ReactNode;
    className?: string;
}
export const Card = ({ children, className }: Props) => {
    return <div className={"card " + (className || '')}>{children}</div>;
};
