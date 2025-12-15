import type { ReactNode } from "react";

interface UserDetails {
  id: string;
  name?: string;
  subtitle?: ReactNode;
}

function UserDetail({ id, name, subtitle }: UserDetails) {
  const username = name ?? "Guest";
  return (
    <div>
      <h1>#{id}</h1>
      <p>{username}</p>
      {subtitle ?? null}
    </div>
  );
}

export default UserDetail;
