// შექმენით Employee კლასი თვისებებით: name, surname, department, experience
// დამალეთ name და surname თვისებები და გეტერით გამოიძახეთ ორივე. department კი დააბრუნეთ ჩვეულებრივი მეთოდით. experience მეთოდს გადაეცით extra არგუმენტი, ამ მეთოდის ყოველ გამოძახებაზე experience უნდა გაიზარდოს extra რაოდენობით.
class Employee{
    constructor(name, surename, department, experience){
        this._name = name;
        this._surename = surename;
        this.department = department;
        this.experience = experience;
    }
    get name(){
        return this._name
    }
    get surename(){
        return this._surename
    }
    department(){
        return this.department
    }
    addExperience(extra){
        return this.experience += extra
    }
}

let employee1 = new Employee('random1', 'random2', 'random3', 20)
console.log(employee1.name)
console.log(employee1.surename)
console.log(employee1.department)
employee1.addExperience(1)
console.log(employee1.experience)