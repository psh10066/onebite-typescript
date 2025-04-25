// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "이호준",
    nickname: "psh10066",
    birth: "1998.02.01",
    bio: "안녕하세요",
    location: "서울시",
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number; // 위에만 있으면 객체가 비어도 허용되기 때문에, 필요시 정의되어야 할 프로퍼티를 선언해둘 수 있다.
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
}