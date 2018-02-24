type BankAccount = {
    money: number, 
    deposit: (v: number) => void
};
type User = {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[]
};

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself: User = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

