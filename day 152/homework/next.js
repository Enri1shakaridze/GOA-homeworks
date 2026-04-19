let name = localStorage.getItem('name');
let surename = localStorage.getItem('surename');
let h2 = document.getElementById('h2').textContent = name;
let h1 = document.getElementById('h1').textContent = `Welcome To World Bank, ${name}`;

class BankAccount{
    constructor(name, surename, balance=0){
        this.name = name;
        this.surename = surename;
        this.balance = balance;
    }
    deposit(){
        let inp1 = prompt('რამდენის შეტანა გსურთ? ');
        this.balance += Number(inp1);
        alert(`თქვენს ანგარიშზე დაირიცხა: ${inp1} ლარი`);
    }
    withdraw(){
        let inp2 = prompt('რამდენის გატანა გსურთ? ');
        if(this.balance < inp2){
            alert(`მაგდენი თანხა არ გაქვთ ანგარიშზე!`);
        }else{
            this.balance -= Number(inp2);
            alert(`თქვენ გაიტანეთ: ${inp2} ლარი`);
        }
    }
    get res(){
        alert(`თქვენი ბალანსია: ${this.balance} ლარი`);
    }
}
let bank1 = new BankAccount(name, surename);
function balance(){
    return bank1.res;
}

function withdraw(){
    return bank1.withdraw();
}

function deposit(){
    return bank1.deposit();
}