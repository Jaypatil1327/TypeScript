"use strict";
const payed = "payed to mick";
function checkPassword(oldPass, newPass, optionalArg1, optionalArg2) {
    if (oldPass === newPass) {
        console.log("passwords are same");
    }
    else {
        console.log("changed successfully");
    }
}
const anyValue = JSON.parse("{username : `mick`}");
function iWillThrowError(username) {
    throw new Error(username);
}
