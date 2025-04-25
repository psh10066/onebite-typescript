// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "psh10066"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
]

// 튜플 (ts에만 존재)
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

// 튜플은 실제로는 배열이어서 push나 pop 등을 실행할 때 길이 제한이 발생하지 않아서 주의해야 한다.
tup1.push(1);
tup1.pop();
