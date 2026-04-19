class BankAccount{
    constructor(name, surename, balance=0){
        this.name = name;
        this.surename = surename;
        this.balance = balance;
    }
    deposit(){
        let inp1 = prompt('რამდენის შეტანა გსურთ? ')
        this.balance += Number(inp1)
        return `თქვენს ანგარიშზე დაირიცხა: ${inp1} ლარი`
    }
    withdaw(){
        let inp2 = prompt('რამდენის გატანა გსურთ? ')
        if(this.balance < inp2){
            return `მაგდენი თანხა არ გაქვთ ანგარიშზე!`
        }else{
            this.balance -= Number(inp2);
            return `თქვენ გაიტანეთ: ${inp2} ლარი`
        }
    }
    get res(){
        return `თქვენი ბალანსია: ${this.balance}`
    }

}
const b1 = new BankAccount('Enrike', 'shakaridze');
console.log(b1.deposit());
console.log(b1.withdaw());
console.log(b1.res);