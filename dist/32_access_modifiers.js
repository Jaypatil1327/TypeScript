class Bank {
    users = new Map();
    balances = new Map();
    createUser(acc, userDetails) {
        if (this.users.has(acc)) {
            throw new Error("Account already exists");
        }
        this.users.set(acc, userDetails);
        this.balances.set(acc, 0);
        console.log(`Welcome ${userDetails.name}, your account number is ${acc}`);
        return acc;
    }
    createUserAuto(userDetails) {
        const acc = crypto.randomUUID();
        return this.createUser(acc, userDetails);
    }
    getUserDetails(acc) {
        return this.users.get(acc);
    }
    updateUserDetails(acc, vals) {
        const obj = this.users.get(acc);
        if (!obj)
            throw new Error("This user does not exist");
        this.users.set(acc, { ...obj, ...vals });
    }
    deposit(acc, value) {
        if (value <= 0)
            throw new Error("Deposit must be positive");
        const bal = this.balances.get(acc);
        if (bal === undefined)
            throw new Error("Account does not exist");
        const newBal = bal + value;
        this.balances.set(acc, newBal);
        return newBal;
    }
    withdraw(acc, value) {
        if (value <= 0)
            throw new Error("Withdraw must be positive");
        const bal = this.balances.get(acc);
        if (bal === undefined)
            throw new Error("Account does not exist");
        if (value > bal)
            throw new Error("Insufficient funds");
        const newBal = bal - value;
        this.balances.set(acc, newBal);
        return newBal;
    }
    checkBalance(acc) {
        const bal = this.balances.get(acc);
        if (bal === undefined)
            throw new Error("Account does not exist");
        return bal;
    }
}
const bank = new Bank();
const acc1 = bank.createUserAuto({ name: "Jack", age: 30, phone: 9999999999 });
console.log("account number:", acc1);
console.log("initial balance:", bank.checkBalance(acc1));
console.log("deposit 100:", bank.deposit(acc1, 100));
console.log("withdraw 50:", bank.withdraw(acc1, 50));
console.log("final balance:", bank.checkBalance(acc1));
console.log("update kyc...");
bank.updateUserDetails(acc1 + "111", { name: "Jay Don" });
console.log("kyc:", bank.getUserDetails(acc1));
export {};
