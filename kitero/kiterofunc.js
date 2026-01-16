function Student(name) {
    this.name = name;
    this.askedQuestionNum = 0;
}

Student.prototype.askQuestion = function(){
    console.log("???");
    this.askedQuestionNum++; 
}

function StudentWithWork(name) {
    Student.call(this, name);   // atadjuk Student class parametereit ennek a classnak
    this.workDone = 0;
}

StudentWithWork.prototype.doWork = function(){
    console.log(this.name + " doing work...")
    this.workDone++;
}

Object.setPrototypeOf(StudentWithWork.prototype, Student.prototype);

const stu1 = new Student("bence");
const stu2 = new Student("koncsik");

console.log(stu1);
console.log(stu2);

stu1.askQuestion();
console.log(stu1);


const stu3 = new StudentWithWork("bulbasaur");
stu3.askQuestion();
console.log(stu3);

stu3.doWork();
console.log(stu3);