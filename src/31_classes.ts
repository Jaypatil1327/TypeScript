class User {
  // good practice
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

const user1 = new User("jfm", 12);
const user2 = new User("rohit", 13);
const user3 = new User("virat", 14);

// class User {
//     name : string ,
//     age : number ,

//     // constructor missing
// }

// class User {
//     name : string ,
//     age : number ,

//     constructor() {} // but values not assigned
// }
