/**
 * 선언 합침
 */
interface Person {
    name: string;
}

interface Person {
    age: number;
}

const person: Person = {
    name: "",
    age: 0,
}

/**
 * 모듈 보강
 */
interface Lib {
    a: number;
    b: number;
}

// 위에 같은 interface를 건드릴 수 없는 경우, interface를 추가로 정의한 후 보강하는 작업
interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",
}