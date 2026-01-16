class Student{
    constructor(name){
        this.name = name;
        this.askedQuestionNum = 0;
    }

    askQuestion(){
        console.log("???");
        this.askedQuestionNum++; 
    }
}

const stu1 = new Student("tanulo");
console.log(stu1);

stu1.askQuestion();
console.log(stu1);


class StudentWithWork extends Student{
    constructor(name){
        super(name);
        this.workDone = 0;
    }

    doWork(){
        console.log(this.name + " doing work...")
        this.workDone++;
    }
}

const stu2 = new StudentWithWork("tanulo 2");
console.log(stu2);

stu2.doWork();
console.log(stu2);