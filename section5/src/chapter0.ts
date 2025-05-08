/**
 * 인터페이스
 * type과 흡사하지만 객체의 타입을 정의하는 데 특화되어 있다.
 * ex. 유니온 혹은 인터섹션 타입을 만들 수 없다.
 */
interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number, b: number): void;
}

const person: Person = {
    name: "이호준",
    sayHi: function () {
        console.log("Hi");
    },
};

