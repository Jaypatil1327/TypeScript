function greetUserOptional(username) {
    const user = username ?? "Guest";
    return `Hello mr/mrs ${user}`;
}
console.log(greetUserOptional("john doe"));
console.log(greetUserOptional());
function greetUserDefault(username = "Default") {
    return "Hello sir/madam " + username;
}
console.log(greetUserDefault("jack sparrow"));
console.log(greetUserDefault());
export {};
