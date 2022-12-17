# Date

## 생성자 함수

### 현재 날짜와 시간

```
const now = new Date();

console.log(typeof now);
// object
console.log(now);
// Fri Dec 16 2022 11:28:28 GMT+0900
const nowStr = Date()

console.log(typeof nowStr);
// string
console.log(nowStr);
// Fri Dec 16 2022 11:28:28 GMT+0900
```

### 기준

\- 1970년 1월 1일 자정(UTC, 그리니치 평균시)으로부터 인자로 주어진 밀리초만큼 경과한 시간

```
console.log(
  new Date(0)
);
// Thu Jan 01 1970 09:00:00 GMT+0900
```

### 단위별 숫자 입력

\- 연, 월 ( 0부터 시작 ) 필수

\- 일, 시, 분, 초, 밀리초 옵션 없을 시 0

```
console.log(
  new Date(2022, 8, 20, 14, 35, 47, 789)
);
// Tue Sep 20 2022 14:35:47 GMT+0900
```

### dateString

\- 특정 형식의 문자열 인식 가능

\- 동작이 일관적이지 못함, 브라우저마다 차이 존재 (권장하지 않음)

```
console.log(
  new Date('August 20, 2022 14:35:47')
);
// Sat Aug 20 2022 14:35:47 GMT+0900
```

## 정적 Method

### now

\- 현재의 밀리초 숫자값 (UTC 1970/1/1 자정부터 경과값) 반환

```
console.log(Date.now());
// 1671265409989
```

### parse, UTC

\- 주어진 시간의 밀리초 숫자값 반환

\- parse는 dateString, UTC는 단위별 숫자

```
console.log(
  Date.parse('August 20, 2022 00:00:00 UTC')
);
console.log(
  // 월은 0부터 시작
  Date.UTC(2022, 7, 20, 0, 0, 0)
);
```
