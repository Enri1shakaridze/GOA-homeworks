let name = localStorage.getItem('namee') || 'Guest';
let surename = localStorage.getItem('surename');
let h2 = document.getElementById('h2').textContent = name;
let h22 = document.getElementById('h22');
let nameh2 = localStorage.getItem('namee');
let btns2 = document.getElementsByClassName('btns2')[0];
let h1 = document.getElementById('h1').textContent = `Welcome To World Bank, ${name}`;
if(nameh2){
    btns2.removeChild(h22)
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    let button3 = document.createElement('button');
    button1.textContent = 'Deposit';
    button2.textContent = 'Withdraw';
    button3.textContent = 'Balance';
    div1.appendChild(button1);
    div1.appendChild(button2);
    div2.appendChild(button3);
    div2.id='b3'
    btns2.appendChild(div1);
    btns2.appendChild(div2);
}

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