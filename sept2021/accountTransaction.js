

class Account{
    constructor(balance) {
        this.balance = balance;
    }

    debit(amount) {
        if (this.balance - amount >= 0) {
            this.balance -= amount;
            return true
        } else {
            return false
        }
    }

    getBalance() {
        return this.balance;
    }

    credit(amount) {
        this.balance += amount;
    }
}

