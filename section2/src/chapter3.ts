// object를 타입으로 사용하면 user.id 와 같이 프로퍼티에 접근할 수 없다.
// 따라서 객체 리터럴 타입으로 사용한다.
// 객체의 구조를 기준으로 타입을 정의하는 특징을 "구조적 타입 시스템"이라고 부른다.
let user: {
    id?: number; // optional property. 해당 필드가 없을 수도 있다.
    name: string;
} = {
    id: 1,
    name: "이호준",
};

let config: {
    readonly apiKey: string // 읽기 전용 프로퍼티
} = {
    apiKey: "MY API KEY"
}