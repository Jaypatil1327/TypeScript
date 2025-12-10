function workingWithIn(x) {
    if ("permission" in x) {
        return x.permission;
    }
    else {
        return x.createdAt;
    }
}
const obj = {
    role: "dev",
    createdAt: new Date(),
};
console.log(workingWithIn(obj));
const pf1 = {
    name: "jfm",
    contacts: { email: "jaypatil136@gamil.com" },
};
const pf2 = {
    name: "jfm",
    contacts: { email: "jaypatil136@gamil.com", ph: 424234 },
};
const NUmber = 0;
console.log(pf1.contacts?.ph);
console.log(NUmber ?? "hey im falsy");
console.log(NUmber || "hey im falsy");
export {};
