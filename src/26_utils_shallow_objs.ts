type Address = {
  line1: string;
  line2: string;
  pin_code: number;
};

type User404 = {
  name: string;
  age?: number;
  phone: number;
  email?: string;
  address?: Address;
};

// all top level fields are optional
const user404: Partial<User404> = {
  address: { line1: "kashiram nagar", line2: "taloda", pin_code: 425413 },
};

// all top level is required
const user405: Required<User404> = {
  name: "jack",
  phone: 7742481799,
  age: 20,
  email: "jaypati@gamil.com",
  address: {
    line1: "",
    line2: "",
    pin_code: 12212,
  },
};

// all top level fields as readonly

const user406: Readonly<User404> = {
  ...user405,
};

const user407: Pick<User404, "name"> = {
  name: "jfm",
};

// OMIT<T,R> => it is used to remove the key from T

const user408: Omit<User404, "address"> = {
  name: "rohit",
  age: 12,
  phone: 7742481799,
};

// Record<condition,condition> of defining schema

const user409: Record<"user" | "admin" | "dev", Partial<User404>> = {
  user: { name: "rohan" },
  admin: { name: "jay" },
  dev: { name: "faf" },
};
