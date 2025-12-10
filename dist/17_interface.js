const user22 = { id: "123", name: "jfm", createdAt: new Date() };
console.log(user22);
const adminUser = {
    id: "12",
    name: "rohan",
    control: ["notifications", "location", "storage"],
    createdAt: new Date(),
};
const adminUser2 = {
    id: "13",
    name: "jacks",
    employee: 2,
    avgSalary: 12,
    createdAt: new Date(),
};
const adminUser3 = {
    ...adminUser2,
    name: "jamie",
    working: false,
    control: ["nothing"],
};
console.log(adminUser);
console.log(adminUser2);
console.log(adminUser3);
export {};
