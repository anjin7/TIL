# Array 고차함수 Method

다른 함수(콜백 함수 callback function)를 인자로 받음

함수형 프로그래밍 : 변수 사용 없이 순회 작업들을 코딩

## forEach

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

## map

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

## find, findLast, findIndex, findLastIndex

**주어진 기준으로 검색**

콜백함수로에 인자로 넣었을 때 true를 반환하는

**find** `첫 번째 값 반환`

**findLast** `마지막 값 반환`

**findIndex** `첫 번째 값의 Index 반환`

**findLastIndex** `마지막 값의 Index 반환`

## some, every

**어떤/모든 요소가 기준을 충족하는지 확인**

콜백함수에 인자로 넣은

**some** `요소들 중 하나라도 true를 반환하는가 여부 반환`

**every** `모든 요소가 true를 반환하는가 여부 반환`

## filter

**주어진 기준을 충족하는 요소들로 새 배열 만들어 반환**

`원본 배열을 수정하지 않음`

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = arr.filter(i => i % 2);
const evens = arr.filter(i => !(i % 2));
const largerThan3 = arr.filter(i => i > 3);

console.log(odds);              // [1, 3, 5, 7, 9]
console.log(evens);             // [2, 4, 6, 8]
console.log(largerThan3);       // [4, 5, 6, 7, 8, 9]
```
