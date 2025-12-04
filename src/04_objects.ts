// for creating object schema we can use either "interface" or "type"
// if we have used optional it will give value or undefined

interface User {
  username: string;
  phoneNumber: number;
  email?: string;
  password?: string;
  readonly createdAt: Date;
}

const user1: User = {
  username: "jack",
  phoneNumber: 7742481799,
  createdAt: new Date(),
};

type counter1 = { [K: string]: number }; // index signature
type counter2 = Record<"likes" | "share" | "views", number>; // record

// its allowed to use anything
const x: counter1 = { x: 23, y: 1, z: 1000 };

// in record we must use all props and have exact same values
const y: counter2 = { views: 23, likes: 12, share: -1 };
