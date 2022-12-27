# Array 고차함수 Method

다른 함수(콜백 함수 callback function)를 인자로 받음

함수형 프로그래밍 : 변수 사용 없이 순회 작업들을 코딩

### forEach

**각 요소를 인자로 콜백함수 실행**

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

```
const arr = [10, 20, 30, 40, 50];

// 콜백함수의 인자가 둘일 때
arr.forEach((itm, idx) => {
  console.log(itm, idx);
});

// 10 0
// 20 1
// 30 2
// 40 3
// 50 4
```

### map

**각 요소를 주어진 콜백함수로 처리한 새 배열 반환**

```
const orgArr = [1, 2, 3, 4, 5];

const arr1 = orgArr.map(i => i + 1);
const arr2 = orgArr.map(i => i * i);
const arr3 = orgArr.map(i => i % 2 ? '홀수' : '짝수');
console.log(arr1);
console.log(arr2);
console.log(arr3);

// [2, 3, 4, 5, 6]
// [1, 4, 9, 16, 25]
// ['홀수', '짝수', '홀수', '짝수', '홀수']
```

### find, findLast, findIndex, findLastIndex

**주어진 기준으로 검색**

콜백함수로에 인자로 넣었을 때 true를 반환하는

**find** `첫 번째 값 반환`

**findLast** `마지막 값 반환`

**findIndex** `첫 번째 값의 Index 반환`

**findLastIndex** `마지막 값의 Index 반환`
