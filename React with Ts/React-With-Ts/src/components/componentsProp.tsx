import type { ComponentProps } from "react";

type BaseButton = ComponentProps<"button">;
type CustomButton = BaseButton & { variant: "primary" | "secondary" | "ghost" };

function Button(props: CustomButton) {
  console.log(props);
  return <h1>HIii</h1>;
}

export default Button;
