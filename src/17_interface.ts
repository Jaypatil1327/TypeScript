interface Users {
  id: string;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

interface Admins extends Users {
  // single + multi-level
  control: string[];
}

interface AdminControls extends Users {
  // hierarchial
  employee: number;
  avgSalary: number;
}

interface CompletePackage extends Admins, AdminControls {
  // multiple inheritance
  working: boolean;
}
const user22: Users = { id: "123", name: "jfm", createdAt: new Date() };
console.log(user22);

// we can extent the User and add some extra properties

const adminUser: Admins = {
  id: "12",
  name: "rohan",
  control: ["notifications", "location", "storage"],
  createdAt: new Date(),
};

const adminUser2: AdminControls = {
  id: "13",
  name: "jacks",
  employee: 2,
  avgSalary: 12,
  createdAt: new Date(),
};

const adminUser3: CompletePackage = {
  ...adminUser2,
  name: "jamie",
  working: false,
  control: ["nothing"],
};

console.log(adminUser);
console.log(adminUser2);
console.log(adminUser3);
