// 1) კომენტარის სახით დაწერეთ რა განსხვავებაა Arrow (Anonymous) ფუნქციებსა და function keyword ფუნქციებს შორის.

// გამოსაყენებლად ადვილია მოკლე კოდების დაწერა ერთ ხაზშიც შეგვიძლია; სინტაქსი განსხვავდება ის აუცილებლად უნდა შევინახოთ ცვლადში თუ ერთ არგუმენტს გავუწწერთ მაშინ არ არის საჭირო გატოლების შემდეგ ფრჩილები თი არ გავუწერთ პარამეტრს ან 2 ზე მეტი პარამეტრი გვექნება გავუწერთ ფრჩხილებში პარამეტრებს 

// 2) შექმენით arrow function სახელით rectangleArea, რომელიც პარამეტრად მიიღებს width, height-ს. გამოთვალეთ მართკუთხედის ფართობი.

const rectangleArea = (width, height) => width * height
console.log(rectangleArea(10, 5))

// 3) შექმენით arrow function triangleArea, რომელიც პარამეტრად მიიღებს side1, side2, side3 პარამეტრებს. გამოთვალეთ სამკუთხედის პერიმეტრი.

const triangleArea = (side1, side2, side3) => 2 * (side1 * side2 * side3)
console.log(triangleArea(4, 6, 2))