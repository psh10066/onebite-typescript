# 타입스크립트 개론

## 설치 방법

```shell
# Node.js 패키지 초기화
npm init

# Node.js 내장 기능들의 타입 정보를 담고있는 @types/node 패키지 설치
npm i @types/node

# Typescript 컴파일러 설치 (MacOS)
sudo npm i -g typescript
```

## 실행

```shell
# tsc로 컴파일
tsc src/index.ts

# 컴파일된 js 파일 실행
node src/index.js
```

## TSX(TypeScript Execute)로 한 번에 실행

```shell
# tsx 설치 (MacOS)
sudo npm i -g tsx

# ts 파일 실행
tsx src/index.ts
```