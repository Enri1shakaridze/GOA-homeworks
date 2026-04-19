// შექმენით მშობელი კლასი Mentor, რომელსაც ექნება კუთვნილებები: name, experience (experience-ში ჩაწერეთ begginner, intermediate ან advanced). ასევე შექმენით getter რომ გამოიტანოთ მენტორის experience.

// შექმენით შვილი კლასი Assistent, რომელიც inheritence-ის მეშვეობით იღებს Mentor-ის კუთვნილებებს (გამოიყენეთ super მეთოდი). ასევე დაუმატეთ mainLanguage კუთვნილება. საბოლოოდ გამოიძახეთ Assistent კლასის სამივე კუთვნილება და ასევე Mentor-ის მეთოდი. 

class Mentor{
    constructor(name, experience){
        this.name = name;
        this.experience = experience;
    }
    get Cexperience(){
        return this.experience;
    }
}

class Assistent extends Mentor{
    constructor(name, experience, mainLanguage){
        super(name, experience);
        this.mainLanguage = mainLanguage;
    }
}

const mentor1 = new Mentor('john', 'intermediate');
const assistent1 = new Assistent('scofield', 'advanced', 'python');
console.log(mentor1.Cexperience);
console.log(assistent1.name);
console.log(assistent1.experience);
console.log(assistent1.mainLanguage);
