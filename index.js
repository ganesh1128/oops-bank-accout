class bankAcoount {
    accounts = [];
    bankAccountss;
    deposit;
    withdrawl;
    balance;

    accouuntOpening(citizen1, citizen2) {
        this.accounts.push(citizen1);
        this.accounts.push(citizen2);
        console.log(this.accounts);
        console.log(this.accounts[0]);
        console.log(this.accounts[1]);
    }
}

class bankAccounts {
    name;
    constructor(citizenName) {
        this.name = citizenName;
    }
    assignCitizen(citizen) {
        this.assignCitizen.push(citizen);
    }
}

let account = new bankAcoount();
let citizenName1 = new bankAccounts("Ganesh");
citizenName1.deposit = 20000;
citizenName1.withdrawl = 5000;
citizenName1.balance = citizenName1.deposit - citizenName1.withdrawl;

let citizenName2 = new bankAccounts("Kumar");
citizenName2.deposit = 12000;
citizenName2.withdrawl = 10000;
citizenName2.balance = citizenName2.deposit - citizenName2.withdrawl;

account.accouuntOpening(citizenName1, citizenName2);
