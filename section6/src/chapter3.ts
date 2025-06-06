/**
 * 인터페이스와 클래스
 */
interface CharacterInterface {
    name: string;
    moveSpeed: number;

    move(): void;
}

class Character implements CharacterInterface {
    // 인터페이스에 정의된 필드는 public만 가능
    constructor(
        public name: string,
        public moveSpeed: number,
        private extra: string
    ) {
    }

    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}