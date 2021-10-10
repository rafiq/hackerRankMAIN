function Activity(amount) {
    this.amount = amount;
}
Activity.prototype.setAmount = value => {
    if (value <= 0) return false;
    else {
        this.amount = value;
        return true;
    }
}
Activity.prototype.getAmount = () => {
    return this.amount;
}

function Payment(amount, receiver) {
    Activity.call(this,amount);
    this.receiver = receiver;
    this.setReceiver = function (newReceiver) {
        this.receiver = receiver;
    }
    this.getReceiver = function () {
        return this.receiver;
    }
}
// Payment.prototype = Object.create(Activity.prototype);
Payment.prototype = new Activity();
Payment.prototype.constructor = Payment;

Payment.prototype.setReceiver = amount => {
    this.receiver = amount;
}
Payment.prototype.getReceiver = () => {
    return this.receiver;
}
function Refund(amount, newSender) {
    Activity.call(this,amount);
    this.sender = newSender;
    this.setSender = function (newSender) {
        this.sender = newSender;
    }
    this.getSender = function () {
        return this.sender;
    }
}
// Refund.prototype = Object.create(Activity.prototype);
Refund.prototype = new Activity();
Refund.prototype.constructor = Refund;

Refund.prototype.setSender = value => {
    this.sender = value;
}
Refund.prototype.getSender = () => {
    return this.sender;
}
let john = new Payment(500,"John");
console.log(john)
john.setAmount(4000);
console.log(Object.getPrototypeOf(john));
console.log(john)