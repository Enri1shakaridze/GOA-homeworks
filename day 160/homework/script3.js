// 5) შექმენით ფუნქცია სახელით greet, რომელიც იღებს სახელს და ბეჭდავს: "Hello, {name}".
// გამოიყენეთ setTimeout ისე, რომ ეს ფუნქცია ამოქმედდეს 1.5 წამში და გადაეცით მას თქვენისახელი არგუმენტად.

function greet(name){
    setTimeout(() => {
        console.log(`Hello, ${name}`)
    }, 1500);
}
greet('enrike')