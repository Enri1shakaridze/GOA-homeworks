// 1) შექმენით person ობიექტი, დაამატეთ მასში ოთხი key: firstName, lastName, age, height, შემდეგ წაშალეთ age, height შეცვალეთ და საბოლოოდ დაპრინტეთ ობიექტი

const person = {
    firstName: 'enrike', 
    lastName:'shakaridze',
    age: 15,
    height: 177
}

delete person.age

person.height = 175

console.log(person)

// 2) შექმენით phone ობიექტი, რომელსაც ექნება brand, model, price property-ები, შექმენით ობიექტის მეთოდი რომელსაც გადაეცემა რამე რიცხვი და ამ რიცხვს დაუმატებს price-ს, გამოიტანეთ განახლებული price კონსოლში

const phone = {
    brand: 'samsung', 
    model: 's26',
    price: 4999,

    obj1: function(n){
        this.price += n
        console.log(`განახლებული ფასი ${this.price}`)
    }
}


phone.obj1(100)