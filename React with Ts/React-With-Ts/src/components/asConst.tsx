import type React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const COLORS = ["primary", "secondary", "tertiary"] as const;

type colors = (typeof COLORS)[number];
type Badge = {
  label: string;
  color?: colors;
};

function AsConst({ label, color = "primary" }: Badge) {
  const colorVariants: Record<colors, React.CSSProperties> = {
    primary: {
      color: "blue",
    },
    secondary: {
      color: "yellow",
    },
    tertiary: {
      color: "red",
    },
  };
  console.log();
  return <h1 style={{ color: colorVariants[color].color }}>{label}</h1>;
}

export default AsConst;
