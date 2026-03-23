// 2) გაიარეთ მოცემული თავები (ES6 Destructuring-ის ჩათვლით)

// 3) დაასრულეთ Level 137-ის საშინაო დავალება და გამოასწორეთ კოდში შეცდომები (შემდეგისთვის ფუნქციონალი + დიზაინი სრულყოფილად გქონდეთ)

// 4) შექმენით form, სადაც გექნებათ ინფუთები:
// • სახელი
// • პაროლი
// • ასაკი

// გამოიყენეთ Form ვალიდაცია, რომ შეამოწმოთ:
// • სახელის ინფუთი აღემატება თუ არა 1 სიმბოლოს.
// • პაროლი არის თუ არა 8 სიმბოლოზე მეტი.
// • ასაკი არის თუ არა 10-ზე მეტი.

// თუ რომელიმე კრიტერიუმი არ შესრულდება - alert-ით გამოიტანეთ შესაბამისი მესიჯი მაგ. სახელი უნდა იყოს 1 სიმბოლოზე მეტი, პაროლი უნდა აღემატებოდეს 8 სიმბოლოს და ა.შ. 
// მომხმარებელს არ მისცეთ ფორმის დადასტურების საშუალება თუ ამ კრიტერიუმებს არ შეასრულებს.

const button = document.getElementById('but')
const pas = document.getElementById('password')
const namee = document.getElementById('name')
const age = document.getElementById('age')


function validate(){
    if (namee.value.length <= 1) {
        alert('სახელი უნდა იყოს 1 სიმბოლოზე მეტი!')
        return false
    }

    if (pas.value.length <= 8) {
        alert('პაროლი უნდა აღემატებოდეს 8 სიმბოლოს!')
        return false
    }

    if (age.value <= 10) {
        alert('ასაკი უნდა იყოს 10-ზე მეტი!')
        return false
    }

    alert('წარმატებით დარეგისტრირდით!')
    return true
}

const func = (e) => {
    e.preventDefault();
    console.log(`სახელი: ${namee.value}`)
    console.log(`პაროლი: ${pas.value}`)
    console.log(`ასაკი: ${age.value}`)
}

button.addEventListener('click', func)