/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */
class Employee {
    // 필드
    // private name: string;
    // protected age: number;
    // public position: string;

    // 생성자
    // 생성자에 접근 제어자를 선언하면 자동으로 필드를 생성
    constructor(
        private name: string,
        protected age: number,
        public position: string
    ) {
        // 생성자에 접근 제어자를 선언하면 자동으로 값 할당
        // this.name = name;
        // this.age = age;
        // this.position = position;
    }

    work() {
        console.log(`${this.name} 일함`);
    }
}

class ExecutiveOffice extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    func() {
        this.age;
    }
}

const employee = new Employee("이호준", 29, "developer");
// employee.name = "홍길동";
// employee.age = 30;
employee.position = "designer";