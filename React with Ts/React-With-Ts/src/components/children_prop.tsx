import type { ReactNode } from "react";

type Children = {
  title: string;
  children?: ReactNode;
};

export default function ChildrenProp({ title, children }: Children) {
  console.log(title);
  return (
    <div>
      <h1>{title}</h1>
      <section>{children}</section>
    </div>
  );
}
