// in -> if x is in y or not

type val1 = {
  role: "admin";
  permission: string[];
};

type val2 = {
  role: "dev";
  readonly createdAt: Date;
};

type overAll = val1 | val2;

function workingWithIn(x: val1 | val2) {
  if ("permission" in x) {
    return x.permission;
  } else {
    return x.createdAt;
  }
}

const obj: val1 | val2 = {
  role: "dev",
  createdAt: new Date(),
};

console.log(workingWithIn(obj));

// optional chaining ?. aagar exist karta hai aagey ja
// ?? => aagar null | undefined hai to make right side value as default
// || => agar falsy value hai toh right as default

type Profile = {
  name: string;
  contacts?: {
    email: string;
    ph?: number;
  };
};

const pf1: Profile = {
  name: "jfm",
  contacts: { email: "jaypatil136@gamil.com" },
};
const pf2: Profile = {
  name: "jfm",
  contacts: { email: "jaypatil136@gamil.com", ph: 424234 },
};

const NUmber = 0;

console.log(pf1.contacts?.ph); // optional chaining return undefined
console.log(NUmber ?? "hey im falsy");
console.log(NUmber || "hey im falsy");
