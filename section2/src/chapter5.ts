// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 숫자를 할당하지 않으면 0부터 순차적으로 할당된다.
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name: "홍길동",
    role: Role.ADMIN,
    language: Language.korean,
}

const user2 = {
    name: "김아무개",
    role: Role.USER,
    language: Language.english,
}

const user3 = {
    name: "이아무개",
    role: Role.GUEST,
}

console.log(user1, user2, user3);