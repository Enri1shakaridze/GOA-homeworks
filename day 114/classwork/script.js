
// 1) let languages = ["Python", "JS", "Java", "C++"];
// მოცემულია სიტყვების მასივი. იპოვე სიტყვა “Java”. როგორც კი იპოვი, დაბეჭდე და გააჩერე ლუპი. 

let languages = ["Python", "JS", "Java", "C++"];
for (let i = 0; i < languages.length; i++){
    if(languages[i] === 'Java'){
        console.log(languages[i])
        break
    }
}


// 2) დაბეჭდე რიცხვები 1-დან 150-მდე. როგორც კი შეხვდები რიცხვს, რომელიც იყოფა 6-ზე, მაგრამ არ იყოფა 12-ზე, გააჩერე ლუპი. 

for(let x = 0; x <= 150; x++){
    if(x / 6 === 0 && x / 12 !== 0){
        console.log(x)
        break;
    }
}

// 3)შექმენით მასივი პროგრამირების ენებზე,შემდეგ popის საშუალებით დაამატეთ ორი ელემენტი და შემდეგ პირველი და ბოლო ელემენტი ამოიღეთ შესაბამისი მეთოდებით,გამოიტანეთ მიღებული მასივი 

let programing = ['java', 'python', 'c++', 'javascript']

programing.push('c#')
programing.push('SQL')
programing.shift()
programing.pop()

console.log(programing)

