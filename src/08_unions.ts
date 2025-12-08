// function union
function PrintID(val: string | undefined) {
  if (typeof val === "string") {
    console.log(val);
  } else {
    console.log("no element found");
  }
}

// object union
type Account = {
  name: string;
  login_time: Date;
};

type Product = {
  cart: string[];
  price: number[];
};

const acc_holder: Account & Product = {
  name: "admin",
  login_time: new Date(),
  cart: ["headphone"],
  price: [12],
};

function callHolder(x: Product | Account) {
  if ("cart" in x) {
    console.log("cart is present");
  } else {
    console.log("Oops cart is absent");
  }
}

console.log(acc_holder);
