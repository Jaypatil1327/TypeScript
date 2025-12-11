function ExtractUserDetails(id, isExtractUserInfo = false) {
    return {
        id,
        logs: isExtractUserInfo ? "details" : undefined,
    };
}
const params = [crypto.randomUUID(), true];
const vals = ExtractUserDetails(...params);
console.log(vals);
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello mr/mrs ${this.name}`;
    }
}
const user200 = ["jay", 12];
const user201 = new User(...user200);
console.log(user201);
export {};
