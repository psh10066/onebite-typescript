/**
 * 인터페이스의 확장
 */
// 인터페이스 뿐만 아니라 type도 extends 가능
// interface Animal {
type Animal = {
    name: string;
    color: string;
}

interface Dog extends Animal {
    isBark: boolean;
}

const dog: Dog = {
    name: "",
    color: "",
    isBark: true,
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

interface DogCat extends Dog, Cat {
}

const dogCat: DogCat = {
    name: "",
    color: "",
    isBark: false,
    isScratch: false,
}