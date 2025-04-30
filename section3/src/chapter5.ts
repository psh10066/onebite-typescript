/**
 * 타입 추론
 */
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "이호준",
    profile: {
        nickname: "psh10066",
    },
    urls: ["https://github.com/psh10066"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

// 암묵적 any -> any 진화 (명시적으로 any를 지정하는 것과는 다름)
let d;
d = 10;
d.toFixed();
// d.toUpperCase();

d = "hello";
d.toUpperCase();
// d.toFixed();

// const는 변경될 일이 없기 때문에 리터럴 타입으로 추론
const num = 10;
const str = "hello";

let arr = [1, "string"];