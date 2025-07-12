import React from "react";

type ChevyProps = {
  /** Tailwind or other class names you want appended to the SVG */
  color?: string;   // make it optional if you sometimes omit it
};

const Chevy: React.FC<ChevyProps> = ({ color = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3.5}
    stroke="currentColor"
    className={`size-7 pr-2 ${color}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export default Chevy;
