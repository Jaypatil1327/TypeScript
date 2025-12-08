type inter1 = { id: string };
type inter2 = { name: string };
type inter3 = { password: string };

const value: inter1 & inter2 & inter3 = {
  id: "1",
  name: "jayesh",
  password: "Jack",
};
