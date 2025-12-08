"use strict";
function PrintID(val) {
    if (typeof val === "string") {
        console.log(val);
    }
    else {
        console.log("no element found");
    }
}
const acc_holder = {
    name: "admin",
    login_time: new Date(),
    cart: ["headphone"],
    price: [12],
};
function callHolder(x) {
    if ("cart" in x) {
        console.log("cart is present");
    }
    else {
        console.log("Oops cart is absent");
    }
}
console.log(acc_holder);
