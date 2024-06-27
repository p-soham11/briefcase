/** @format */

import React from "react";

type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
    return <h2 className="mb-9 text-center unbounded">{children}</h2>;
}
