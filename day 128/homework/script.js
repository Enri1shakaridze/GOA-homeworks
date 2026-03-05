// 2) წაიკითხეთ მთლიანი დოკუმენტაცია. გადაიმეორეთ და გაეცანით მასივის ახალ მეთოდებს. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

// .some() არის JavaScript-ის მასივის მეთოდი, რომელიც ამოწმებს — არის თუ არა მასივში სულ მცირე ერთი ელემენტი, რომელიც აკმაყოფილებს მოცემულ პირობას.
// .every() ამოწმებს — ყველა ელემენტი აკმაყოფილებს თუ არა პირობას:

// 3) მოცემულია მასივი:
// words = ["Hello", " ", "World", "!"]
// გამოიყენეთ reduce(), რომ შეაერთოთ ყველა ელემენტი ერთ სტრინგად.

let words = ["Hello", " ", "World", "!"]
let word = words.reduce((acc, cur) => acc + cur)
console.log(word)

// 4) შექმენით რიცხვების სია. პირველ რიგში გაიგეთ რიცხვთა ჯამი, შემდეგ კი მათი ნამრავლი - reduce() ის გამოყენებით.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numSum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log('ჯამი: ' + numSum)

let numMulti = numbers.reduce((acc, cur) => acc * cur)
console.log('ნამრავლი: ' + numMulti)

// 5) მოცემულია სია:
// nums = [1,2,3,4,5,6,7,8,9,10]
// გამოიყენეთ:
// filter → დატოვეთ მხოლოდ ლუწები.
// map → ლუწი რიცხვები გაამრავლეთ 3-ზე.
// reduce → ბოლოს იპოვეთ დარჩენილ რიცხვთა ჯამი.

let nums = [1,2,3,4,5,6,7,8,9,10]
let numFilt = nums.filter((x) => x % 2 === 0)
let numMap = numFilt.map((i) => i * 3)
let numReduce = nums.reduce((acc, cur) => acc + cur, 0)
console.log(numReduce)

// 6) მოცემულია მასივი:
// words = ["python", "java", "c", "javascript", "go"]
// გამოიყენეთ:
// filter → დატოვეთ სიტყვები, რომელთა სიგრძეც აღემატება 3-ს.
// map → გადაიყვანეთ დიდ ასოებად.
// reduce → გააერთიანეთ ერთ წინადადებად.

let words1 = ["python", "java", "c", "javascript", "go"]
let word1Filt = words1.filter((x) => x.length > 3)
let word1Map = word1Filt.map((i) => i.toUpperCase())
let word1Reduce = word1Map.reduce((acc, cur) => acc + ' ' + cur)
console.log(word1Reduce)

// 7) შექმენით პროგრამა, რომელიც იღებს რიცხვების სიას. გამოიყენეთ map(), filter() და reduce(), რომ:
// filter → დატოვოთ მხოლოდ დადებითი რიცხვები.
// map → აიყვანოთ დადებითი რიცხვები კვადრატში.
// reduce → იპოვოთ რიცხვთა ჯამი.

let numArray = [1, 2, 3, -9, -8, 4, -5, 6, -7]
let numEven = numArray.filter((x) => x > 0)
let numSquar = numEven.map((x) => x ** 2)
let numReducc = numSquar.reduce((acc, cur) => acc + cur, 0)
console.log(numReducc)