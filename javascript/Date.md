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

## Instance Method

### toString, toDateString, toTimeString

\- 각각 전체, 날짜만, 시간만 나타내는 문자열 출력

\- 시스템(컴퓨터)의 언어 설정별로 다르게 나타남

```
const now = new Date();

console.log(
  now.toString()
); // Sun Dec 18 2022 23:37:32 GMT+0900
console.log(
  now.toDateString()
); // Sun Dec 18 2022
console.log(
  now.toTimeString()
); // 23:37:32 GMT+0900
```

### toLocaleString

\- 주어진 언어 코드를 기준으로 표현한 문자열 반환

\- 인자가 없을 시 시스템의 언어 적용

```
const now = new Date();

console.log(
  now.toString()
);
console.log(
  now.toLocaleString()
);
console.log(
  now.toLocaleString('ko-KR')
);
```

### setter, getter Method

```
const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const day = '일월화수목금토'[now.getDay()];

console.log(
  `오늘은 ${year}년 ${month}월 ${date}일, ${day}요일입니다.`
);
// 오늘은 2022년 12월 18일, 일요일입니다.
```
