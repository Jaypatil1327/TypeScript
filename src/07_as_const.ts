const ROLES = ["admin", "client", "server"] as const;
type Roles = (typeof ROLES)[number]; // works on array and give all element from ROLES

function callUser(r: Roles): void {
  console.log(r);
}

callUser("admin");
