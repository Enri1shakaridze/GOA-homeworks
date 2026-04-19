// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
    let res = ''
    for(let i = 0; i < str.length; i++){
    if (!'aeiouAEIOU'.includes(str[i])) {
        res += str[i]
    }
    }
    return res
}

// https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function dnaStrand(dna){
    let res = '';
    for(let i = 0; i < dna.length; i++){
        if(dna[i] === "A"){
            res += "T"
        }else if(dna[i] === "T"){
            res += "A"
        }else if(dna[i] === "C"){
            res += "G"
        }else{
            res += "C"
        }
    }
    return res
}

// https://www.codewars.com/kata/541a354c39c5efa5fa001372/train/python

// https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/javascript

// შეასრულეთ ეს პროექტი JavaScript-ით 
// https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI