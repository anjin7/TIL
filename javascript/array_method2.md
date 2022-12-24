# Array 고차함수 Method

다른 함수(콜백 함수 callback function)를 인자로 받음

함수형 프로그래밍 - 변수 사용 없이 순회 작업들을 코딩

### forEach

각 요소를 인자로 콜백함수 실행

\- for문의 좋은 대체제

\- 단점 : 예외를 던지지 않으면 종료할 수 없음 (break, continue 사용 불가)

```
const arr = [1, 2, 3, 4, 5];

const result = arr.forEach(itm => {
  console.log(itm);
});

// 1
// 2
// 3
// 4
// 5
```
