// void : 아무것도 없음을 의미하는 타입

function func1(): string {
    return "hello";
}

function func2(): void {
    console.log("hello");
}

let a: void;
a = undefined; // void 타입에 undefined만 유일하게 할당 가능
// a = null; // "strictNullChecks": false이면 가능

// never : 불가능한 타입 (반환 자체가 불가능한 경우 등)
function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error();
}

let b: never;
// b = undefined; // undefined도 할당 불가
// b = null; // "strictNullChecks": false여도 할당 불가
