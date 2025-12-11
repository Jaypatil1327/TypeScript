type UserDetails = {
  name: string;
  age: number;
  phone: number;
};

class Bank {
  // store user details and per-account balances
  protected users: Map<string, UserDetails> = new Map();
  protected balances: Map<string, number> = new Map();

  // create user; returns account number
  createUser(acc: string, userDetails: UserDetails): string {
    if (this.users.has(acc)) {
      throw new Error("Account already exists");
    }
    this.users.set(acc, userDetails);
    this.balances.set(acc, 0); // initialize balance
    console.log(`Welcome ${userDetails.name}, your account number is ${acc}`);
    return acc;
  }

  // convenience: create with auto-generated account id
  createUserAuto(userDetails: UserDetails): string {
    const acc = crypto.randomUUID();
    return this.createUser(acc, userDetails);
  }

  // return user details or undefined
  getUserDetails(acc: string): UserDetails | undefined {
    return this.users.get(acc);
  }

  // update partial details
  updateUserDetails(acc: string, vals: Partial<UserDetails>): void {
    const obj = this.users.get(acc);
    if (!obj) throw new Error("This user does not exist");
    this.users.set(acc, { ...obj, ...vals });
  }

  // deposit funds to specified account
  deposit(acc: string, value: number): number {
    if (value <= 0) throw new Error("Deposit must be positive");
    const bal = this.balances.get(acc);
    if (bal === undefined) throw new Error("Account does not exist");
    const newBal = bal + value;
    this.balances.set(acc, newBal);
    return newBal;
  }

  // withdraw funds from specified account
  withdraw(acc: string, value: number): number {
    if (value <= 0) throw new Error("Withdraw must be positive");
    const bal = this.balances.get(acc);
    if (bal === undefined) throw new Error("Account does not exist");
    if (value > bal) throw new Error("Insufficient funds");
    const newBal = bal - value;
    this.balances.set(acc, newBal);
    return newBal;
  }

  // check balance
  checkBalance(acc: string): number {
    const bal = this.balances.get(acc);
    if (bal === undefined) throw new Error("Account does not exist");
    return bal;
  }
}

const bank = new Bank();

const acc1 = bank.createUserAuto({ name: "Jack", age: 30, phone: 9999999999 });
console.log("account number:", acc1);

console.log("initial balance:", bank.checkBalance(acc1)); // 0
console.log("deposit 100:", bank.deposit(acc1, 100)); // 100
console.log("withdraw 50:", bank.withdraw(acc1, 50)); // 50
console.log("final balance:", bank.checkBalance(acc1)); // 50

console.log("update kyc...");
bank.updateUserDetails(acc1 + "111", { name: "Jay" });
console.log("kyc:", bank.getUserDetails(acc1));
