class Bank{
    constructor(name,balance){
        this.name=name;
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
    }
    balance(){
        return this.balance;
    }
}
const obj=new Bank("teja",5000);
obj.deposit(500);
console.log(obj.balance());
