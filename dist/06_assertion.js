"use strict";
const raw = `{"id" : 1 , "username" : "jfm" , "age" : 1}`;
const riskyUser = JSON.parse(raw);
console.log(riskyUser, "risky user");
function validateObj(v) {
    return (typeof v === "object" &&
        v !== null &&
        "id" in v &&
        typeof v.id === "number" &&
        "username" in v &&
        typeof v.username === "string" &&
        "age" in v &&
        typeof v.age === "number");
}
const raw2 = '{"id" : 1 , "username" : "jfm"  , "age" : 12}';
console.log(validateObj(JSON.parse(raw2)));
