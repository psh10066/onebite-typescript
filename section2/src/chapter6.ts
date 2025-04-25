// any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// unknown은 any와는 다르게 다른 타입과 호환이 불가능하다.
// num = unknownVar;
// unknownVar.toUpperCase();

// 사용하고 싶은 경우 타입 정제 후 사용 가능
if (typeof unknownVar === "number") {
    num = unknownVar;
}